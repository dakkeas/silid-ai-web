
import { React, useState } from 'react'

// import styles 
import styles from '../css/Header.module.css'
import '../css/global.css'
// import components
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'



const Header = ({ loginBtnFunction }) => {

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
                                <a>Learn More</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                            <li></li>
                        </ul>
                    </nav>
                    <CustomButton
                        textContent={'Login'}
                        onClick={loginBtnFunction}
                    ></CustomButton>
                </div>


            </header>
        </>
    )

}

export default Header