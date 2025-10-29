// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { QRCodeCanvas } from "qrcode.react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube
// } from "react-icons/fa";
// import { CiLogin } from "react-icons/ci";
// const Footer = () => {
//       const websiteURL = "https://www.pathltd.com/"; // apna link yahan daalo
//   return (
//     <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-10 px-4 md:px-10 lg:px-20 mb--15 pb-3">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
//         {/* LEFT - LOGO & TEXT */}
//         <div className="lg:w-[45%] w-full flex flex-col items-center lg:items-start text-center lg:text-left">
//           <div className="relative w-auto mb-0 h-[80px] mb-2">
//             <Image
//               src="/Image/logo.png"
//               alt="Logo"
//               width={124}
//               height={40}
//               className="object-contain"
//               priority
//             />
//           </div>


//           <p className="text-sm lg:text-base mb-6 max-w-md font-normal">
//             We are a globally recognised manufacturer and exporter of
//             high-quality galvanised and fabricated steel products. Here is our
//             journey towards success, commitment and determination. Path
//             India’s footprint on integrating its combined expertise into
//             manufacturing artistry has made it a worldwide leader in
//             manufacturing.
//           </p>


//           <div className="flex gap-12 pl-10 sm:pl-0 justify-center lg:justify-start text-white text-xl">
//             <a href="https://www.facebook.com/pathltd/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//             <a href="https://www.instagram.com/pathrecharge/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             <a href="https://www.linkedin.com/company/path-recharge/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//             <a href="tel:7489828437"><FaWhatsapp /></a>
//             <a href="https://www.youtube.com/@PathRecharge"><FaYoutube /></a>
//                  <a href={websiteURL} target="_blank" rel="noopener noreferrer">
//   <div className="relative w-max -mt-8 hidden sm:block">
//     <QRCodeCanvas
//       value={websiteURL}
//       size={85}
//       bgColor="transparent"
//       fgColor="#000000"
//       includeMargin={true}
//       level="H"
//     />
//     <span className="absolute inset-0 pt-22 flex items-center justify-center text-[10px] font-bold text-blue-500 pointer-events-none">
//       SCAN & CLICK
//     </span>
//   </div>
// </a>
//           </div>
     
//         </div>

//         {/* RIGHT - INFO & LINKS */}
//         <div className="lg:w-[65%] w-full flex flex-col gap-10">
//           {/* Section 1: Contact Info */}
//           <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
//             <div>
//               <h4 className="font-semibold mb-2 text-base lg:text-lg font-oswald ">CALL SUPPORT</h4>
//               <p>+91-7324-350100</p>

//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 lg:text-lg font-oswald">SALES SUPPORT</h4>
//               <p>8839968009</p>
//               <p>8827753128</p>
//               <p>7771879777</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 lg:text-lg font-oswald">EMAIL</h4>
//               <p>info@pathindia.in</p>
//               <p>anjul@pathltd.com</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 lg:text-lg font-oswald">CORPORATE OFFICE</h4>
//               <p className="flex items-start gap-2 pr-10">
//                 <FaMapMarkerAlt className="text-orange-500 text-lg" />
//                 76, Mall Road, Mhow Indore (M.P.) India – 453441
//               </p>
//             </div>
//           </div>

//           {/* Section 2: Navigation Links */}
//           {/* Section 2: Navigation Links */}
//           <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pl-22 text-sm lg:text-base border-t border-white/30 pt-6">
//             <div className="flex flex-col gap-2">

//               <a href="https://www.pathltd.com/" target="_blank" rel="noopener noreferrer" >Path India LTD</a>
//               <a href="/pathrecharge.pdf" download>
//                 Brochure
//               </a>

//             </div>
//             <div className="flex flex-col gap-2">
//               <Link href="/Nav_Contact">Contact</Link>
//               <Link href="/footer_apply_job">Carrier</Link>

//             </div>
//             <div className="flex flex-col gap-2">
//               <Link href="/Nav_Global_Footprints">Global Footprints (Site Map) </Link>
//             <Link
//       href="/Login"
//       className="flex items-center gap-2 cursor-pointer"
//     >
//       <span>Login</span>
//       <CiLogin className="text-lg text-red-600" />
//     </Link>  
//               {/* <Link to="/blog">Blog</Link> */}

//             </div>

//           </div>

//           {/* Section 3: Bottom Links */}

//         </div>
//       </div>


//       <div className="relative mt-0 lg:mt-8">
//   {/* Image just above the line, right-aligned */}
//  <img
//   src="/Image/Alllogo.png"
//   alt="Logo"
//   className="hidden sm:block absolute -top-5 -right-10 w-28 sm:w-36 md:w-44 lg:w-85 h-auto opacity-90"
// />


//   {/* Line + text */}
//   <div className="border-t border-white/40 pt-4 text-center text-sm">
//     © 2025 <span className="font-semibold">Path Recharge</span>. All rights reserved.
//   </div>
// </div>
//     </footer>
//   );
// };

// // export default Footer;
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { QRCodeCanvas } from "qrcode.react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube
// } from "react-icons/fa";
// import { CiLogin } from "react-icons/ci";

// const Footer = () => {
//   const websiteURL = "https://www.pathltd.com/";
  
//   return (
//     <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-20 pb-3">
//       <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
//         {/* LEFT - LOGO & TEXT */}
//         <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
//           <div className="relative w-auto h-[60px] sm:h-[70px] md:h-[80px] mb-2 sm:mb-3">
//             <Image
//               src="/Image/logo.png"
//               alt="Logo"
//               width={124}
//               height={40}
//               className="object-contain h-full w-auto"
//               priority
//             />
//           </div>

//           <p className="text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 max-w-md font-normal leading-relaxed px-2 sm:px-0">
//             We are a globally recognised manufacturer and exporter of
//             high-quality galvanised and fabricated steel products. Here is our
//             journey towards success, commitment and determination. Path
//             India's footprint on integrating its combined expertise into
//             manufacturing artistry has made it a worldwide leader in
//             manufacturing.
//           </p>

//           <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center lg:justify-start text-white text-lg sm:text-xl">
//             <a href="https://www.facebook.com/pathltd/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//               <FaFacebookF />
//             </a>
//             <a href="https://www.instagram.com/pathrecharge/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//               <FaInstagram />
//             </a>
//             <a href="https://www.linkedin.com/company/path-recharge/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//               <FaLinkedinIn />
//             </a>
//             <a href="tel:7489828437" className="hover:scale-110 transition-transform">
//               <FaWhatsapp />
//             </a>
//             <a href="https://www.youtube.com/@PathRecharge" className="hover:scale-110 transition-transform">
//               <FaYoutube />
//             </a>
//             <a href={websiteURL} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
//               <div className="relative w-max -mt-6 md:-mt-7 lg:-mt-8">
//                 <QRCodeCanvas
//                   value={websiteURL}
//                   size={75}
//                   bgColor="transparent"
//                   fgColor="#000000"
//                   includeMargin={true}
//                   level="H"
//                   className="sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"
//                 />
//                 <span className="absolute inset-0 pt-20 md:pt-22 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-blue-500 pointer-events-none">
//                   SCAN & CLICK
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT - INFO & LINKS */}
//         <div className="w-full lg:w-[65%] flex flex-col gap-6 sm:gap-8 md:gap-10">
//           {/* Section 1: Contact Info - Mobile View */}
//           <div className="grid grid-cols-1 gap-4 text-xs sm:hidden">
//             <div className="text-center">
//               <h4 className="font-semibold mb-1 text-sm font-oswald">CALL SUPPORT</h4>
//               <p>+91-7324-350100</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold mb-1 text-sm font-oswald">SALES SUPPORT</h4>
//               <p>8839968009 | 8827753128 | 7771879777</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold mb-1 text-sm font-oswald">EMAIL</h4>
//               <p>info@pathindia.in</p>
//               <p>anjul@pathltd.com</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold mb-1 text-sm font-oswald">CORPORATE OFFICE</h4>
//               <p className="flex items-start gap-2 justify-center px-4">
//                 <FaMapMarkerAlt className="text-orange-500 text-base mt-0.5 flex-shrink-0" />
//                 <span>76, Mall Road, Mhow Indore (M.P.) India – 453441</span>
//               </p>
//             </div>
//           </div>

//           {/* Section 1: Contact Info - Desktop View */}
//           <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-xs sm:text-sm">
//             <div>
//               <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">CALL SUPPORT</h4>
//               <p>+91-7324-350100</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">SALES SUPPORT</h4>
//               <p>8839968009</p>
//               <p>8827753128</p>
//               <p>7771879777</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">EMAIL</h4>
//               <p className="break-all">info@pathindia.in</p>
//               <p className="break-all">anjul@pathltd.com</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">CORPORATE OFFICE</h4>
//               <p className="flex items-start gap-2 pr-4 md:pr-8 lg:pr-10">
//                 <FaMapMarkerAlt className="text-orange-500 text-base md:text-lg flex-shrink-0 mt-0.5" />
//                 <span>76, Mall Road, Mhow Indore (M.P.) India – 453441</span>
//               </p>
//             </div>
//           </div>

//           {/* Section 2: Navigation Links - Mobile View */}
//           <div className="grid grid-cols-2 gap-4 text-xs sm:hidden border-t border-white/30 pt-4">
//             <div className="flex flex-col gap-2 text-center">
//               <a href="https://www.pathltd.com/" target="_blank" rel="noopener noreferrer">Path India LTD</a>
//               <a href="/pathrecharge.pdf" download>Brochure</a>
//               <Link href="/Nav_Contact">Contact</Link>
//             </div>
//             <div className="flex flex-col gap-2 text-center">
//               <Link href="/footer_apply_job">Carrier</Link>
//               <Link href="/Nav_Global_Footprints">Global Footprints</Link>
//               <Link href="/Login" className="flex items-center gap-1 justify-center">
//                 <span>Login</span>
//                 <CiLogin className="text-base text-red-600" />
//               </Link>
//             </div>
//           </div>

//           {/* Section 2: Navigation Links - Desktop View */}
//           <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-xs sm:text-sm md:text-base border-t border-white/30 pt-4 md:pt-6">
//             <div className="flex flex-col gap-2">
//               <a href="https://www.pathltd.com/" target="_blank" rel="noopener noreferrer">Path India LTD</a>
//               <a href="/pathrecharge.pdf" download>Brochure</a>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Link href="/Nav_Contact">Contact</Link>
//               <Link href="/footer_apply_job">Carrier</Link>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Link href="/Nav_Global_Footprints">Global Footprints (Site Map)</Link>
//               <Link href="/Login" className="flex items-center gap-2 cursor-pointer">
//                 <span>Login</span>
//                 <CiLogin className="text-lg text-red-600" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative mt-4 sm:mt-6 lg:mt-8">
//         {/* Logo Image */}
//         <img
//           src="/Image/Alllogo.png"
//           alt="Logo"
//           className="hidden sm:block absolute -top-4 md:-top-5 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-24 sm:w-28 md:w-36 lg:w-44 xl:w-[340px] h-auto opacity-90"
//         />

//         {/* Copyright Line */}
//         <div className="border-t border-white/40 pt-3 sm:pt-4 text-center text-xs sm:text-sm">
//           © 2025 <span className="font-semibold">Path Recharge</span>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Footer = () => {
  const websiteURL = "https://www.pathltd.com/";

  return (
    <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-20 pb-3">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
        {/* LEFT - LOGO & TEXT */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative w-auto h-[60px] sm:h-[70px] md:h-[80px] mb-2 sm:mb-3">
            <Image
              src="/Image/logo.png"
              alt="Logo"
              width={124}
              height={40}
              className="object-contain h-full w-auto"
              priority
            />
          </div>

          <p className="text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 max-w-md font-normal leading-relaxed px-2 sm:px-0">
            We are a globally recognised manufacturer and exporter of
            high-quality galvanised and fabricated steel products. Here is our
            journey towards success, commitment and determination. Path
            India&apos;s footprint on integrating its combined expertise into
            manufacturing artistry has made it a worldwide leader in
            manufacturing.
          </p>

          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center lg:justify-start text-white text-lg sm:text-xl">
            <a
              href="https://www.facebook.com/pathltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/pathrecharge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/path-recharge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="tel:7489828437"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/@PathRecharge"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>
            <a
              href={websiteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <div className="relative w-max -mt-6 md:-mt-7 lg:-mt-8">
                <QRCodeCanvas
                  value={websiteURL}
                  size={75}
                  bgColor="transparent"
                  fgColor="#000000"
                  includeMargin={true}
                  level="H"
                  className="sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"
                />
                <span className="absolute inset-0 pt-20 md:pt-22 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-blue-500 pointer-events-none">
                  SCAN & CLICK
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT - INFO & LINKS */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Section 1: Contact Info - Mobile View */}
          <div className="grid grid-cols-1 gap-4 text-xs sm:hidden">
            <div className="text-center">
              <h4 className="font-semibold mb-1 text-sm font-oswald">
                CALL SUPPORT
              </h4>
              <p>+91-7324-350100</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1 text-sm font-oswald">
                SALES SUPPORT
              </h4>
              <p>8839968009 | 8827753128 | 7771879777</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1 text-sm font-oswald">EMAIL</h4>
              <p>info@pathindia.in</p>
              <p>anjul@pathltd.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1 text-sm font-oswald">
                CORPORATE OFFICE
              </h4>
              <p className="flex items-start gap-2 justify-center px-4">
                <FaMapMarkerAlt className="text-orange-500 text-base mt-0.5 flex-shrink-0" />
                <span>76, Mall Road, Mhow Indore (M.P.) India – 453441</span>
              </p>
            </div>
          </div>

          {/* Section 1: Contact Info - Desktop View */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-xs sm:text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                CALL SUPPORT
              </h4>
              <p>+91-7324-350100</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                SALES SUPPORT
              </h4>
              <p>8839968009</p>
              <p>8827753128</p>
              <p>7771879777</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                EMAIL
              </h4>
              <p className="break-all">info@pathindia.in</p>
              <p className="break-all">anjul@pathltd.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                CORPORATE OFFICE
              </h4>
              <p className="flex items-start gap-2 pr-4 md:pr-8 lg:pr-10">
                <FaMapMarkerAlt className="text-orange-500 text-base md:text-lg flex-shrink-0 mt-0.5" />
                <span>76, Mall Road, Mhow Indore (M.P.) India – 453441</span>
              </p>
            </div>
          </div>

          {/* Section 2: Navigation Links - Mobile View */}
          <div className="grid grid-cols-2 gap-4 text-xs sm:hidden border-t border-white/30 pt-4">
            <div className="flex flex-col gap-2 text-center">
              <a
                href="https://www.pathltd.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Path India LTD
              </a>
              <a href="/pathrecharge.pdf" download>
                Brochure
              </a>
              <Link href="/Nav_Contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link href="/footer_apply_job">Carrier</Link>
              <Link href="/Nav_Global_Footprints">Global Footprints</Link>
              <Link
                href="/Login"
                className="flex items-center gap-1 justify-center"
              >
                <span>Login</span>
                <CiLogin className="text-base text-red-600" />
              </Link>
            </div>
          </div>

          {/* Section 2: Navigation Links - Desktop View */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-xs sm:text-sm md:text-base border-t border-white/30 pt-4 md:pt-6">
            <div className="flex flex-col gap-2">
              <a
                href="https://www.pathltd.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Path India LTD
              </a>
              <a href="/pathrecharge.pdf" download>
                Brochure
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/Nav_Contact">Contact</Link>
              <Link href="/footer_apply_job">Carrier</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/Nav_Global_Footprints">
                Global Footprints (Site Map)
              </Link>
              <Link
                href="/Login"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span>Login</span>
                <CiLogin className="text-lg text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 sm:mt-6 lg:mt-8">
        {/* Logo Image */}
        <img
          src="/Image/Alllogo.png"
          alt="Logo"
          className="hidden sm:block absolute -top-4 md:-top-5 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-24 sm:w-28 md:w-36 lg:w-44 xl:w-[340px] h-auto opacity-90"
        />

        {/* Copyright */}
        <div className="border-t border-white/40 pt-3 sm:pt-4 text-center text-xs sm:text-sm">
          © 2025 <span className="font-semibold">Path Recharge</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
