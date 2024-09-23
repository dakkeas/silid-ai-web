import React, { useState, useEffect, useContext } from 'react';
import styles from '../css/LoginModal.module.css';
import CustomButton from "../components/CustomButton";
import Loading from '../components/Loading'
import Backdrop from '../components/Backdrop';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { signInNewUser } from '../utils/firebase';

const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // initialize firebase!
        // initFirebase()

    }, [])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    const [showErrors, setShowErrors] = useState(false);


    const handleIsLoading = (boolean) => {
        setIsLoading(boolean)
    }

    const handleFormErrors = (name, value) => {
        setFormErrors({
            ...formErrors,
            [name]: value
        })
    }

    const validateField = (name, value) => {
        // checks if the input fields are valid or not  
        let errors = formErrors;

        switch (name) {
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 6 ? 'Must be at least 6 characters long' : '';
                break;
            default:
                break;
        }

        setFormErrors(errors);
    };

    const validateForm = () => {
        let valid = true;
        Object.values(formErrors).forEach(error => {
            if (error.length > 0) valid = false;
        });
        Object.values(formData).forEach(value => {
            if (value === '') valid = false;
        });
        return valid;
    };


    const handleChange = (e) => {
        setShowErrors(false)
        console.log(formErrors)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        validateField(name, value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };
    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true)
        setShowErrors(true)
        console.log('signing in...')
        if (validateForm()) {
            signInNewUser(formData, handleIsLoading, handleFormErrors, navigate)

        } else {
            setIsLoading(false)
            console.log('invalid credentials!')
            console.log(formErrors)
            console.log(formData)

        }
    }

    const fadeIn = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
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
    };


    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="exit"

                className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>Login</h2>
                <p>Welcome back, user. </p>
                <form >
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.innerLabel}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                        {showErrors && <div className={styles.errorLog}>{formErrors.email}</div>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                        {showErrors && <div className={styles.errorLog}>{formErrors.password}</div>}
                    </div>
                    <div className={styles.submitButtonWrapper}>
                        <CustomButton
                            textContent={isLoading ? <Loading color="white" /> : 'Login'}
                            onClick={handleSignIn}
                        ></CustomButton>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginModal;