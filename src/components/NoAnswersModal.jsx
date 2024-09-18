import React from 'react';
import styles from '../css/NoAnswersModal.module.css';

const NoAnswersModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Warning</h2>
                <p>You have not answered any of the questions.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default NoAnswersModal;