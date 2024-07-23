import React, { useState, useEffect, useRef } from 'react'
import Bannermusgro from '../components/Bannermusgro'
import FeaturesSection from '../components/FeaturesSection'
import Bestproducts from '../components/Bestproducts'
import Offersection from '../components/Offersection'
import Moreooffer from '../components/Moreooffer'
import MostPurchased from '../components/MostPurchased'
import Ourpartners from '../components/Ourpartners'
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import './styles/home.css'

function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const featuresRef = useRef(null);
  const [isBouncing, setIsBouncing] = useState(false);

  const checkScrollTop = () => {
    const featuresTop = featuresRef.current?.getBoundingClientRect().top + window.scrollY;
    if (!showScroll && window.pageYOffset > featuresTop) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= featuresTop) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 1000); // Duration of the animation
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <div ref={featuresRef}>
        <Bannermusgro />
      </div>
      <FeaturesSection />
      <Bestproducts />
      <Moreooffer />
      <MostPurchased />
      <Offersection />
      <Ourpartners />

      <div className={`uparrows ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
        <IoIosArrowUp />
      </div>

      <div className={`whatsapp-icon ${isBouncing ? 'bounce' : ''}`} onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </div>
    </>
  )
}

export default Home
