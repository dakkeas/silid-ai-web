import {
    React,
    useState,
    useEffect
}
    from 'react';

import styles from '../css/About.module.css';
import justine from '../assets/members/justine.jpg'
import justin from '../assets/members/justin.jpg'
import erika from '../assets/members/erika.jpg'
import alfred from '../assets/members/alfred.jpg'

const teamMembers = [
    {
        name: "Alfred Pagarigan",
        role: "Lead Researcher",
        description: "Alfred spearheads our research efforts, driving forward our knowledge and understanding with groundbreaking studies and data analysis.",
        imageSrc: alfred
    },
    {
        name: "Justine Daquis",
        role: "Web/System Developer",
        description: "Justine is a key player in developing and maintaining our web and system infrastructure, ensuring seamless performance and innovative solutions.",
        imageSrc: justine
    },
    {
        name: "Erika Magboo",
        role: "Content Developer",
        description: "Erika excels in crafting engaging and educational content, designing immersive and interactive learning experiences for our VR systems.",
        imageSrc: erika
    },
    {
        name: "Justin Gambin",
        role: "Content Developer",
        description: "Justin focuses on creating and refining content for our projects, ensuring it is both interactive and user-centric, and integrating it effectively into our systems.",
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