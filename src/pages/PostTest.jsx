
import React from 'react';
import Test from './Test';
import data from '../data/posttest.json';

const PostTest = () => {
    return (
        <Test
            data={data}
            testTitle={"Posttest"}
            testDescription={"Please answer the following questions to complete the posttest."}
        ></Test>
    );
};

export default PostTest;