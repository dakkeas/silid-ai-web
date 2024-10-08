import React, { useState, useContext, useEffect } from 'react';
import styles from '../css/Test.module.css';
import CustomButton from '../components/CustomButton'
import { HandPlatter } from 'lucide-react';
import { set } from 'firebase/database';
import { motion } from "framer-motion"
import Loading from '../components/Loading';


const Test = ({
    data,
    testTitle,
    testDescription,
    inputType,
    handleUserAnswers,
    handleSubmit,
    isLoading
}) => {
    const initialChoices = {};
    for (let i = 1; i <= data.questions.length; i++) {
        initialChoices[i] = '';
    }

    const [selectedChoices, setSelectedChoices] = useState(initialChoices);
    console.log(selectedChoices);

    const handleChoiceChange = (questionId, choiceValue) => {
        if (inputType === 'radio') {
            setSelectedChoices((prevChoices) => {
                const updatedChoices = {
                    ...prevChoices,
                    [questionId]: choiceValue
                };
                handleUserAnswers(updatedChoices);
                return updatedChoices;
            });
            console.log(questionId, choiceValue);
        } else if (inputType === 'checkbox') {

            setSelectedChoices((prevChoices) => {
                const updatedChoices = {
                    ...prevChoices,
                    [questionId]: {
                        ...prevChoices[questionId],
                        // reverse the value of the choice
                        [choiceValue]: !prevChoices[questionId][choiceValue]
                    }
                };
                handleUserAnswers(updatedChoices);
                return updatedChoices;
            });
            console.log(questionId, choiceValue);

        }
    };
    const fadeUp = {
        hidden: {
            scale: 1,
            opacity: 0,
            y: 25,

        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.75,
                type: "easeInOut",
                once: true
            },
        },
    }

    return (
        <div className={styles.background}>
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={styles.mainContainer}>

                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2>{testTitle}</h2>
                        <p>{testDescription}</p>
                    </div>
                    <div className={styles.formContainer}>
                        <form id='post-test'>
                            {data.questions.map((item, questionIndex) => (
                                <div className={styles.questionContainer}>
                                    <p>{item.question}</p>
                                    <div className={styles.imageWrapper}>
                                        {item.image && <img src={item.image} alt={item.question}></img>}
                                    </div>
                                    <div className={styles.choicesContainer}
                                    >
                                        {
                                            item.choices.map((choice, choiceIndex) => (

                                                <div key={choice.id} className={styles.choiceWrapper}>
                                                    <input

                                                        type={inputType}
                                                        value={choice.value}
                                                        name={`${item.question} - ${item.id}`}
                                                        // checked={selectedChoices[item.id] === choice.value}
                                                        onChange={() => {
                                                            handleChoiceChange(choice.id.split('-')[0], choice.value)
                                                        }}
                                                    />
                                                    <label htmlFor="">{choice.text}</label>
                                                </div>
                                            ))

                                        }
                                    </div>
                                </div>
                            ))

                            }
                            <div className={styles.btnWrapper}>
                                <CustomButton
                                    textContent={isLoading ? <Loading /> : 'Submit'}
                                    onClick={handleSubmit}

                                ></CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Test;