import React from 'react';
import styles from '../css/Test.module.css';


const Test = ({
    data,
    testTitle,
    testDescription,
}) => {
    console.log(data)
    return (
        <div className={styles.mainContainer}>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>{testTitle}</h2>
                    <p>{testDescription}</p>
                </div>
                <div className={styles.formContainer}>
                    <form id='post-test'>
                        {data.map((item, index) => (
                            <div className={styles.questionContainer}>
                                <p>{item.question}</p>
                                <div className={styles.choicesContainer}>
                                    {
                                        item.choices.map((choice, index) => (
                                            <div key={index} className={styles.formGroup}>
                                                <label htmlFor="">{choice.text}</label>
                                                <input type="radio" value={choice.id} />
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                        ))

                        }
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Test;