import './about.scss';
import React from 'react';
import { FaUserSecret, FaQuestion, FaHeart } from 'react-icons/fa';
import { RxLapTimer } from 'react-icons/rx';


const icons = {
    'FaUserSecret': FaUserSecret,
    'FaQuestion': FaQuestion,
    'FaHeart': FaHeart,
    'RxLapTimer': RxLapTimer
  };

const AboutCard = (props) => {

    const Icon = icons[props.icon];
    
    return (
        <>
            <div className='txt-center split'>
            <div className="about-box">
                <div className="box-container">
                <span className='about-box_icon'>
                <Icon className='box-icon' />
                </span>
                <div className="box-info txt-center">
                    <h4>{props.aboutTitle}</h4>
                    <p>{props.aboutText}</p>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default AboutCard;