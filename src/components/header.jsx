import { React, useState } from 'react'



const header = () => {

    return (
        <>
            <div>
                <header>
                    <Logo
                    // silid ai logo
                    // pass in custom styling
                    // reuse component for logo of cards
                    >
                    </Logo>
                    <nav>
                        <ul>
                            <li>
                                <p>Learn More</p>
                            </li>
                            <li>

                            </li>
                            <li></li>
                        </ul>
                    </nav>
                    <CustomButton
                    // reusable button template
                    ></CustomButton>
                </header>
            </div>
        </>
    )
}

export default header