import React from 'react';
import aboutData from '../Data/aboutData.json';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Download from '../Components/DownloadCV/Download';
import Services from '../Components/Services/Services';
import AboutCard from '../Components/About/AboutCard';
import ServicesCard from '../Components/Services/ServicesCard';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            {aboutData.map((list) => (
                <AboutCard 
                key={list.id}
                icon={list.icon}
                aboutTitle={list.aboutTitle}
                aboutText={list.aboutText}
                />
            ))}
            <Skills />
            <Download />
            <Services />
            <ServicesCard />
        </>
    );
};

export default Home;