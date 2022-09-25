import React from 'react';
import { Button } from '../Button.js';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="https://res.cloudinary.com/dotl5onov/video/upload/v1663501779/bmsce_acm/video-2_xzpaqq.mp4" autoPlay loop muted />
            <h1 className='animate-charcter'>BMSCE ACM Student Chapter</h1>
        </div>
    );
};

export default HeroSection;