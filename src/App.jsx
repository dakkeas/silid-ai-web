import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classNames from 'classnames'


// import css
import styles from './css/App.module.css'
import './css/global.css'
import './css/global.css'

// import components
import NavBar from "./components/NavBar"
import HeroText from "./components/HeroText"
import FeatureCard from './components/FeatureCard'
import LearnerCard from './components/LearnerCard'
import CustomButton from './components/CustomButton'
import InformationBlock from './components/InformationBlock'
import About from './components/About'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'

// import images

import alarmClock from './assets/svg/alarm-clock.svg'
import rocketLaunch from './assets/svg/rocket-launch.svg'
import user from './assets/svg/user.svg'
import placeholder from './assets/vr-kids.jpg'




function App() {
  const [count, setCount] = useState(0)

  const InformationBlockData = [
    {
      title: "Transform Education with Our Cutting-Edge VR Adaptive Learning System",
      description: "Our recent data collection at PUP Senior High School showcased the impressive effectiveness of our VR adaptive learning system. This cutting-edge technology delivers personalized, immersive experiences that significantly enhance student engagement and outcomes. Discover how our solution can transform your educational approach.",
      imageSrc: "../assets/vr-kids.jpg"
    }
  ]


  const featureCardData = [
    {
      title: "Personalized Learning",
      description: "Experience tailor-made educational content that adapts to your individual learning style, pace, and preferences, maximizing comprehension and retention.",
      imgSrc: user,
      imgAlt: "engaging"
    },
    {
      title: "Engaging Experiences",
      description: "Immerse yourself in dynamic virtual environments that bring learning to life, fostering deeper understanding and engagement compared to traditional methods.",
      imgSrc: rocketLaunch,
      imgAlt: "engaging"
    },
    {
      title: "Flexible Accessibility",
      description: "Access learning opportunities anytime, anywhere, breaking down geographical barriers and allowing learners to engage in immersive experiences at their convenience.",
      imgSrc: alarmClock,
      imgAlt: "engaging"
    }
  ];

  const learnerCardData = [
    {
      title: 'Visual',
      description: 'Visual learners prefer learning through visual aids such as diagrams, videos, and infographics.',
      imgSrc: placeholder,
      imgAlt: 'Visual Learning'
    },
    {
      title: 'Audial',
      description: 'Auditory learners thrive on verbal communication, such as lectures and discussions.',
      imgSrc: placeholder,
      imgAlt: 'Audial Learning'
    },
    {
      title: 'Reading & Writing',
      description: 'Reading/Writing learners excel with written materials, including textbooks and note-taking.',
      imgSrc: placeholder,
      imgAlt: 'Reading & Writing Learning'
    },
    {
      title: 'Kinesthetic',
      description: 'Kinesthetic learners excel with hands-on activities like experiments and simulations.',
      imgSrc: placeholder,
      imgAlt: 'Kinesthetic Learning'
    }
  ];

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.maxContentWidth}>

          <NavBar></NavBar>
          <HeroText></HeroText>
          <div className={styles.featureCardContainer}>
            {
              featureCardData.map((feature, index) => (
                <FeatureCard
                  feature={feature}

                ></FeatureCard>
              ))
            }
          </div>
        </div>
      </div>


      <div className={styles.learnersSection}>
        <div className={styles.maxContentWidth}>

          <SectionBreak
            title={'Catered for all types of learners'}
            description={'No one left behind.'}
          >
          </SectionBreak>

          <div className={styles.learnerCardContainer}>
            {learnerCardData.map((learner, index) => (
              <LearnerCard
                learner={learner}
              />
            ))}
          </div>

        </div>

      </div>

      <div className={styles.researchSection}>

        <div className={styles.maxContentWidth}>
          <SectionBreak
            title={'Ready for the future'}
            description={'Making our mark for the future of education.'}
          >
          </SectionBreak>

          <div>
            {InformationBlockData.map((block, index) => (
              <InformationBlock
                key={index} // Added key prop
                title={block.title}
                description={block.description}
                imgSrc={block.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.maxContentWidth}>
          <SectionBreak
            title={'About Us'}
            description={'Dedicated and Striveful.'}
          >
          </SectionBreak>
          <About></About>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
