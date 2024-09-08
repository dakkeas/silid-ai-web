import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/NotFound.module.css';
import { Link } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        // This function is currently not implemented
        // navigate('/');
    };

    return (
        <div className={styles.notFoundContainer}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link className={styles.link} to="/">Go to Home</Link>
        </div>
    );
};

export default NotFound;