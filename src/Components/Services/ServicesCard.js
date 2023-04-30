/* eslint-disable no-unused-vars */
import React from 'react';
import './services.scss';
import { FaUsers, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { MdIntegrationInstructions } from 'react-icons/md';

const icons = {
    'FaMobileAlt': FaMobileAlt,
    'FaUsers': FaUsers,
    'FaCloud': FaCloud,
    'MdIntegrationInstructions': MdIntegrationInstructions
  };

const ServicesCard = (props) => {
    
    const Icon = icons[props.icon];

    return (
        <>
            <div className='txt-center'>
            <div className="about-box">
                <div className="box-container">
                <span className='about-box_icon'>
                <Icon className='box-icon' />
                </span>
                <div className="box-info txt-center">
                    <h4>{props.serviceTitle}</h4>
                    <p>{props.serviceText}</p>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ServicesCard;