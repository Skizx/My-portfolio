/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './download.scss';

const Download = () => {
    return (
        <>
        <section id="download" className="bg-download">
            <div className="wrapper txt-center">
                <div className="download-container">
                    <h2>Telecharger mon CV</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Architecto exercitationem doloremque atque,
                        ipsam maiores autem tenetur ipsa totam eius voluptatibus velit quaerat excepturi non molestiae,
                        quisquam harum similique dicta. Praesentium!</p>
                </div>
                <div className="download-btn">
                    <a href="#">Telecharger</a>
                </div>
            </div>
        </section>
        </>
    );
};

export default Download;