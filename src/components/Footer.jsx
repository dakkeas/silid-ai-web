import {
    React,
    useState,
    useEffect
} from 'react';
import styles from '../css/Footer.module.css';


const Footer = () => {
    const [textColor, setTextColor] = useState('');

    useEffect(() => {
        // load root style
        // load color
        const rootStyles = getComputedStyle(document.documentElement);
        const color = rootStyles.getPropertyValue('--orange-theme').trim();

        setTextColor(color);

        // load on every type change
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.location}>
                <h2 className={styles.locationTitle} style={{ color: textColor }}>Our Office</h2>
                <p className={styles.address}>
                    Research Institue for Strategic Foresight and Innovation
                    <br></br>4/F Engineering Science Research Center (ESRC) Building, PUP A. Mabini Campus Anonas Street, Sta. Mesa, Manila Philippines 1016
                    <br></br>
                    Phone: (123) 456-7890<br />
                    Email: risfi@pup.edu.ph
                </p>
            </div>
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