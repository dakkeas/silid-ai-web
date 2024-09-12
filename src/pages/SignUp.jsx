import React, { useState, useEffect } from 'react';
import styles from '../css/SignUp.module.css';
import placeholder from '../../public/vr-kids-2.jpg'
import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { initFirebase, createNewUser } from "../utils/firebase"


const SignUp = () => {
    // firebase authentication functions
    const navigate = useNavigate()
    useEffect(() => {
        // run onlu once!
        console.log("initializing firebase app ...")
        initFirebase()
    }, [])



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        program: '',
        learningPreference: '',

    });

    const handleChange = (e) => {
        // this function is called everytime the value changes
        // in the input fields
        const { name, value } = e.target;
        // destructure the name and value from the event target

        console.log(value)
        setFormData({
            // spread the existing form data
            ...formData,
            // update
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    /*
    firebase authentication
    */
    const routeToHome = () => {
        navigate('/')
    }


    const handleSignUp = () => {
        console.log('signing up..')
        // initialize app here
        const auth = getAuth();
        /*
        handle username, password validation here!
        */

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                console.log('signing up .....')
                // Signed up 
                const db = getDatabase()
                const user = userCredential.user;
                console.log(user)
                createNewUser(
                    db,
                    user.uid,
                    formData
                )

                // after signing in is completed...
                routeToHome()

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

                console.log(errorCode)
                console.log(errorMessage)
            });
    }



    return (

        <div className={styles.background}>
            <div className={styles.mainContainer}>
                <div className={styles.heroImageContainer}>
                    <div className={styles.heroTextWrapper}>
                        <h2>Start your VR journey today.</h2>
                        <p>Embark on an immersive VR learning experience today.</p>
                    </div>
                    <img src={placeholder} alt="" />
                </div>
                <div className={styles.signUpContainer}>
                    <h2>Sign Up</h2>
                    <p>Fill in the forms below to get started.</p>
                    <form onSubmit={handleSubmit}>

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

                        </div>
                        <button className={styles.submitButton} type="submit" onClick={handleSignUp}>Sign Up</button>
                    </form>
                    <div className={styles.signUpBtnWrapper}>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;