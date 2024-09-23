import React from 'react';
import styles from '../css/NoAnswersModal.module.css';
import { motion } from 'framer-motion'

const NoAnswersModal = ({ isOpen, onClose }) => {
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
        <div
            className={styles.modalOverlay}>
            <motion.div
                variants={modalPop}
                initial="hidden"
                animate="visible"
                className={styles.modalContent}>
                <h2>Warning</h2>
                <p>You have not answered any of the questions.</p>
                <button onClick={onClose}>Close</button>
            </motion.div>
        </div>
    );
};

export default NoAnswersModal;