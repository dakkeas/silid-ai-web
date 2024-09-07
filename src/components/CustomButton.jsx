import { React, useEffect, useState } from 'react';

// import styles
import styles from '../css/CustomButton.module.css';
import '../css/global.css';

const CustomButton = ({ textContent, type }) => {

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
        <button className={styles.button} style={{ backgroundColor }}>
            {textContent}
        </button>
    );
};

export default CustomButton;