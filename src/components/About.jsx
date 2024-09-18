import {
    React,
    useState,
    useEffect
}
    from 'react';

import styles from '../css/About.module.css';
import justine from '/public/members/justine.jpg'
import justin from '/public/members/justin.jpg'
import erika from '/public/members/erika.jpg'
import alfred from '/public/members/alfred.jpg'

const teamMembers = [
    {
        name: "Alfred Pagarigan",
        role: "Lead Researcher",
        description: "Alfred spearheads our research initiatives with innovative studies and thorough data analysis.",
        imageSrc: alfred
    },
    {
        name: "Justine Daquis",
        role: "Web/System Developer",
        description: "Justine is responsible for developing and maintaining our web and system infrastructure.",
        imageSrc: justine
    },
    {
        name: "Erika Magboo",
        role: "Content Developer",
        description: "Erika creates engaging and educational content tailored for our VR systems.",
        imageSrc: erika
    },
    {
        name: "Justin Gambin",
        role: "Content Developer",
        description: "Justin designs and refines interactive, user-centric content.",
        imageSrc: justin
    }
];
const About = () => {
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
        <div className={styles.container}>

            <div className={styles.profiles}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.profile}>
                        <img src={member.imageSrc} alt={member.name} className={styles.image} />
                        <h2 className={styles.name} style={{ color: textColor }}>{member.name}</h2>
                        <h3 className={styles.role}>{member.role}</h3>
                        <p className={styles.profileDescription}>{member.description}</p>
                        <div className={styles.socialMediaLinks}>


                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default About;