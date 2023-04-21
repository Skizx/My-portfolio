import './about.scss';
import React from 'react';

const About = () => {
    return (
        <>
        <section id="about" className='about-bg'>
            <div className='wrapper txt-center'>
            <div className="about-box">
                <h3>A propos</h3>
                <div className="underimage"></div>
                <p>informations</p>
                <span>
                <i className="fa-thin fa-user-bounty-hunter"></i>
                </span>
            </div>
            </div>
        </section>
        </>
    );
};

export default About;