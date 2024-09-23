import React from 'react'



const Backdrop = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                backgroundColor: "rgba(-1, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        </div>
    )


}

export default Backdrop