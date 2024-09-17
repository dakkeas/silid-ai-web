import { React, useEffect, useState } from 'react';

// import styles
import styles from '../css/CustomButton.module.css';
import '../css/global.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ textContent, type, onClick, disabled }) => {

    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {
        // load root style
        // load color
        const rootStyles = getComputedStyle(document.documentElement);
        const primaryColor = rootStyles.getPropertyValue('--orange-theme').trim();
        const secondaryColor = rootStyles.getPropertyValue('--green-theme').trim();

        if (type === 'primary') {
            setBackgroundColor(primaryColor);
        } else if (type === 'secondary') {
            setBackgroundColor(secondaryColor);
        }
        // load on every type change
    }, [type]);


    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            style={{ backgroundColor: disabled ? 'lightgrey' : backgroundColor }}
        >{textContent}</button>
    );
};

export default CustomButton;