import React from 'react'
import classNames from "classnames"

// import styles
import styles from '../css/HeroText.module.css'
import '../css/global.css'

// import components
import CustomButton from '../components/CustomButton'

import { useNavigate } from 'react-router-dom'


const HeroText = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.heroTextWrapper}>
                <h2 className={styles.title}>Unlocking Potential with Adaptive VR Learning</h2>
                <p className={styles.description}>Welcome to the future of learning! Step into a world where education knows no bounds. <br></br>
                    Explore immersive experiences,
                    personalized just for you, with cutting-edge Adaptive VR Learning.</p>
                <CustomButton
                    textContent={'Get Started'}
                    onClick={() => navigate('/signup')}
                ></CustomButton>

            </div>
        </>

    )
}

export default HeroText