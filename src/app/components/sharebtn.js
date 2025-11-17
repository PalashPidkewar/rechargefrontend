'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa6';

// --- Helper: Social media links ---
const getShareLinks = (url, title) => ({
  whatsapp: `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
});

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const shareTitle = "HNTB Website";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        panelRef.current &&
        !panelRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleShare = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const links = getShareLinks(currentUrl, shareTitle);

  const iconSizeClass = "w-3 h-3";
  const iconContainerClass =
    "flex justify-center items-center w-7 h-7 rounded-full p-2 my-1 text-white shadow-lg transition-transform duration-200 transform hover:scale-110";

  return (
    <div className="fixed right-0 top-[40%] z-50">
      
      {/* SHARE BUTTON */}
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={toggleShare}
          aria-expanded={isOpen}
          className="
            relative
            bg-blue-200 text-[#0078AE] font-semibold
            py-1.5 px-4
            text-xs sm:text-sm
            hover:bg-[#0078AE] hover:text-white
            transition-all duration-300
            transform -rotate-90 origin-bottom-right
            shadow-[0_4px_10px_rgba(0,0,0,0.2)]
          "
        >
          SHARE

          {/* Right Tail */}
          <span
            className="absolute -right-2 top-1/2 -translate-y-1/2 
            w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px]
            border-t-transparent border-b-transparent border-l-white
            transition-all duration-300"
          />

          {/* Left Tail */}
          <span
            className="absolute -left-2 top-1/2 -translate-y-1/2 
            w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px]
            border-t-transparent border-b-transparent border-r-white
            transition-all duration-300"
          />
        </button>

        {/* SOCIAL ICONS PANEL */}
        <div
          ref={panelRef}
          className="
            absolute top-28 right-0
            flex flex-col bg-blue-200 shadow-2xl p-1
            transition-all duration-500 ease-in-out
            w-9 overflow-hidden origin-top
          "
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            maxHeight: isOpen ? '250px' : '0px',
            opacity: isOpen ? 1 : 0,
            transform: `scaleY(${isOpen ? 1 : 0})`,
          }}
        >
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconContainerClass} bg-green-500`}
          >
            <FaWhatsapp className={iconSizeClass} />
          </a>

          <a
            href={links.email}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconContainerClass} bg-gray-600`}
          >
            <FaEnvelope className={iconSizeClass} />
          </a>

          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconContainerClass} bg-blue-600`}
          >
            <FaFacebookF className={iconSizeClass} />
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconContainerClass} bg-blue-800`}
          >
            <FaLinkedinIn className={iconSizeClass} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
