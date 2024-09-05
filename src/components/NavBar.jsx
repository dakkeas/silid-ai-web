import { React, useState } from 'react'
import CustomButton from './CustomButton'
import './css/App.css'




const NavBar = () => {

    return (
        <>
            <div>
                asdhss
                <header>
                    {/* <Logo
                    // silid ai logo
                    // pass in custom styling
                    // reuse component for logo of cards
                    >
                    </Logo> */}
                    <nav>
                        <ul>
                            <li>
                                <p>Learn More</p>
                            </li>
                            <li>
                                <p>contact</p>
                            </li>
                            <li></li>
                        </ul>
                    </nav>
                    <CustomButton
                    // reusable button template
                    // props for button color & button name
                    // login button
                    ></CustomButton>

                </header>
            </div>
        </>
    )

}

export default NavBar