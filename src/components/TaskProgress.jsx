import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import CustomButton from './CustomButton'
import styles from '../css/TaskProgress.module.css'
import { useNavigate } from 'react-router-dom'

const TaskProgress = ({ id, taskName, status, result, taskRoute }) => {
    const indicatorColor = status == "Completed" ? {color: "#239b56", bg: "#d5f5e3"} :  {color: "#a93226", bg: "#fadbd8"}

    return (
        <div className={styles.taskProgressContainer}>
            <div className={styles.taskLogoWrapper}>
                <div className={styles.logoWrapper}>
                    <BookOpen color={'#e06156'} size={24}></BookOpen>
                </div>
            </div>
            <div className={styles.taskNameWrapper}>
                <h3>{taskName}</h3>
            </div>
            <div className={styles.taskStatusWrapper}>
                <div style={{backgroundColor: indicatorColor.bg}} className={styles.taskStatusBackground}>
                    <div style={{backgroundColor: indicatorColor.color}} className={styles.indicator}></div>
                    <h3 >{status}</h3>
                </div>
            </div>
            <div className={styles.taskResultWrapper}>
                <h3>{result}</h3>
            </div>
            <CustomButton
                textContent={'Start'}
                onClick={taskRoute}
            ></CustomButton>
        </div>
    )
}

export default TaskProgress;