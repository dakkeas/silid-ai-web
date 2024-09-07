import { React, useState } from 'react'

import CustomButton from './CustomButton'

import componentStyle from "../css/NavBar.module.css"
import globalStyle from "../css/App.module.css"
import classNames from 'classnames'


const NavBar = () => {
    const headerWrapper = classNames(
        globalStyle['flex-center-xy'],
        globalStyle['flex-column'],
    )
    const headerContent = classNames(

        globalStyle['width-100'],
        globalStyle['flex-row'],
        globalStyle['space-between'],
        // globalStyle['padding-x-med']
    )

    const navigationWrapper = classNames(
        globalStyle['flex-row'],
    )




    // const header = 


    return (
        <>
            <header className={headerWrapper}>

                <div className={headerContent}>

                    <div className="">
                        <p>Silid AI</p>
                    </div>



                    <div className={navigationWrapper}>
                        <nav>
                            <ul className={`${globalStyle['flex-row']} ${globalStyle['column-gap-10']}`}>
                                <li>
                                    <p>Learn More</p>
                                </li>
                                <li>
                                    <p>Contact</p>
                                </li>
                                <li></li>
                            </ul>
                        </nav>
                        <CustomButton
                            textContent={'Login'}
                        ></CustomButton>
                    </div>
                </div>

            </header>
        </>
    )

}

export default NavBar