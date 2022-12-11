import React from 'react';
import Title from '../Title';
import HeroSection from './HeroSection';
import AboutACM from './AboutACM';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Title title="Home" />
            <HeroSection />
            <AboutACM />
            <Contact />
        </>
    );
};

export default Home;