import React from 'react';
import Test from './Test'
import data from '../data/vark.json'



const Vark = () => {

    return (
        <div style={{
            height: '100%',
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Test
                data={data}
                testTitle={"PAILON VR VARK Questionnaire"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
                inputType="checkbox"
            />
        </div>
    );
}

export default Vark;