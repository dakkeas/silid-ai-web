import React from 'react'
import styles from '../css/InformationBlock.module.css';
import exampleImage from "./../assets/vr-kids.jpg";

const InformationBlock = ({ title, description, imageSrc }) => {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.imageWrapper}>
                <img src={exampleImage} alt={title} className={styles.image} />
            </div>
        </div>
    );
};

export default InformationBlock;