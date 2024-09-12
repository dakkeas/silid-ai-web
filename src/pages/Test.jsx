import React from 'react';
import styles from '../css/Test.module.css';
import CustomButton from '../components/CustomButton'


const Test = ({
    data,
    testTitle,
    testDescription,
    inputType
}) => {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>{testTitle}</h2>
                    <p>{testDescription}</p>
                </div>
                <div className={styles.formContainer}>
                    <form id='post-test'>
                        {data.questions.map((item, index) => (
                            <div className={styles.questionContainer}>
                                <p>{item.question}</p>
                                {item.image && <img src={item.image} alt={item.question}></img>}
                                <div className={styles.choicesContainer}>

                                    {
                                        item.choices.map((choice, index) => (

                                            <div key={choice.id} className={styles.choiceWrapper}>
                                                <input type={inputType} value={choice.value} name={`${item.question} - ${item.id}`} />
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
                            ></CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Test;