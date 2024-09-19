import React, { useEffect, useState, useContext } from 'react';
import styles from '../css/Dashboard.module.css';
import CustomButton from '../components/CustomButton';
import { ref, set, onValue } from "firebase/database";
import { getDatabase } from 'firebase/database';
import TaskProgress from '../components/TaskProgress';
import { House, Settings, Calendar, LogOut, Info, StickyNote } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { signOutUser, checkAuthState } from '../utils/firebase';
import Loading from '../components/Loading';
import { Context } from '../utils/AuthContext'
import ConfirmModal from '../components/ConfirmModal';



const availableTests = [
    {
        logo: "https://example.com/pretest-logo.png",
        nodeName: "pretest",
        taskName: "Pre Test",
        status: "",
        result: "--",
        learners: ['adaptive', 'traditional']
    },
    {
        logo: "https://example.com/posttest-logo.png",
        nodeName: "posttest",
        taskName: "Post Test",
        status: "",
        result: "--",
        learners: ['adaptive', 'traditional']

    },
    {
        logo: "https://example.com/vark-logo.png",
        taskName: "VARK Questionnaire",
        nodeName: "vark",
        status: "In Progress",
        result: "N/A",
        learners: ['adaptive']
    }
];



const Dashboard = () => {

    const navigate = useNavigate();
    const { user } = useContext(Context)
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [currentDate, setCurrentDate] = useState('')
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
    const [tests, setTests] = useState([
        {
            taskName: "Pre Test",
            status: "",
            result: "--",
            learners: ['adaptive', 'traditional']
        },
        {
            taskName: "Post Test",
            status: "",
            result: "--",
            learners: ['adaptive', 'traditional']

        },
        {
            taskName: "VARK Questionnaire",
            status: "",
            result: "--",
            learners: ['adaptive',]
        }
    ])

    console.log(tests)

    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        setCurrentDate(`${day} ${month}, ${year}`)

    };

    const handleFetchUserData = (dataObject) => {
        setUserData(dataObject)

    }


    const updateTestStatus = (index, newStatus) => {
        setTests(prevTests =>
            prevTests.map((test, i) =>
                i === index ? { ...test, status: newStatus } : test
            )
        );
    };

    useEffect(() => {
        checkAuthState()
        const db = getDatabase();

        const userDataRef = ref(db, `users/${user.uid}`);

        onValue(userDataRef, (snapshot) => {
            console.log(user.uid)
            const data = snapshot.val();
            console.log(data)
            if (data) {
                handleFetchUserData(data)
                setIsLoading(false)
                tests.forEach((test, index) => {
                    switch (index) {
                        case 0:
                            console.log(data.pretest.completed);
                            updateTestStatus(index, data.pretest.completed === false ? 'Not Started' : 'Completed');
                            break;
                        case 1:
                            console.log(data.posttest.completed);
                            updateTestStatus(index, data.posttest.completed === false ? 'Not Started' : 'Completed');
                            break;
                        case 2:
                            console.log(data.vark.completed);
                            updateTestStatus(index, data.vark.completed === false ? 'Not Started' : 'Completed');
                            break;
                        default:
                            console.log('Invalid index');
                    }
                });

            } else {
                setIsLoading(false)
                console.log('error fetching data...')
            }

        });

        getCurrentDate()

    }, [])

    const handleNavigation = (id) => {

        switch (id) {
            case 0:
                return () => navigate('/pretest')
            case 1:
                return () => navigate('/posttest')

            case 2:
                return () => navigate('/vark')
        }
    }

    const confirmLogOut = () => {
        setIsConfirmModalOpen(true)
    }

    return (


        <div className={styles.mainContainer}>
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={() => signOutUser()}
                onConfirmTextBtn={"Confirm"}
                confirmTitle={"Log Out"}
                confirmMessage={"Are you sure you want to log out?"}


            ></ConfirmModal>

            <div className={styles.dashboardContainer}>
                <div className={styles.sidebar}>
                    <p>Pailon VR</p>

                    <ul>
                        <li>
                            <House color={'grey'} size={24}></House>
                            <a href="#reports">Home</a>
                        </li>
                        <li >
                            <StickyNote color={'grey'} size={24}></StickyNote>
                            <a href="#reports">Modules</a>
                        </li>
                        <li>
                            <Settings color={'grey'} size={24}></Settings>
                            <a href="#reports">Settings</a>
                        </li>
                    </ul>

                    <div className={styles.bottomNav}>
                        <ul>
                            <li>
                                <Info color={'grey'} size={24}></Info>
                                <a>Help & Information</a>
                            </li>
                            <li
                                onClick={confirmLogOut}
                            >
                                <LogOut color={'grey'} size={24}></LogOut>
                                <a>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={styles.mainContent}>
                    <div className={styles.mainContentGreet}>
                        <div style={{ display: 'flex', flexDirection: "column" }} className={styles.heroWrapper}>
                            <h2>Hello, {isLoading ? <Loading color="lightgrey"></Loading> : `${userData.firstName} ${userData.lastName}`}</h2>
                            <p>Track all of your progress with Pailon VR here.</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: "row" }} className={styles.dateWrapper}>
                            <p>{isLoading ? <Loading color="lightgrey"></Loading> : currentDate}</p>
                            <div className={styles.logoWrapper}>
                                <Calendar color={'#e06156'} size={24}></Calendar>
                            </div>
                        </div>
                    </div>


                    <div className={styles.mainSection}>
                        <h2>Tasks</h2>
                        {isLoading ? <Loading color="lightgrey"></Loading> :
                            <div className={styles.tasksContainer}>
                                {
                                    tests.filter((test) => test.learners.includes(userData.learningPreference)).map((test, index) => {
                                        return (
                                            <TaskProgress
                                                key={index}
                                                logo={test.logo}
                                                taskName={test.taskName}
                                                status={test.status}
                                                result={test.result}
                                                id={index}
                                                taskRoute={handleNavigation(index)}
                                                isDisabled={test.status === 'Completed' ? true : false}

                                            />
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className={styles.mainSection}>
                        <h2>Progress</h2>

                    </div>
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.profilePicWrapper}>
                            <img src="/anonymous.jpg" alt="pfp" />
                        </div>
                        <div className={styles.profileTextWrapper}>
                            <h3>{isLoading ? <Loading color="lightgrey"></Loading> : `${userData.firstName} ${userData.lastName}`}</h3>
                            <p>Polytechnic University of the Philippines</p>
                        </div>
                    </div>

                    <div className={styles.profileInformationContainer}>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;