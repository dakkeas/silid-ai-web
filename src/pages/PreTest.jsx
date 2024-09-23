import React, { useEffect, useState, useContext } from 'react';
import Test from './Test';
import data from '../data/pretest.json';
import { ref, onValue, getDatabase, set } from "firebase/database";
import { writePreTestResults } from '../utils/firebase';
import { Context } from '../utils/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ConfirmModal from '../components/ConfirmModal';
import NoAnswersModal from '../components/NoAnswersModal';

const PreTest = () => {
    // authorized access to pretest
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [userAnswers, setUserAnswers] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isTestCompleted, setIsTestCompleted] = useState(false)
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
    const [isNoAnswersModalOpen, setIsNoAnswersModalOpen] = useState(false)


    useEffect(() => {
        // checks whether test is already completed
        const db = getDatabase();
        const userDataRef = ref(db, `users/${user.uid}`);

        onValue(userDataRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                if (data.pretest.completed) {
                    console.log('Pretest already completed, routing back to dashboard ...')
                    setIsTestCompleted(true)
                }
            }
        })

    }, [])

    // get correct answers
    const correctAnswers = data.questions.map((item, index) => {
        return {
            correctAnswer: item.correct,
            questionDifficulty: item.difficulty
        }
    })

    // result object to store results
    const result = {
        easy: 0,
        intermediate: 0,
        difficult: 0
    }


    const handleIsLoading = (loading) => {
        // used to update loading status of btn
        setIsLoading(loading)
    }

    const handleUserAnswers = (userAnswers) => {
        // used to update loading status of btn
        setUserAnswers(userAnswers)
    }

    const writeAnswers = () => {

        setIsLoading(true)

        Object.entries(userAnswers).forEach(([key, value]) => {
            if (value == correctAnswers[key - 1].correctAnswer) {
                // if answer is correct, update answer object
                result[correctAnswers[key - 1].questionDifficulty] += 1
            }

        })

        writePreTestResults(result, handleIsLoading, user.uid)
        navigate('/dashboard')

        setIsLoading(false)

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

        <>
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
                testTitle={"PAILON VR Pre Test"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
                inputType="radio"
                handleUserAnswers={handleUserAnswers}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            ></Test>

        </>
    );
};

export default PreTest;