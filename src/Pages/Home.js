import React from 'react';
import aboutData from '../Data/aboutData.json';
import serviceData from '../Data/serviceData.json';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Download from '../Components/DownloadCV/Download';
import Services from '../Components/Services/Services';
import AboutCard from '../Components/About/AboutCard';
import ServicesCard from '../Components/Services/ServicesCard';
import Review from '../Components/Review/Review';
import CreationBlock from '../Components/Création/CreationBlock';
import Creation from '../Components/Création/Creation';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <section id="aboutCard" className='about-bg'>
            {aboutData.map((list) => (
                <AboutCard 
                key={list.id}
                icon={list.icon}
                aboutTitle={list.aboutTitle}
                aboutText={list.aboutText}
                />
            ))}
            </section>
            <Skills />
            <Download />
            <Services />
            <section id="ServicesCard" className='service-bg'>
            {serviceData.map((res) => (
                <ServicesCard 
                key={res.id}
                icon={res.icon}
                serviceTitle={res.serviceTitle}
                serviceText={res.serviceText}
                />
            ))}
            </section>
            <Review />
            <Creation />
            <section id="creationCard" className="creation-block-bg">
                <CreationBlock />
            </section>
        </>
    );
};

export default Home;