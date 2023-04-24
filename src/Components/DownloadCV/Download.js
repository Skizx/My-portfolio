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
                <a className="contact-button" href="../../Assets/Civiletti_Kévin_CV_2023.pdf" download>Télécharger mon CV</a>
                </div>
            </div>
        </section>
        </>
    );
};

export default Download;