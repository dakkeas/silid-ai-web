import classNames from 'classnames'
import React from 'react'


import componentStyle from '../css/LearnerCard.module.css'
import globalStyle from "../css/App.module.css"





const LearnerCard = ({ title, description }) => {

    const card = classNames(
        componentStyle['card'],
        globalStyle['flex-column']
    )

    const imageWrapper = classNames(
        componentStyle['image-wrapper']

    )

    const image = classNames(
        componentStyle['image']
    )

    const textWrapper = classNames(
        componentStyle['text-wrapper'],
        globalStyle['padding-xy-med'],
        globalStyle['flex-column'],
        globalStyle['row-gap-10']
    )

    return (
        <>
            <div className={card}>
                <div className={imageWrapper}>
                    {/* image */}
                    <div className={image}></div>
                </div>

                <div className={textWrapper}>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

            </div>
        </>
    )
}


export default LearnerCard 