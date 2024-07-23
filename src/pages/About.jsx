import React, { useState } from 'react';
import Aboutcomponent from '../components/Aboutcomponent';
import { FaWhatsapp } from "react-icons/fa";
import './styles/home.css';

function About() {
    const [isBouncing, setIsBouncing] = useState(false);

    const handleWhatsAppClick = () => {
        setIsBouncing(true);
        setTimeout(() => {
            setIsBouncing(false);
        }, 1000); // Duration of the animation
    };

    return (
        <>
            <Aboutcomponent />
            <div 
                className={`whatsapp-icon ${isBouncing ? 'bounce' : ''}`} 
                onClick={handleWhatsAppClick}
            >
                <FaWhatsapp />
            </div>
        </>
    );
}

export default About;
