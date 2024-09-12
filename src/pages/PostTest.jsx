
import React from 'react';
import Test from './Test';
import data from '../data/posttest.json';

const PostTest = () => {
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
                testTitle={"PAILON VR Post Test"}
                testDescription={"Choose the answer that you believe is correct based on your understanding of the material."}
            ></Test>
        </div>

    );
};

export default PostTest;