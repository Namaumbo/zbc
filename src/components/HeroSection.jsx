import React, { useState, useEffect } from 'react';

import background from "../assets/bg-4.jpg";

import { CarouselComponent } from './CarouselComponent';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Fade out arrow based on scroll position
      const newOpacity = Math.max(0, 1 - position / 300);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Container */}
  
        {/* Content Container */}
        <div className="relative z-10 w-full  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Carousel */}
          <div className="w-full max-w-7xl mx-auto">
            <CarouselComponent />
          </div>
        
        </div>
   
    </div>
  );
};

export default HeroSection;