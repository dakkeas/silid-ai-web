import React from 'react';
import styles from '../css/CustomButton.module.css';

const CustomButton = ({ textContent }) => {
    return (
        <button className={styles.button}>
            {textContent}
        </button>
    );
};

export default CustomButton;