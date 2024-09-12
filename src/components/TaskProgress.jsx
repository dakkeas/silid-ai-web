import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import CustomButton from './CustomButton'
import styles from '../css/TaskProgress.module.css'
import { useNavigate } from 'react-router-dom'

const TaskProgress = ({ id, taskName, status, result }) => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        console.log('Button clicked!')
        console.log(id)

        switch (id) {
            case 0:
                // setNavigateTo('/pretest');
                console.log('navigating to pretest')
                navigate('/pretest');
                break;
            case 1:
                // setNavigateTo('/pretest');
                console.log('navigating to posttest')
                navigate('/posttest');
                break;

            case 2:
                // setNavigateTo('/pretest');
                console.log('navigating to vark')
                navigate('/vark');
                break;
        }


    }

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
                <h3>{status}</h3>
            </div>
            <div className={styles.taskResultWrapper}>
                <h3>{result}</h3>
            </div>
            <CustomButton
                textContent={'Start'}
                onPress={handleNavigation}
            ></CustomButton>
        </div>
    )
}

export default TaskProgress;