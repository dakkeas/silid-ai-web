import { useState, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../utils/AuthContext'
import { motion } from 'framer-motion'


// import css
import styles from '../css/Home.module.css'
import '../css/global.css'

// import components
import Header from "../components/Header"
import HeroText from "../components/HeroText"
import FeatureCard from '../components/FeatureCard'
import LearnerCard from '../components/LearnerCard'
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

  // scroll references
  const learnerCardRef = useRef(null)
  const contactRef = useRef(null)


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
  const fadeUp = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 20,

    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.75,
        type: "easeInOut",
        once: true
      },
    },
  }

  return (
    <div className={styles.background}>

      <div className={styles.heroSection}>
        <div className={styles.maxContentWidth}>

          <Header
            loginBtnFunction={handleOpenModal}
            learnMoreRef={learnerCardRef}
            contactsRef={contactRef}
          ></Header>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}

          >
            <HeroText></HeroText>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className={styles.featureCardContainer}>
            {
              staticData.featureCardData.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}

                ></FeatureCard>
              ))
            }
          </motion.div>
        </div>
      </div>


      <div
        ref={learnerCardRef}
        className={styles.learnersSection}>
        <div className={styles.maxContentWidth}>

          <SectionBreak
            title={'Catered for all types of learners'}
            description={'No one left behind.'}
          >
          </SectionBreak>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className={styles.learnerCardContainer}>
            {staticData.learnerCardData.map((learner, index) => (
              <LearnerCard
                key={index}
                learner={learner}
              />
            ))}
          </motion.div>

        </div>

      </div>

      <div className={styles.researchSection}>

        <div className={styles.maxContentWidth}>
          <SectionBreak
            title={'Ready for the future'}
            description={'Making our mark for the future of education.'}
          >
          </SectionBreak>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className={styles.informationBlockContainer}
          >
            {staticData.informationBlockData.map((block, index) => (
              <InformationBlock
                key={index} // Added key prop
                title={block.title}
                description={block.description}
                imgSrc={block.imageSrc}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div
        ref={contactRef}
        className={styles.aboutSection}>
        <div className={styles.maxContentWidth}>
          <SectionBreak
            title={'About Us'}
            description={'Dedicated and Striveful.'}
          >
          </SectionBreak>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <About></About>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 1,
          type: 'easeInOut'
        }}
      >
        <LoginModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        ></LoginModal>
      </motion.div>

      <Footer></Footer>
    </div>
  )
}

export default App
