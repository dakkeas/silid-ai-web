import React, { useState, useEffect } from 'react';
import styles from '../css/SignUp.module.css';
import placeholder from '/public/learners/documents.jpg'
import CustomButton from '../components/CustomButton'
import { signUpNewUser } from "../utils/firebase"
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'


const SignUp = () => {

    // loading hook
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    // form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        program: '',
        learningPreference: '',

    });

    // form errors
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmPassword: '',
        program: '',
        learningPreference: '',
    });

    // whether to show error on UI
    const [showErrors, setShowErrors] = useState(false);

    const handleFormErrors = (name, value) => {
        setFormErrors({
            ...formErrors,
            [name]: value
        })

    }

    const handleIsLoading = (boolean) => {
        setIsLoading(boolean)
    }

    const validateField = (name, value) => {
        // checks if the input fields are valid or not  
        let errors = formErrors;

        switch (name) {
            case 'firstName':
                errors.firstName = value.length < 2 ? 'Must be at least 2 characters long' : '';
                break;
            case 'lastName':
                errors.lastName = value.length < 2 ? 'Must be at least 2 characters long' : '';
                break;
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 6 ? 'Must be at least 6 characters long' : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== formData.password ? 'Passwords do not match' : '';
                break;
            case 'program':
                errors.program = value === '' ? 'Please select a program' : '';
                break;
            case 'learningPreference':
                errors.learningPreference = value === '' ? 'Please select a learning preference' : '';
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
        // this function is called everytime the value changes
        // in the input fields
        setShowErrors(false)
        const { name, value } = e.target;
        // destructure the name and value from the event target

        console.log(value)
        setFormData({
            // spread the existing form data
            ...formData,
            // update
            [name]: value,
        });

        // update error log
        validateField(name, value);
    };

    const handleSignUp = (e) => {
        e.preventDefault()
        setShowErrors(true)
        setIsLoading(true)
        if (validateForm()) {
            signUpNewUser(formData, handleFormErrors, handleIsLoading, navigate)
        } else {
            setIsLoading(false)
            console.log('there is an error!')
        }
    }
    const fadeUp = {
        hidden: {
            scale: 0.9,
            opacity: 0,
            y: 50,

        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,

            transition: {
                duration: 1,
                type: "easeInOut",
                once: true
            },
        },
    }

    return (

        <div className={styles.background}>
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={styles.mainContainer}>
                <div className={styles.heroImageContainer}>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                type: "easeInOut",
                                once: true,
                                delay: 0.5,
                            },
                        }}
                        className={styles.heroTextWrapper}>
                        <h2>Start your VR journey today.</h2>
                        <p>Embark on an immersive VR learning experience today.</p>
                    </motion.div>
                    <img src={placeholder} alt="" />
                </div>
                <div className={styles.signUpContainer}>
                    <h2>Sign Up</h2>
                    <p>Fill in the forms below to get started.</p>
                    <form >

                        <div className={styles.fnamelnameWrapper}>
                            <div>
                                <label htmlFor="firstName" className={styles.innerLabel}>First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder='Your first name'
                                    value={formData.firstName}
                                    // handle change
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {showErrors && <div className={styles.errorLog}>{formErrors.firstName}</div>}
                            <div>
                                <label htmlFor="lastName" className={styles.innerLabel}>Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder='Your last name'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {showErrors && <div className={styles.errorLogLastName}>{formErrors.lastName}</div>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.innerLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Your email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {showErrors && <div className={styles.errorLog}>{formErrors.email}</div>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.innerLabel}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Your password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {showErrors && <div className={styles.errorLog}>{formErrors.password}</div>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="confirmPassword" className={styles.innerLabel}>Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder='Confirm your password'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {showErrors && <div className={styles.errorLog}>{formErrors.confirmPassword}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="program" className={styles.innerLabel}>Program</label>
                            <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a program</option>
                                <option value="STEM">STEM (Science, Technology, Engineering, Mathematics)</option>
                                <option value="GAS">GAS</option>
                                <option value="HUMMS">HUMMS</option>
                                <option value="Faculty">Faculty</option>
                            </select>
                            {showErrors && <div className={styles.errorLog}>{formErrors.program}</div>}
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.innerLabel} >Learning Preference</label>
                            <select
                                id="learningPreference"
                                name="learningPreference"
                                value={formData.learningPreference}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a program</option>
                                <option value="traditional">Traditional</option>
                                <option value="adaptive">Adaptive</option>
                            </select>
                            {showErrors && <div className={styles.errorLog}>{formErrors.learningPreference}</div>}

                        </div>
                        <div className={styles.signUpBtnWrapper}>
                            <CustomButton
                                // type='submit'
                                textContent={isLoading ? <Loading color="white"></Loading> : 'Sign Up'}
                                onClick={handleSignUp}
                            ></CustomButton>
                        </div>
                    </form>
                </div>

            </motion.div>
        </div>
    );
};

export default SignUp;