
import { React, useRef } from 'react'

// import styles 
import styles from '../css/Header.module.css'
import '../css/global.css'
// import components
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'



const Header = ({ loginBtnFunction, learnMoreRef, contactsRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <header className={styles.headerWrapper}>

                <div>
                    <p className={[styles.logoText]} >PAILON VR</p>
                </div>
                <div className={styles.navigationWrapper}>
                    <nav>
                        <ul className={styles.listWrapper}>
                            <li>
                                <a
                                    onClick={() => scrollToSection(learnMoreRef)}
                                >Learn More</a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToSection(contactsRef)}
                                >Contact</a>
                            </li>
                            <CustomButton
                                textContent={'Login'}
                                onClick={loginBtnFunction}
                            ></CustomButton>
                        </ul>
                    </nav>
                </div>


            </header>
        </>
    )

}

export default Header