import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../utils/AuthContext'
import reactLogo from '/public/react.svg'

import viteLogo from '../../public/vite.svg'
import classNames from 'classnames'


// import css
import styles from '../css/App.module.css'
import '../css/global.css'


// import components
import Header from "../components/Header"
import HeroText from "../components/HeroText"
import FeatureCard from '../components/FeatureCard'
import LearnerCard from '../components/LearnerCard'
import CustomButton from '../components/CustomButton'
import InformationBlock from '../components/InformationBlock'
import About from '../components/About'
import Footer from '../components/Footer'
import SectionBreak from '../components/SectionBreak'
import LoginModal from '../components/LoginModal'
import staticData from '../data/static.json'




function App() {


  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(Context)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {

    if (!user) {
      setIsModalOpen(true)
    } else {
      navigate('/dashboard')

    }

  }


  return (
    <div className={styles.background}>

      <div className={styles.heroSection}>
        <div className={styles.maxContentWidth}>

          <Header
            loginBtnFunction={handleOpenModal}
          ></Header>
          <HeroText></HeroText>
          <div className={styles.featureCardContainer}>
            {
              staticData.featureCardData.map((feature, index) => (
                <FeatureCard
                  key={index}
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
            {staticData.learnerCardData.map((learner, index) => (
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
            {staticData.informationBlockData.map((block, index) => (
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
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></LoginModal>

      <Footer></Footer>
    </div>
  )
}

export default App
