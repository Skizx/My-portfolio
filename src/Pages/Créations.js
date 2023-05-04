import '../Components/_creations.scss';
import React, { useEffect, useState } from 'react';
import Error from '../Pages/Error';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import About from '../Components/About/About';
import creationData from '../Data/créationData.json';
import { useParams } from 'react-router-dom';

const Créations = () => {

    const { id } = useParams()
    const [creation, setCreation] = useState();
    const [isOpen, setIsOpen] = useState(false);

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
                <section id='titledescription' className='description-container'>
                <About 
                deviderTitle= ' Description '
                deviderText= ' Ce que le client demande'
                />        
                </section>
                <section id="description" className="description-block">
                    <div className="wrapper">
                    <p>{creation.description}</p>
                    <div className="txt-center dropdown-container">
                    <button className='btn-stack' onClick={() => setIsOpen((prev) => !prev)}>
                    Stacks utilisées {isOpen ? <AiOutlineCaretUp className='dropdown-arrow' /> : <AiOutlineCaretDown className='dropdown-arrow' />}
                    </button>

                    {isOpen && 
                        <div className="dropdown-block">
                            {creation.stacks.map((item, i) => 
                            <div className='stacks' key={i}>
                            <h5 className='stacks-title'>{item}</h5>
                            </div>
                            )}
                        </div>
                    }
                    </div>
                    </div>
                </section>
        </div>
    );
};

export default Créations;