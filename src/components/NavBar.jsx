
import { React, useState } from 'react'

// import styles 
import styles from '../css/NavBar.module.css'
import '../css/global.css'
// import components
import CustomButton from './CustomButton'



const NavBar = () => {
    return (
        <>
            <header className={styles.headerWrapper}>

                <div>
                    <p className={[styles.logoText]} >Silid AI</p>
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
                        type={'primary'}
                        routeTo='/signup'
                    ></CustomButton>
                </div>


            </header>
        </>
    )

}

export default NavBar