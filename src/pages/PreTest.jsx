import React from 'react';
import Test from './Test';
import data from '../data/pretest.json';

const PreTest = () => {
    const handleSubmit = (data) => {
        console.log(data)
    }
    return (
        <div style={{
            height: '100%',
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <Test
                data={data}
                testTitle={"PAILON VR Pre Test"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
                inputType="radio"
                handleSubmit={handleSubmit}
            ></Test>
        </div>

    );
};

export default PreTest;