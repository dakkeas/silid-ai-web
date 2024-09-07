import React from 'react'
import classNames from "classnames"

import globalStyle from '../css/App.module.css'
import componentStyle from '../css/HeroText.module.css'

import CustomButton from '../components/CustomButton'





const HeroText = () => {
    const heroTextWrapper = classNames(
        globalStyle['flex-center-xy'],
        globalStyle['flex-column'],
        componentStyle['hero-text-wrapper'],
    )

    const heroTextContent = classNames(

        globalStyle['width-80'],

    )

    return (
        <>
            <div className={heroTextWrapper}>
                <div>
                    <p>Unlocking Potential with Adaptive VR Learning</p>
                    <p>Welcome to the future of learning! Step into a world where education knows no bounds.
                        Explore immersive experiences,
                        personalized just for you, with cutting-edge Adaptive VR Learning.</p>
                    <CustomButton
                    textContent={'Get Started'}
                    ></CustomButton>

                </div>
            </div>
        </>

    )
}

export default HeroText