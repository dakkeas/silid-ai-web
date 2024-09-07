import React from 'react'


import '../css/global.css'
import styles from '../css/LearnerCard.module.css'

const LearnerCard = ({learner}) => {
    const {title, description, imgSrc} = learner

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    {/* image */}
                    <img src={imgSrc} alt={title} />
                </div>

                <div className={styles.textWrapper}>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

            </div>
        </>
    )
}


export default LearnerCard 