import React, { useEffect, useContext, useState } from 'react';
import Test from './Test'
import data from '../data/vark.json'
import { ref, onValue, getDatabase } from "firebase/database";
import { writeVarkTestResults } from '../utils/firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import { Context } from '../utils/AuthContext';
import ConfirmModal from '../components/ConfirmModal';
import NoAnswersModal from '../components/NoAnswersModal';



const Vark = () => {
    // submit handler
    // unique submit logic for each test as it has different functions
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const [userAnswers, setUserAnswers] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isTestCompleted, setIsTestCompleted] = useState(false)
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
    const [isNoAnswersModalOpen, setIsNoAnswersModalOpen] = useState(false)

    const handleIsLoading = (loading) => {
        // used to update loading status of btn
        setIsLoading(loading)
    }

    const handleUserAnswers = (userAnswers) => {
        // used to update loading status of btn
        setUserAnswers(userAnswers)
        console.log(userAnswers)
        console.log(correctAnswers)
    }

    useEffect(() => {
        // checks whether test is already completed
        const db = getDatabase();
        const userDataRef = ref(db, `users/${user.uid}`);

        onValue(userDataRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                if (data.vark.completed) {
                    setIsTestCompleted(true)
                }
            }
        })

    }, [])

    // get correct answers
    const correctAnswers = data.questions.map((item, index) => {
        return {
            correctAnswer: item.correct,
        }
    })

    // result object to store results
    const result = {
        read: 0,
        aural: 0,
        kinesthetic: 0,
        visual: 0,
    }
    
    const writeAnswers = () => {
        Object.entries(userAnswers).forEach(([key, value]) => {
            console.log('user ans: ', value)
            console.log('correct ans:', correctAnswers[key - 1].correctAnswer)

            Object.entries(value).forEach(([key, value]) => {
                switch (key) {
                    case 'read':
                        if (value) {
                            result.read += 1
                        }
                        break;
                    case 'aural':
                        if (value) {
                            result.aural += 1
                        }
                        break;
                    case 'kinesthetic':
                        if (value) {
                            result.kinesthetic += 1
                        }
                        break;
                    case 'visual':
                        if (value) {
                            result.visual += 1
                        }
                        break;
                    default:
                        console.log('Invalid key')
                }
            })

        })

        // write results 
        writeVarkTestResults(result, handleIsLoading, user.uid)
        // return to dashboard
        /*
        REPLACE THIS WITH A SUBMISSION COMPLETED PAGE!
        */
        navigate('/dashboard')

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        userAnswers !== undefined ? setIsConfirmModalOpen(true) : setIsNoAnswersModalOpen(true)
    }


    if (isTestCompleted) {
        // if test completed, return to dashboard
        return <Navigate to='/dashboard' />
    }


    return (
        <div style={{
            height: '100%',
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <NoAnswersModal
                isOpen={isNoAnswersModalOpen}
                onClose={() => setIsNoAnswersModalOpen(false)}
            ></NoAnswersModal>
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={writeAnswers}

            ></ConfirmModal>
            <Test
                data={data}
                testTitle={"PAILON VR VARK Questionnaire"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
                inputType="checkbox"
                handleUserAnswers={handleUserAnswers}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            />
        </div>
    );
}

export default Vark;