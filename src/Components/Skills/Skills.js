import React from 'react';
import './skills.scss';

const Skills = () => {
    return (
        <>
        <section id="skills" className='bg-skills'>
            <div className="wrapper txt-center">
            <h4 className='skill-title'>Compétences techniques</h4>
            <ul className='skill-list'>
                <li>Intégration web</li>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
            </div>
        </section>
        </>
    );
};

export default Skills;