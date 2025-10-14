// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-10 px-4 md:px-10 lg:px-20 mb--15 pb-3">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* LEFT - LOGO & TEXT */}
        <div className="lg:w-[45%] w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative w-auto mb-0 h-[80px] mb-2">
  <Image
    src="/Image/logo.png"
    alt="Logo"
    width={124}
    height={40}
    className="object-contain"
    priority
  />
</div>


        <p className="text-sm lg:text-base mb-6 max-w-md font-normal">
  We are a globally recognised manufacturer and exporter of
  high-quality galvanised and fabricated steel products. Here is our
  journey towards success, commitment and determination. Path
  India’s footprint on integrating its combined expertise into
  manufacturing artistry has made it a worldwide leader in
  manufacturing.
</p>


          <div className="flex gap-12 justify-center lg:justify-start text-white text-xl">
            <a href="https://www.facebook.com/pathltd/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/pathrecharge/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="tel:7489828437"><FaWhatsapp /></a>
            <a href="https://www.youtube.com/@PathRecharge"><FaYoutube/></a>
          </div>
        </div>

        {/* RIGHT - INFO & LINKS */}
        <div className="lg:w-[65%] w-full flex flex-col gap-10">
          {/* Section 1: Contact Info */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-base lg:text-lg font-oswald ">CALL SUPPORT</h4>
              <p>+91-7324-350100</p>
              
            </div>
            <div>
              <h4 className="font-semibold mb-2 lg:text-lg font-oswald">SALES SUPPORT</h4>
              <p>8839968009</p>
              <p>8827753128</p>
              <p>7771879777</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 lg:text-lg font-oswald">EMAIL</h4>
              <p>info@pathindia.in</p>
              <p>anjul@pathltd.com</p>
            </div>
            <div>
  <h4 className="font-semibold mb-2 lg:text-lg font-oswald">CORPORATE OFFICE</h4>
  <p className="flex items-start gap-2 pr-10">
    <FaMapMarkerAlt className="text-orange-500 text-lg" />
    76, Mall Road, Mhow Indore (M.P.) India – 453441
  </p>
</div>
          </div>

          {/* Section 2: Navigation Links */}
           {/* Section 2: Navigation Links */}
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pl-22 text-sm lg:text-base border-t border-white/30 pt-6">
                        <div className="flex flex-col gap-2">

                            <a href="https://www.pathltd.com/" target="_blank" rel="noopener noreferrer" >Path India LTD</a>
                           
                            
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="/Nav_Contact">Contact</Link>
                             <Link href="/footer_apply_job">Carrier</Link>
                       
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="/Nav_Global_Footprints">Global Footprints (Site Map) </Link>
                             <Link href="/Login">Login </Link>
                            {/* <Link to="/blog">Blog</Link> */}
                          
                        </div>
                      
                    </div>

          {/* Section 3: Bottom Links */}
          
        </div>
      </div>


         {/* ✅ Bottom Section - Copyright */}
      <div className="mt-0 lg:mt-8 border-t border-white/40 pt-4 text-center text-sm">
        © 2025 <span className="font-semibold">Path Recharge</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
