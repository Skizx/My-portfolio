import React from 'react';
import './creation.scss';

const CreationCard = ({picture, title}) => {
    return (
        <>
            <article>
                <img className='creation-img' src={picture} alt={"Création " + title} />
            </article>
        </>
    );
};

export default CreationCard;