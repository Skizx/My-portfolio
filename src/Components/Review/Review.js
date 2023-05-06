import React from 'react';
import './review.scss';

const Review = () => {
    return (
        <>
        <section id="review" className="review-bg">
            <div className="cover">
                <div className="wrapper txt-center txt-white">
                    <h3>Vos avis</h3>
                    <div className="underimage"></div>
                    <p>informations</p>
                    <div className="review-block">
                        <p className="review-txt">Votre avis compte ! Soyez l'un des permiers a faire un retour</p>
                    </div>
            </div>
            </div>
        </section> 
        </>
    );
};

export default Review;