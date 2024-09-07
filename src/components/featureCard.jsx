import React from 'react'

// import styles


import globalStyle from '../css/App.module.css'
import componentStyle from '../css/FeatureCard.module.css'
import classNames from 'classnames'

const FeatureCard = ({ title, description }) => {


    const card = classNames(
        componentStyle['card'],
        globalStyle['flex-row'],
        globalStyle['padding-xy-med'],
        globalStyle['flex-center-xy']
    )

    const imageWrapper = classNames(
        globalStyle['flex-center-xy']
    )


    const textWrapper = classNames(
        globalStyle['flex-column'],
        globalStyle['flex-center-xy']
    )



    return (
        <>
            <div className={card}>
                <div className={imageWrapper}>

                </div>
                <div className={textWrapper}>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

            </div>
        </>
    )
}


export default FeatureCard