'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 rounded-full transition-all duration-300
        bg-white/20 backdrop-blur-md border border-white shadow-xl 
        text-[#0078AE] hover:text-white hover:bg-[#0078AE]
        hover:scale-110 active:scale-95
        w-12 h-12 flex items-center justify-center
        ${isVisible ? 'opacity-100 pointer-events-auto animate-fadeIn' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
