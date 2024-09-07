import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classNames from 'classnames'


// import css
import featureCardStyle from './css/FeatureCard.module.css'
import globalStyle from "./css/App.module.css"
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

// import images

import alarmClock from './assets/svg/alarm-clock.svg'
import rocketLaunch from './assets/svg/rocket-launch.svg'
import user from './assets/svg/user.svg'




function App() {
  const [count, setCount] = useState(0)

  const InformationBlockData = [
    {
      title: "Enhanced Engagement Metrics",
      description: "Recent data indicates a 40% increase in user engagement and interaction within our VR learning modules. Learners spend more time actively participating in virtual environments, leading to improved information retention and satisfaction.",
      imageSrc: "../assets/vr-kids.jpg"
    },
    {
      title: "Diverse Learning Styles Adaptation",
      description: "Our VR system has successfully adapted to various learning styles, with visual, auditory, and kinesthetic learners each showing significant improvements in their learning outcomes. Visual aids, interactive audio, and hands-on activities are now effectively customized for individual needs.",
      imageSrc: "assets/vr-kids.jpg"
    },
    {
      title: "Real-Time Performance Tracking",
      description: "We've implemented advanced real-time analytics that track learner progress and adapt content dynamically. This feature has led to a 25% improvement in personalized learning pathways and timely feedback for users.",
      imageSrc: "assets/vr-kids.jpg"
    },
    {
      title: "User Satisfaction and Feedback",
      description: "Feedback from recent surveys shows a 90% satisfaction rate among users, with particular praise for the immersive experience and the system's ability to tailor learning content to individual preferences.",
      imageSrc: "/assets/vr-kids.jpg"
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
      imgSrc: 'img/vr-kids.jpg',
      imgAlt: 'Visual Learning'
    },
    {
      title: 'Audial',
      description: 'Auditory learners thrive on verbal communication, such as lectures and discussions.',
      imgSrc: 'img/vr-kids.jpg',
      imgAlt: 'Audial Learning'
    },
    {
      title: 'Reading & Writing',
      description: 'Reading/Writing learners excel with written materials, including textbooks and note-taking.',
      imgSrc: 'img/vr-kids.jpg',
      imgAlt: 'Reading & Writing Learning'
    },
    {
      title: 'Kinesthetic',
      description: 'Kinesthetic learners excel with hands-on activities like experiments and simulations.',
      imgSrc: 'img/vr-kids.jpg',
      imgAlt: 'Kinesthetic Learning'
    }
  ];



  const heroSection = classNames(
    globalStyle['hero-image'],
    globalStyle['flex-column'],
    globalStyle['margin-bot-100'],
  )
  const featureCardContainer = classNames(
    globalStyle['flex-row'],
    globalStyle['flex-center-x'],
    globalStyle['column-gap-10'],
    featureCardStyle['card-container'],
  )

  const learnersSection = classNames(
    globalStyle['flex-center-xy'],
    globalStyle['flex-column']
  )

  const learnerCardContainer = classNames(

    globalStyle['flex-row'],
    globalStyle['learners-section']

  )






  return (
    <>
      <div className={heroSection}>
        <div className={`${globalStyle['width-80']}`}>

          <NavBar></NavBar>
          <HeroText></HeroText>
          <div className={featureCardContainer}>
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


      <div className={learnersSection}>
        <div className={`${globalStyle['width-80']}`}>
          <h2 className={`${globalStyle['grey']}`}>Catered for all types of learners</h2>
          <p>Our VR adaptive learning platform customizes educational experiences to fit every learning
            style—visual, auditory, and kinesthetic. Dive into immersive environments where content adjusts
            to your needs, making learning more engaging and effective. Explore how personalized VR can enhance your educational journey today!</p>

          <div className={learnerCardContainer}>
            {learnerCardData.map((card, index) => (
              <LearnerCard
                title={card.title}
                description={card.description}
              ></LearnerCard>

            ))

            }

          </div>



          <h2 className={`${globalStyle['grey']}`}>Ready for the future</h2>

          <div>

            {
              InformationBlockData.map((block, index) => (
                <InformationBlock
                  title={block.title}
                  description={block.description}
                  imgSrc={block.imageSrc}
                ></InformationBlock>
              ))
            }
          </div>
        </div>

      </div>

      <div>
        <About></About>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
