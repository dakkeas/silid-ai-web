import React from 'react';
import styles from '../css/ConfirmModal.module.css';
import { motion } from 'framer-motion';

const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    onConfirmTextBtn = "Confirm",
    confirmTitle = "Confirm Submission",
    confirmMessage = "Are you sure you want to submit your answers?"

}) => {

    if (!isOpen) return null;
    const modalPop = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.25,
                type: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
                type: "easeInOut",
            },
        },

    }

    return (
        <div className={styles.modalOverlay}>
            <motion.div
                variants={modalPop}
                initial="hidden"
                animate="visible"
                className={styles.modalContent}>
                <h2>{confirmTitle}</h2>
                <p>{confirmMessage}</p>
                <div className={styles.buttonGroup}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>{onConfirmTextBtn}</button>
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmModal;