import React from 'react';
import styles from '../css/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.companyName}>© 2023 VR Learning Inc.</p>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;