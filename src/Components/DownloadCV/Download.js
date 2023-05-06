import React from 'react';
import './download.scss';

const Download = () => {
    return (
        <>
        <section id="download" className="bg-download">
            <div className="wrapper txt-center">
                <div className="download-container">
                    <h2>Telecharger mon CV</h2>
                    <p>Jetez un coup d'oeil à mon portfolio et si mon travail vous plaît n'hésitez pas à télécharger mon CV.</p>
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