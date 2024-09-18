import React from 'react';
import styles from '../css/ConfirmModal.module.css';

const ConfirmModal = ({ 
    isOpen, 
    onClose, 
    onConfirm,
    onConfirmTextBtn = "Confirm",
    confirmTitle = "Confirm Submission",
    confirmMessage = "Are you sure you want to submit your answers?"

}) => {

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{confirmTitle}</h2>
                <p>{confirmMessage}</p>
                <div className={styles.buttonGroup}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>{onConfirmTextBtn}</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;