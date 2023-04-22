import React from 'react';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Download from '../Components/DownloadCV/Download';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Skills />
            <Download />
            <Services />
        </>
    );
};

export default Home;