import React from 'react';
import creationData from '../../Data/créationData'
import { Link } from 'react-router-dom';
import CreationCard from './CreationCard';

const CreationBlock = () => {
    return (
        <>
        <div className="card">
            <div className="card-container">
                {creationData.map((creation, id) => (
                    <div className="card-creation" key={id}>
                        <Link to={`/creations/${creation.id}`}>
                            <CreationCard
                            picture={creation.picture}
                            title={creation.title}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div> 
        </>
    );
};

export default CreationBlock;