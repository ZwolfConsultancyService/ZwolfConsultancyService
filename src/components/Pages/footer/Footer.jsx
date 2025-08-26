import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Only for internal navigation
import {servicesData} from '../../ui/service/servicesData';
import {slugify} from "../../../lib/slugify";
import zwolf from "../../../assets/zwolf.png"
const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] text-gray-700 pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-base">
        
        {/* Logo & Info */}
        <div>
               {/* <Link
                      to="/"
                      className="flex items-center font-extrabold text-3xl text-[#1e1e2d]"
                    >
                      <span>Z</span>
                      <span className="text-[#5aa6f8]">W</span>
                      <span className="text-[#5aa6f8]">0</span>
                      <span>LF</span>
                    </Link> */}
                    <Link
                      to="/"
                      className="flex items-center h-[50px]"
                    >
                      <img 
                        src={zwolf}
                        alt="ZWOLF Logo" 
                        className="w-[100px]"
                      />
                    </Link>
          <p className="mt-3">
            Creative Agency Based on Country name
          </p>
          <p className="font-semibold mt-5">zwolfconsultancy@gmail.com</p>
          <p>(+91) 952 098 9744</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-bold mb-4">Pages</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-[#5aa6f8]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#5aa6f8]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#5aa6f8]">Services</Link></li>
            <li><Link to="/blog" className="hover:text-[#5aa6f8]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#5aa6f8]">Contact</Link></li>
          </ul>
        </div>
{/* Socials */}
<div>
  <h3 className="font-bold mb-4">Socials</h3>
  <ul className="space-y-3">
    <li>
      <a
        href="https://www.instagram.com/zwolfconsultancy/profilecard/?igsh=d2pzOWJmeDBnbWZx"
        className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram /> Instagram
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/profile.php?id=61576374277131"
        className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF /> Facebook
      </a>
    </li>
    <li>
      <a
        href="https://x.com/Zwolfconsultanc"
        className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter /> Twitter
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/zwolf-consultancy/"
        className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn /> Linkedin
      </a>
    </li>
  </ul>
</div>

{/* Services */}
<div>
  <h3 className="font-bold mb-4">Services</h3>
  <ul className="space-y-3">
    {servicesData.slice(0, 5).map((service, idx) => (
      <li key={idx}>
        <Link
          to={`/services/${slugify(service.title)}`}
          className="hover:text-[#5aa6f8] cursor-pointer"
        >
          {service.title}
        </Link>
      </li>
    ))}
  </ul>
</div>


      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-200 pt-5 px-6 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
        <p> @ 2024 Zwolf. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-[#5aa6f8] cursor-pointer">
            <Link to={"/privacy-policy"}>Privacy Policy</Link></span>
          <span className="hover:text-[#5aa6f8] cursor-pointer">
            <Link to={"/terms-conditions"}>Terms of Service</Link></span>
          <span
            className="hover:text-[#5aa6f8] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go To Top
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
