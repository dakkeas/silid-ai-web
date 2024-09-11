import React from 'react';
import styles from '../css/Dashboard.module.css';
import CustomButton from '../components/CustomButton';
import TaskProgress from '../components/TaskProgress';
import { BookOpen, House, Settings, Calendar, LogOut, Info, StickyNote } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';



const availableTests = [
    {
        logo: "https://example.com/pretest-logo.png",
        taskName: "Pretest",
        status: "Completed",
        result: "85%"
    },
    {
        logo: "https://example.com/posttest-logo.png",
        taskName: "Posttest",
        status: "Pending",
        result: "N/A"
    },
    {
        logo: "https://example.com/vark-logo.png",
        taskName: "VARK Questionnaire",
        status: "In Progress",
        result: "N/A"
    }
];



const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("logging out user ....")
        navigate('/');
    }
    return (


        <div className={styles.mainContainer}>

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
                                onClick={handleLogOut}
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
                            <h2>Hello, Juan Dela Cruz</h2>
                            <p>Track all of your progress with Pailon VR here.</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: "row" }} className={styles.dateWrapper}>
                            <p>16 May, 2024</p>
                            <div className={styles.logoWrapper}>
                                <Calendar color={'#e06156'} size={24}></Calendar>
                            </div>
                        </div>
                    </div>


                    <div className={styles.mainSection}>
                        <h2>Tasks</h2>
                        <div className={styles.tasksContainer}>
                            {
                                availableTests.map((test, index) => {
                                    return (
                                        <TaskProgress
                                            key={index}
                                            logo={test.logo}
                                            taskName={test.taskName}
                                            status={test.status}
                                            result={test.result}
                                            id={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.mainSection}>
                        <h2>Progress</h2>

                    </div>
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.profilePicWrapper}>
                            <img src="/public/anonymous.jpg" alt="pfp" />
                        </div>
                        <div className={styles.profileTextWrapper}>
                            <h3>Juan dela Cruz</h3>
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