import './about.scss';
import React from 'react';
import { FaUserSecret, FaQuestion, FaHeart, } from 'react-icons/fa';
import { RxLapTimer } from 'react-icons/rx';

const About = () => {
    return (
        <>
        <section id="about" className='about-bg'>
            <div className='wrapper txt-center'>
            <div className="about-box">
                <h3>A propos</h3>
                <div className="underimage"></div>
                <p>informations</p>
                <div className="box-container">
                <span className='about-box_icon'>
                <FaUserSecret className='box-icon'/>
                </span>
                <div className="box-info txt-center">
                    <h4>Qui suis-je ?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod ipsum iure eveniet architecto tempora numquam obcaecati harum.
                        Vel tempora dolor non praesentium harum nostrum! Iure pariatur expedita nisi illum dignissimos.
                    </p>
                </div>
                </div>
                <div className="box-container">
                <span className='about-box_icon'>
                <FaQuestion className='box-icon'/>
                </span>
                <div className="box-info txt-center">
                    <h4>Ce que je fais ?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod ipsum iure eveniet architecto tempora numquam obcaecati harum.
                        Vel tempora dolor non praesentium harum nostrum! Iure pariatur expedita nisi illum dignissimos.
                    </p>
                </div>
                </div>
                <div className="box-container">
                <span className='about-box_icon'>
                <FaHeart className='box-icon'/>
                </span>
                <div className="box-info txt-center">
                    <h4>Pourquoi je le fais ?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod ipsum iure eveniet architecto tempora numquam obcaecati harum.
                        Vel tempora dolor non praesentium harum nostrum! Iure pariatur expedita nisi illum dignissimos.
                    </p>
                </div>
                </div>
                <div className="box-container">
                <span className='about-box_icon'>
                <RxLapTimer className='box-icon'/>
                </span>
                <div className="box-info txt-center">
                    <h4>Depuis quand ?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod ipsum iure eveniet architecto tempora numquam obcaecati harum.
                        Vel tempora dolor non praesentium harum nostrum! Iure pariatur expedita nisi illum dignissimos.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};

export default About;