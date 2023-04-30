import React from 'react';
import './about.scss';

const About = (props) => {
    return (
        <>
            <div className="wrapper txt-center">
                <h3>{props.deviderTitle}</h3>
                <div className="underimage"></div>
                <p>{props.deviderText}</p>
            </div> 
        </>
    );
};

export default About;