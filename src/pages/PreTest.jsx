import React from 'react';
import Test from './Test';
import data from '../data/pretest.json';

const PreTest = () => {
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
                testTitle={"PAILON VR PreTest"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
            ></Test>
        </div>

    );
};

export default PreTest;