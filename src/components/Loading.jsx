import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from 'react';


function Loading({ isLoading, color}) {
    return (
        <ClipLoader
            size={18}
            color={color}
            loading={isLoading}
            cssOverride={{
                display: 'block',
                margin: '0 auto',
                // borderColor: 'white'
            }}
        ></ClipLoader>
    )
}

export default Loading