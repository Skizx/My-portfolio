import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <>
        <section id='banner' className='banner-bg'>
            <div className='wrapper txt-white flex-center_content'>
                <div className="banner-block">
                    <h2>Civiletti Kevin</h2>
                    <p>Développeur Web</p>
                    <div className="banner-button">
                        <a href="#about" role='button'>View More!</a>
                    </div>
                </div>
            </div>
        </section>  
        </>
    );
};

export default Banner;