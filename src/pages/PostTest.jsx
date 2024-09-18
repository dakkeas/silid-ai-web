
import React, { useEffect, useContext, useState } from 'react';
import Test from './Test';
import data from '../data/posttest.json';
import { ref, onValue, getDatabase } from "firebase/database";
import { writePostTestResults } from '../utils/firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import { Context } from '../utils/AuthContext';
import ConfirmModal from '../components/ConfirmModal';
import NoAnswersModal from '../components/NoAnswersModal';

const PostTest = () => {
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
                if (data.posttest.completed) {
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
        score: 0
    }

    const writeAnswers = () => {
        Object.entries(userAnswers).forEach(([key, value]) => {
            console.log('user ans: ', value)
            console.log('correct ans:', correctAnswers[key - 1].correctAnswer)

            if (value == correctAnswers[key - 1].correctAnswer) {
                // if answer is correct, update answer object
                console.log('CORRECT')
                // result[correctAnswers[key - 1].questionDifficulty] += 1
                result.score += 1
            } else {
                console.log('WRONG')

            }

        })

        writePostTestResults({ score: result }, handleIsLoading, user.uid)
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
            alignItems: "center"
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
                testTitle={"PAILON VR Post Test"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
                inputType="radio"
                handleUserAnswers={handleUserAnswers}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            // submitHandler
            ></Test>
        </div>

    );
};

export default PostTest;