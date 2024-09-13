import React, { useState, useContext, useEffect } from 'react';
import styles from '../css/Test.module.css';
import CustomButton from '../components/CustomButton'
import { HandPlatter } from 'lucide-react';


const Test = ({
    data,
    testTitle,
    testDescription,
    inputType,
    handleSubmit
}) => {
    const [selectedChoices, setSelectedChoices] = useState({});

    const handleChoiceChange = (questionId, choiceValue) => {
        console.log(choiceValue)
        console.log(questionId)
        setSelectedChoices(prevChoices => ({
            ...prevChoices,
            [questionId]: choiceValue
        }));
    };


    return (
        <div className={styles.mainContainer}>

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
                                {item.image && <img src={item.image} alt={item.question}></img>}
                                <div className={styles.choicesContainer}>

                                    {
                                        item.choices.map((choice, choiceIndex) => (

                                            <div key={choice.id} className={styles.choiceWrapper}>
                                                <input
                                                    type={inputType}
                                                    value={choice.value}
                                                    name={`${item.question} - ${item.id}`}
                                                    // checked={selectedChoices[item.id] === choice.value}
                                                    onChange={() => handleChoiceChange(questionIndex + 1, choice.value, item.correct)}
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
                                textContent="Submit"
                                onClick={handleSubmit(selectedChoices)}

                            ></CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Test;