// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
// } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSocialBar, setShowSocialBar] = useState(true);

//   const navItems = [
//     { label: 'Path Recharge', href: '/' },
//     { label: 'About Us', href: '/Nav_aboutus' },
//     { label: 'Our Project', href: '/Nav_Our_Projects' },
//     { label: 'Global Footprint', href: '/Nav_Global_Footprints' },
//     { label: 'Our Partners (BRANDS)', href: '/Nav_Brand_Partners' },
//     { label: 'Media Corners', href: '/Nav_Gallery' },
//     { label: 'Rate Us', href: '/rate-us' },
//     { label: 'Brochure', href: '/Brochure' },
//     { label: 'Contact Us', href: '/Nav_Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowSocialBar(window.scrollY < 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const topBarHeight = 25; // px

//   return (
//     <>
//       {/* Social Media Top Bar */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-gray-100 flex justify-between items-center text-gray-600 text-sm md:text-base z-50 transform transition-transform duration-300 ${
//           showSocialBar ? 'translate-y-0' : '-translate-y-full'
//         }`}
//         style={{
//           height: `${topBarHeight}px`,
//           paddingLeft: '16px',
//           paddingRight: '16px',
//           lineHeight: '56px', // vertically center text/icons
//         }}
//       >
//         <div className="hidden sm:block  text-xs md:text-sm">
//           Prakash Asphaltings and Toll Highways (INDIA) ltd.
//         </div>

//         <div className="flex items-center gap-4 font-medium whitespace-nowrap overflow-x-auto text-xs md:text-sm">
//           <span className="flex items-center gap-1">
//             <FaPhoneAlt className="text-green-500" /> +91‑7771879777
//           </span>
//           <span className="hidden sm:inline">|</span>
//           <span className="hidden sm:flex items-center gap-1">
//             <FaEnvelope className="text-yellow-400" /> info@pathindia.com
//           </span>
//         </div>

//         <div className="flex items-center space-x-3 sm:space-x-4">
//           <a
//             href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-700 hover:animate-bounce transition"
//           >
//             <FaLinkedin size={20} />
//           </a>
//           <a
//             href="https://www.instagram.com/path_india/?hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-600 hover:animate-bounce transition"
//           >
//             <FaInstagram size={20} />
//           </a>
//           <a
//             href="https://www.facebook.com/pathltd/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:animate-bounce transition"
//           >
//             <FaFacebook size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav
//         className="bg-white shadow-md fixed left-0 w-full z-40 transition-all duration-300"
//         style={{
//           top: showSocialBar ? `${topBarHeight}px` : '0',
//         }}
//       >
//         <div className="flex justify-between items-center px-4 py-3 md:py-1">
//           {/* Logo */}
//           <div className="pl-2 flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/Image/logo.png"
//                 alt="Logo"
//                 width={90}
//                 height={30}
//                 className="object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:ml-auto space-x-4 pr-2">
//             {navItems.map((item) => (
//               <Link key={item.label} href={item.href}>
//                 <span className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm  cursor-pointer">
//                   {item.label}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden pr-2">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link key={item.label} href={item.href}>
//                   <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
//                     {item.label}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// 'use client';
// import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook
// } from 'react-icons/fa';
// import { TbGridDots } from 'react-icons/tb';
// import { ImBlog } from "react-icons/im";
// import { FaRoad } from "react-icons/fa";
// import { MdOutlineWarehouse } from "react-icons/md";
// import { RiHotelLine } from "react-icons/ri";
// import { FaRoadBarrier } from "react-icons/fa6";
// import { GiCrystalBars } from "react-icons/gi";
// import { SiInteractiondesignfoundation } from "react-icons/si";
// import { CiLogin } from "react-icons/ci";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSocialBar, setShowSocialBar] = useState(true);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const navItems = [
//     { label: 'Path Recharge', href: '/' },
//     { label: 'About Us', href: '/Nav_aboutus' },
//     { label: 'Our Project', href: '/Nav_Our_Projects' },
//     { label: 'Global Footprint', href: '/Nav_Global_Footprints' },
//     { label: 'Our Partners (BRANDS)', href: '/Nav_Brand_Partners' },
//     { label: 'Media Corners', href: '/Nav_Gallery' },
//     { label: 'Rate Us', href: '/Navbar_Rate_US' },
//     { label: 'Brochure', href: '/pathrecharge.pdf', download: true },
//     { label: 'Contact Us', href: '/Nav_Contact' },

//     {
//       label: 'More',
//       submenu: [

//         { label: 'Partner With Us', href: '/NavgrowwithRecharge' },
//         { label: 'Video', href: '/Nav_Video' },
//       ],
//     },
//   ];

//   // Detect mobile/desktop
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Social bar scroll effect
//   useEffect(() => {
//     const handleScroll = () => setShowSocialBar(window.scrollY < 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Dropdown handlers
//   const handleDropdownClick = () => {
//     if (isMobile) {
//       setIsDropdownOpen(prev => !prev);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (!isMobile) {
//       setIsDropdownOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setIsDropdownOpen(false);
//     }
//   };

//   const topBarHeight = 25;

//   return (
//     <>
//       {/* Social Bar */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-gray-100 flex justify-between items-center text-gray-600 text-xs md:text-sm z-50 transform transition-transform duration-300 ${showSocialBar ? "translate-y-0" : "-translate-y-full"
//           }`}
//         style={{ height: 'auto', padding: '0 16px', lineHeight: '20px' }}
//       >
//         <div className="hidden sm:block text-xs md:text-sm font-normal py-1">
//           Prakash Asphaltings and Toll Highways (INDIA) Ltd.
//         </div>

//         <div className="flex items-center gap-2 font-normal whitespace-nowrap overflow-x-auto text-xs md:text-sm py-1">
//           <span className="flex items-center gap-1">
//             <FaPhoneAlt className="text-green-500" /> +91-7771879777
//           </span>
//           <span className="hidden sm:inline">|</span>
//           <span className="hidden sm:flex items-center gap-1">
//             <FaEnvelope className="text-yellow-400" /> info@pathindia.com
//           </span>
//         </div>

//         <div className="flex items-center space-x-3 sm:space-x-4 py-1 relative">
//           <a
//             href="https://www.linkedin.com/company/path-recharge/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-700 hover:animate-bounce transition"
//           >
//             <FaLinkedin size={18} />
//           </a>

//           <a
//             href="https://www.instagram.com/path_india/?hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-600 hover:animate-bounce transition"
//           >
//             <FaInstagram size={18} />
//           </a>

//           <a
//             href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:animate-bounce transition"
//           >
//             <FaFacebook size={20} />
//           </a>

//           <Link
//             href="/Nav_Social_mediablog"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:animate-bounce transition"
//           >
//             <ImBlog size={15} />
//           </Link>


//           {/* Dropdown - Mobile: Click, Desktop: Hover */}
//           <div
//             ref={dropdownRef}
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button
//               className="text-gray-700 hover:text-black transition focus:outline-none mt-1"
//               onClick={handleDropdownClick}
//             >
//               <TbGridDots size={15} />
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-45 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                 <ul className="py-1 text-sm text-gray-700">
//                   {[
//                     { name: "Path Highway", link: "#", icon: <FaRoad className="inline mr-2 text-blue-500" /> },
//                     { name: "Path Logistic", link: "#", icon: <MdOutlineWarehouse className="inline mr-2 text-green-500" /> },
//                     { name: "Path Recharge", link: "#", icon: <RiHotelLine className="inline mr-2 text-purple-500" /> },
//                     { name: "Path Crushbarrier", link: "#", icon: <FaRoadBarrier className="inline mr-2 text-red-500" /> },
//                     { name: "Path GFRP", link: "#", icon: <GiCrystalBars className="inline mr-2 text-yellow-500" /> },
//                     { name: "Path Foundation", link: "#", icon: <SiInteractiondesignfoundation className="inline mr-2 text-indigo-500" /> },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <a
//                         href={item.link}
//                         className="flex items-center px-4 py-2 hover:bg-gray-100"
//                       >
//                         {item.icon} {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav
//         className="bg-white shadow-md fixed left-0 w-full z-40 transition-all duration-300"
//         style={{ top: showSocialBar ? `${topBarHeight}px` : '0' }}
//       >
//         <div className="flex justify-between items-center px-4 py-3 md:py-1">
//           {/* Logo */}
//           <div className="pl-2 flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/Image/logo.png"
//                 alt="Logo"
//                 width={90}
//                 height={30}
//                 className="object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center md:ml-auto space-x-4 pr-2 ">
//             {navItems.map(item =>
//               item.download ? (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   download="PathRecharge-Brochure.pdf"
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden pr-2">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <HiOutlineBars3CenterLeft size={30} />

//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map(item =>
//                 item.download ? (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     download="PathRecharge-Brochure.pdf"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"
//                   >
//                     {item.label}
//                   </a>
//                 ) : (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               )}
              
//               {/* Mobile-only Login Button */}
//               <div className="border-t border-gray-300 "></div>
//               <div className="flex items-center justify-between px-3 py-2 rounded-md">
//                 {/* Left - Login Button */}
//                 <Link
//                   href="/Login"
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-600 transition-all duration-200 cursor-pointer"
//                 >
//                   <span>Login</span>
//                   <CiLogin className="text-xl text-red-400" />
//                 </Link>

//                 {/* Right - Social Icons */}
//                 <div className="flex items-center gap-4">
//                   <a
//                     href="https://www.instagram.com/pathrecharge/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-pink-600 hover:text-pink-700 text-xl"
//                   >
//                     <FaInstagram />
//                   </a>

//                   <a
//                     href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:animate-bounce transition text-xl"
//                   >
//                     <FaFacebook size={20} />
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
'use client';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import { ImBlog } from "react-icons/im";
import { FaRoad } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { FaRoadBarrier } from "react-icons/fa6";
import { GiCrystalBars } from "react-icons/gi";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSocialBar, setShowSocialBar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { label: 'Path Recharge', href: '/' },
    { label: 'About Us', href: '/Nav_aboutus' },
    { label: 'Our Project', href: '/Nav_Our_Projects' },
    { label: 'Global Footprint', href: '/Nav_Global_Footprints' },
    { label: 'Our Partners (BRANDS)', href: '/Nav_Brand_Partners' },
    { label: 'Media Corners', href: '/Nav_Gallery' },
    { label: 'Rate Us', href: '/Navbar_Rate_US' },
    { label: 'Brochure', href: '/pathrecharge.pdf', download: true },
    { label: 'Contact Us', href: '/Nav_Contact' },
  ];

  const moreItems = [
    { label: 'Partner With Us', href: '/NavgrowwithRecharge' },
    { label: 'Video', href: '/Navvideos' },
  ];

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Social bar scroll effect
  useEffect(() => {
    const handleScroll = () => setShowSocialBar(window.scrollY < 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dropdown handlers
  const handleDropdownClick = () => {
    if (isMobile) {
      setIsDropdownOpen(prev => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  };

  const topBarHeight = 25;

  return (
    <>
      {/* Social Bar (Same as before) */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-100 flex justify-between items-center text-gray-600 text-xs md:text-sm z-50 transform transition-transform duration-300 ${showSocialBar ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ height: 'auto', padding: '0 16px', lineHeight: '20px' }}
      >
        <div className="hidden sm:block text-xs md:text-sm font-normal py-1">
          Prakash Asphaltings and Toll Highways (INDIA) Ltd.
        </div>

        <div className="flex items-center gap-2 font-normal whitespace-nowrap overflow-x-auto text-xs md:text-sm py-1">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-green-500" /> +91-7771879777
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1">
            <FaEnvelope className="text-yellow-400" /> info@pathindia.com
          </span>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4 py-1 relative">
          <a
            href="https://www.linkedin.com/company/path-recharge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:animate-bounce transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://www.instagram.com/path_india/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:animate-bounce transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:animate-bounce transition"
          >
            <FaFacebook size={20} />
          </a>

          <Link
            href="/Nav_Social_mediablog"
            rel="noopener noreferrer"
            className="text-gray-600 hover:animate-bounce transition"
          >
            <ImBlog size={15} />
          </Link>

          {/* Dropdown - Mobile: Click, Desktop: Hover */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-gray-700 hover:text-black transition focus:outline-none mt-1"
              onClick={handleDropdownClick}
            >
              <TbGridDots size={15} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-45 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  {[
                    { name: "Path Highway", link: "#", icon: <FaRoad className="inline mr-2 text-blue-500" /> },
                    { name: "Path Logistic", link: "#", icon: <MdOutlineWarehouse className="inline mr-2 text-green-500" /> },
                    { name: "Path Recharge", link: "#", icon: <RiHotelLine className="inline mr-2 text-purple-500" /> },
                    { name: "Path Crushbarrier", link: "#", icon: <FaRoadBarrier className="inline mr-2 text-red-500" /> },
                    { name: "Path GFRP", link: "#", icon: <GiCrystalBars className="inline mr-2 text-yellow-500" /> },
                    { name: "Path Foundation", link: "#", icon: <SiInteractiondesignfoundation className="inline mr-2 text-indigo-500" /> },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                      >
                        {item.icon} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="bg-white shadow-md fixed left-0 w-full z-40 transition-all duration-300"
        style={{ top: showSocialBar ? `${topBarHeight}px` : '0' }}
      >
        <div className="flex justify-between items-center px-4 py-3 md:py-1">
          {/* Logo */}
          <div className="pl-2 flex-shrink-0">
            <Link href="/">
              <Image
                src="/Image/logo.png"
                alt="Logo"
                width={90}
                height={30}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:ml-auto space-x-4 pr-2 ">
            {navItems.map(item =>
              item.download ? (
                <a
                  key={item.label}
                  href={item.href}
                  download="PathRecharge-Brochure.pdf"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Right Side: Badge, Text, Divider, Menu Button 💡 CHANGED FOR MOBILE VIEW */}
          <div className="md:hidden flex items-center pr-2 space-x-2"> 
            
            {/* 1. Image (Badge) - Mobile Side में ऐड किया गया */}
            {/* 💡 Note: आपको अपनी Great Place to Work image को अपने /public फ़ोल्डर में डालना होगा 
               और src को सही path से बदलना होगा, जैसे '/Image/great-place-to-work-badge.png' */}
          <div className="flex-shrink-0">
              <Image
                src="/Image/navbarlogo.png" // 💡 आपका दिया गया Source Path
                alt="Recharge. Refuel. Refresh." // 💡 Alt Text Updated
                width={70} // 💡 चौड़ाई (Width) को थोड़ा बढ़ाया गया
                height={30}
                className="object-contain w-auto h-8" 
              />
            </div>
            
            {/* 2. Vertical Line (Divider) और Text */}
            <div className="flex items-center space-x-1">
              <span className="h-6 border-r border-gray-400"></span> {/* Vertical Divider */}
             
            </div>

            {/* 3. Mobile Menu Button (Three lines) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none ml-1" // ml-2 to add space
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <HiOutlineBars3CenterLeft size={30} />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Same as before) */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Regular Nav Items */}
              {navItems.map(item =>
                item.download ? (
                  <a
                    key={item.label}
                    href={item.href}
                    download="PathRecharge-Brochure.pdf"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* More Dropdown Button */}
              <div>
                <button
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  <span>More</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileMoreOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* More Submenu Items */}
                {isMobileMoreOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    {moreItems.map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileMoreOpen(false);
                        }}
                        className="block px-3 py-2 rounded-md text-sm font-normal text-gray-500 hover:text-blue-600 cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider and Center Logo (as before) */}
              <div className="relative flex items-center justify-center -mt-5">
                {/* Line */}
                <div className="absolute w-full border-t border-gray-300"></div>

                {/* Center Logo */}
                <div className="bg-white px-1 z-5">
                  <img
                    src="/Image/removeaboutbackground.png"  // 🔁 replace with your logo path
                    alt="Path Recharge Logo"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Login Button (Left) & Social Icons (Right) */}
              <div className="flex items-center justify-between px-3 -py-1">
                {/* Left - Login Button */}
                <Link
                  href="/Login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                >
                  <span>Login</span>
                  <CiLogin className="text-xl text-red-400" />
                </Link>

                {/* Right - Social Icons */}
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/pathrecharge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 text-2xl"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:animate-bounce transition text-2xl"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;



// old code beena nabar side img ka


// 'use client';

// import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

// import { useState, useEffect, useRef } from 'react';

// import Link from 'next/link';

// import Image from 'next/image';

// import {

//   FaPhoneAlt,

//   FaEnvelope,

//   FaLinkedin,

//   FaInstagram,

//   FaFacebook

// } from 'react-icons/fa';

// import { TbGridDots } from 'react-icons/tb';

// import { ImBlog } from "react-icons/im";

// import { FaRoad } from "react-icons/fa";

// import { MdOutlineWarehouse } from "react-icons/md";

// import { RiHotelLine } from "react-icons/ri";

// import { FaRoadBarrier } from "react-icons/fa6";

// import { GiCrystalBars } from "react-icons/gi";

// import { SiInteractiondesignfoundation } from "react-icons/si";

// import { CiLogin } from "react-icons/ci";



// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const [showSocialBar, setShowSocialBar] = useState(true);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   const [isMobile, setIsMobile] = useState(false);



//   const navItems = [

//     { label: 'Path Recharge', href: '/' },

//     { label: 'About Us', href: '/Nav_aboutus' },

//     { label: 'Our Project', href: '/Nav_Our_Projects' },

//     { label: 'Global Footprint', href: '/Nav_Global_Footprints' },

//     { label: 'Our Partners (BRANDS)', href: '/Nav_Brand_Partners' },

//     { label: 'Media Corners', href: '/Nav_Gallery' },

//     { label: 'Rate Us', href: '/Navbar_Rate_US' },

//     { label: 'Brochure', href: '/pathrecharge.pdf', download: true },

//     { label: 'Contact Us', href: '/Nav_Contact' },

//   ];



//   const moreItems = [

//     { label: 'Partner With Us', href: '/NavgrowwithRecharge' },

//     { label: 'Video', href: '/Navvideos' },

//   ];



//   // Detect mobile/desktop

//   useEffect(() => {

//     const checkMobile = () => {

//       setIsMobile(window.innerWidth < 768);

//     };

//     checkMobile();

//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);

//   }, []);



//   // Social bar scroll effect

//   useEffect(() => {

//     const handleScroll = () => setShowSocialBar(window.scrollY < 50);

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);

//   }, []);



//   // Close dropdown when clicking outside

//   useEffect(() => {

//     const handleClickOutside = (event) => {

//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

//         setIsDropdownOpen(false);

//       }

//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => document.removeEventListener("mousedown", handleClickOutside);

//   }, []);



//   // Dropdown handlers

//   const handleDropdownClick = () => {

//     if (isMobile) {

//       setIsDropdownOpen(prev => !prev);

//     }

//   };



//   const handleMouseEnter = () => {

//     if (!isMobile) {

//       setIsDropdownOpen(true);

//     }

//   };



//   const handleMouseLeave = () => {

//     if (!isMobile) {

//       setIsDropdownOpen(false);

//     }

//   };



//   const topBarHeight = 25;



//   return (

//     <>

//       {/* Social Bar */}

//       <div

//         className={`fixed top-0 left-0 w-full bg-gray-100 flex justify-between items-center text-gray-600 text-xs md:text-sm z-50 transform transition-transform duration-300 ${showSocialBar ? "translate-y-0" : "-translate-y-full"

//           }`}

//         style={{ height: 'auto', padding: '0 16px', lineHeight: '20px' }}

//       >

//         <div className="hidden sm:block text-xs md:text-sm font-normal py-1">

//           Prakash Asphaltings and Toll Highways (INDIA) Ltd.

//         </div>



//         <div className="flex items-center gap-2 font-normal whitespace-nowrap overflow-x-auto text-xs md:text-sm py-1">

//           <span className="flex items-center gap-1">

//             <FaPhoneAlt className="text-green-500" /> +91-7771879777

//           </span>

//           <span className="hidden sm:inline">|</span>

//           <span className="hidden sm:flex items-center gap-1">

//             <FaEnvelope className="text-yellow-400" /> info@pathindia.com

//           </span>

//         </div>



//         <div className="flex items-center space-x-3 sm:space-x-4 py-1 relative">

//           <a

//             href="https://www.linkedin.com/company/path-recharge/"

//             target="_blank"

//             rel="noopener noreferrer"

//             className="text-blue-700 hover:animate-bounce transition"

//           >

//             <FaLinkedin size={18} />

//           </a>



//           <a

//             href="https://www.instagram.com/path_india/?hl=en"

//             target="_blank"

//             rel="noopener noreferrer"

//             className="text-pink-600 hover:animate-bounce transition"

//           >

//             <FaInstagram size={18} />

//           </a>



//           <a

//             href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"

//             target="_blank"

//             rel="noopener noreferrer"

//             className="text-blue-600 hover:animate-bounce transition"

//           >

//             <FaFacebook size={20} />

//           </a>



//           <Link

//             href="/Nav_Social_mediablog"

//             rel="noopener noreferrer"

//             className="text-gray-600 hover:animate-bounce transition"

//           >

//             <ImBlog size={15} />

//           </Link>



//           {/* Dropdown - Mobile: Click, Desktop: Hover */}

//           <div

//             ref={dropdownRef}

//             className="relative"

//             onMouseEnter={handleMouseEnter}

//             onMouseLeave={handleMouseLeave}

//           >

//             <button

//               className="text-gray-700 hover:text-black transition focus:outline-none mt-1"

//               onClick={handleDropdownClick}

//             >

//               <TbGridDots size={15} />

//             </button>



//             {isDropdownOpen && (

//               <div className="absolute right-0 mt-2 w-45 bg-white border border-gray-200 rounded-lg shadow-lg z-50">

//                 <ul className="py-1 text-sm text-gray-700">

//                   {[

//                     { name: "Path Highway", link: "#", icon: <FaRoad className="inline mr-2 text-blue-500" /> },

//                     { name: "Path Logistic", link: "#", icon: <MdOutlineWarehouse className="inline mr-2 text-green-500" /> },

//                     { name: "Path Recharge", link: "#", icon: <RiHotelLine className="inline mr-2 text-purple-500" /> },

//                     { name: "Path Crushbarrier", link: "#", icon: <FaRoadBarrier className="inline mr-2 text-red-500" /> },

//                     { name: "Path GFRP", link: "#", icon: <GiCrystalBars className="inline mr-2 text-yellow-500" /> },

//                     { name: "Path Foundation", link: "#", icon: <SiInteractiondesignfoundation className="inline mr-2 text-indigo-500" /> },

//                   ].map((item) => (

//                     <li key={item.name}>

//                       <a

//                         href={item.link}

//                         className="flex items-center px-4 py-2 hover:bg-gray-100"

//                       >

//                         {item.icon} {item.name}

//                       </a>

//                     </li>

//                   ))}

//                 </ul>

//               </div>

//             )}

//           </div>

//         </div>

//       </div>



//       {/* Main Navbar */}

//       <nav

//         className="bg-white shadow-md fixed left-0 w-full z-40 transition-all duration-300"

//         style={{ top: showSocialBar ? `${topBarHeight}px` : '0' }}

//       >

//         <div className="flex justify-between items-center px-4 py-3 md:py-1">

//           {/* Logo */}

//           <div className="pl-2 flex-shrink-0">

//             <Link href="/">

//               <Image

//                 src="/Image/logo.png"

//                 alt="Logo"

//                 width={90}

//                 height={30}

//                 className="object-contain"

//                 priority

//               />

//             </Link>

//           </div>



//           {/* Desktop Menu */}

//           <div className="hidden md:flex md:items-center md:ml-auto space-x-4 pr-2 ">

//             {navItems.map(item =>

//               item.download ? (

//                 <a

//                   key={item.label}

//                   href={item.href}

//                   download="PathRecharge-Brochure.pdf"

//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"

//                 >

//                   {item.label}

//                 </a>

//               ) : (

//                 <Link

//                   key={item.label}

//                   href={item.href}

//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer"

//                 >

//                   {item.label}

//                 </Link>

//               )

//             )}

//           </div>



//           {/* Mobile Menu Button */}

//           <div className="md:hidden pr-2">

//             <button

//               onClick={() => setIsOpen(!isOpen)}

//               type="button"

//               className="text-gray-700 hover:text-blue-600 focus:outline-none"

//               aria-label="Toggle menu"

//             >

//               <svg

//                 className="h-6 w-6"

//                 stroke="currentColor"

//                 fill="none"

//                 viewBox="0 0 24 24"

//               >

//                 {isOpen ? (

//                   <path

//                     strokeLinecap="round"

//                     strokeLinejoin="round"

//                     strokeWidth="2"

//                     d="M6 18L18 6M6 6l12 12"

//                   />

//                 ) : (

//                   <HiOutlineBars3CenterLeft size={30} />

//                 )}

//               </svg>

//             </button>

//           </div>

//         </div>



//         {/* Mobile Menu */}

//         {isOpen && (

//           <div className="md:hidden bg-white shadow-md">

//             <div className="px-2 pt-2 pb-3 space-y-1">

//               {/* Regular Nav Items */}

//               {navItems.map(item =>

//                 item.download ? (

//                   <a

//                     key={item.label}

//                     href={item.href}

//                     download="PathRecharge-Brochure.pdf"

//                     onClick={() => setIsOpen(false)}

//                     className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"

//                   >

//                     {item.label}

//                   </a>

//                 ) : (

//                   <Link

//                     key={item.label}

//                     href={item.href}

//                     onClick={() => setIsOpen(false)}

//                     className="block px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"

//                   >

//                     {item.label}

//                   </Link>

//                 )

//               )}



//               {/* More Dropdown Button */}

//               <div>

//                 <button

//                   onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}

//                   className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-normal text-gray-600 hover:text-blue-600 cursor-pointer"

//                 >

//                   <span>More</span>

//                   <svg

//                     className={`w-4 h-4 transition-transform ${isMobileMoreOpen ? 'rotate-180' : ''}`}

//                     fill="none"

//                     stroke="currentColor"

//                     viewBox="0 0 24 24"

//                   >

//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />

//                   </svg>

//                 </button>

               

//                 {/* More Submenu Items */}

//                 {isMobileMoreOpen && (

//                   <div className="pl-6 space-y-1 mt-1">

//                     {moreItems.map(item => (

//                       <Link

//                         key={item.label}

//                         href={item.href}

//                         onClick={() => {

//                           setIsOpen(false);

//                           setIsMobileMoreOpen(false);

//                         }}

//                         className="block px-3 py-2 rounded-md text-sm font-normal text-gray-500 hover:text-blue-600 cursor-pointer"

//                       >

//                         {item.label}

//                       </Link>

//                     ))}

//                   </div>

//                 )}

//               </div>



//               {/* Divider */}

//               {/* <div className="border-t border-gray-300 pt-2"></div> */}

// <div className="relative flex items-center justify-center -mt-5">

//   {/* Line */}

//   <div className="absolute w-full border-t border-gray-300"></div>



//   {/* Center Logo */}

//   <div className="bg-white px-1 z-5">

//     <img

//       src="/Image/removeaboutbackground.png"  // 🔁 replace with your logo path

//       alt="Path Recharge Logo"

//       className="h-14 w-auto object-contain"

//     />

//   </div>

// </div>



//               {/* Login Button (Left) & Social Icons (Right) */}

//               <div className="flex items-center justify-between px-3 -py-1">

//                 {/* Left - Login Button */}

//                 <Link

//                   href="/Login"

//                   onClick={() => setIsOpen(false)}

//                   className="flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-600 transition-all duration-200 cursor-pointer"

//                 >

//                   <span>Login</span>

//                   <CiLogin className="text-xl text-red-400" />

//                 </Link>



//                 {/* Right - Social Icons */}

//                 <div className="flex items-center gap-6">

//                   <a

//                     href="https://www.instagram.com/pathrecharge/"

//                     target="_blank"

//                     rel="noopener noreferrer"

//                     className="text-pink-600 hover:text-pink-700 text-2xl"

//                   >

//                     <FaInstagram />

//                   </a>



//                   <a

//                     href="https://www.facebook.com/people/PATH-Recharge/61568281787745/?mibextid=wwXIfr&rdid=PKlL1XaKRU7zYjsk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169cBEL7LP%2F%3Fmibextid%3DwwXIfr"

//                     target="_blank"

//                     rel="noopener noreferrer"

//                     className="text-blue-600 hover:animate-bounce transition text-2xl"

//                   >

//                     <FaFacebook />

//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         )}

//       </nav>

//     </>

//   );

// };



// export default Navbar;