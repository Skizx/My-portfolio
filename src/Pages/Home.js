import React from 'react';
import Fade from 'react-reveal/Fade';
import aboutData from '../Data/aboutData.json';
import serviceData from '../Data/serviceData.json';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Download from '../Components/DownloadCV/Download';
import AboutCard from '../Components/About/AboutCard';
import deviderData from '../Data/deviderData.json';
import ServicesCard from '../Components/Services/ServicesCard';
import Review from '../Components/Review/Review';
import CreationBlock from '../Components/Création/CreationBlock';

const Home = () => {
    return (
        <>
            <Banner />
            <Fade right>
                <section id="about" className="abouts-bg">
                {deviderData.map((item, index) => (
                <About
                key={index}
                deviderTitle={item.deviderTitle}
                deviderText={item.deviderText}
                />
                ))}
                </section>
                </Fade>
                <Fade left>
            <section id="aboutCard" className='about-bg wrapper'>
            {aboutData.map((list) => (
                <AboutCard 
                key={list.id}
                icon={list.icon}
                aboutTitle={list.aboutTitle}
                aboutText={list.aboutText}
                />
                ))}
            </section>
                </Fade>
                <Fade top>
            <Skills />
                </Fade>
            <Download />
            <Fade right>
            <section id="services" className="services-bg">
            <About
            deviderTitle= ' Services '
            deviderText= ' Ce que je vous propose '
            /> 
            </section>
            </Fade>
            <Fade left>
            <section id="ServicesCard" className='service-bg wrapper'>
            {serviceData.map((res) => (
                <ServicesCard 
                key={res.id}
                icon={res.icon}
                serviceTitle={res.serviceTitle}
                serviceText={res.serviceText}
                />
            ))}
            </section>
            </Fade>
            <Fade right>
            <Review />
            </Fade>
            <Fade right>
            <section id="creation" className="creation-bg">
            <About
            deviderTitle= ' Créations '
            deviderText= " Ce que j'ai réaliser "
            />
            </section>
            </Fade>
            <Fade bottom>
            <section id="creationCard" className="creation-block-bg wrapper">
                <CreationBlock />
            </section>
            </Fade>
        </>
    );
};

export default Home;