import '../Components/_creations.scss';
import React, { useEffect, useState } from 'react';
import Error from '../Pages/Error'
import creationData from '../Data/créationData.json';
import { useParams } from 'react-router-dom';

const Créations = () => {

    const { id } = useParams()
    const [creation, setCreation] = useState();

    useEffect(() => {
        const oneCreation = creationData.find((item) => item.id === id)
        setCreation(oneCreation)
    }, [id])

    if (creation === undefined) {
        return <Error />
    }

    return (
        <div key={id} className='creation-container'>
            <div className='wrapper'>
                <figure className='creation-banner'>
                    <img src={creation.picture} alt={creation.title}/>
                </figure>
            </div>
        </div>
    );
};

export default Créations;