import { useEffect, React, useState } from 'react'

// import styles

import '../css/global.css'
import styles from '../css/FeatureCard.module.css'

const FeatureCard = ({ feature }) => {

    const { title, description, imgSrc } = feature;
    const [textColor, setTextColor] = useState('');

    useEffect(() => {
        // load root style
        // load color
        const rootStyles = getComputedStyle(document.documentElement);
        const primaryColor = rootStyles.getPropertyValue('--orange-theme').trim();

        setTextColor(primaryColor);
        // load on every type change
    }, []);


    return (
        <>
            <div className={styles.card}>
                <div className={styles.contentWrapper}>

                    <div className={styles.logoWrapper}>
                        <img src={imgSrc} alt={title} />
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.title} style={{ color: textColor }}>{title}</p>
                        <p className={styles.description}>{description}</p>
                    </div>

                </div>
            </div>
        </>
    )
}


export default FeatureCard