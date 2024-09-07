import React from 'react';
import styles from '../css/About.module.css';

const teamMembers = [
    {
        name: "John Doe",
        role: "CEO",
        description: "John is the visionary behind our company, leading the team with a focus on innovation and excellence.",
        imageSrc: "path/to/john-doe.jpg"
    },
    {
        name: "Jane Smith",
        role: "CTO",
        description: "Jane is the tech guru, ensuring our technology stack is cutting-edge and scalable.",
        imageSrc: "path/to/jane-smith.jpg"
    },
    {
        name: "Alice Johnson",
        role: "Lead Designer",
        description: "Alice brings creativity to the team, designing user-friendly and aesthetically pleasing interfaces.",
        imageSrc: "path/to/alice-johnson.jpg"
    },
    {
        name: "Bob Brown",
        role: "Lead Developer",
        description: "Bob is the coding wizard, turning ideas into reality with clean and efficient code.",
        imageSrc: "path/to/bob-brown.jpg"
    }
];

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.description}>
                We are a team of passionate individuals committed to delivering the best VR adaptive learning experiences.
            </p>
            <div className={styles.profiles}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.profile}>
                        <img src={member.imageSrc} alt={member.name} className={styles.image} />
                        <h2 className={styles.name}>{member.name}</h2>
                        <h3 className={styles.role}>{member.role}</h3>
                        <p className={styles.profileDescription}>{member.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.location}>
                <h2 className={styles.locationTitle}>Our Office</h2>
                <p className={styles.address}>
                    123 VR Lane<br />
                    Innovation City, Tech State, 12345<br />
                    Phone: (123) 456-7890<br />
                    Email: contact@vrlearning.com
                </p>
            </div>
        </div>
    );
};

export default About;