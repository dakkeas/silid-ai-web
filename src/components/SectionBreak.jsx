import React from 'react';
import styles from '../css/SectionBreak.module.css'; // Adjust the path as needed
import '../css/global.css';


const SectionBreak = ({ title, description }) => {
    return (
        <div className={styles.sectionBreak}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionDescription}>
                {description}
            </p>
        </div>
    );
};

export default SectionBreak;