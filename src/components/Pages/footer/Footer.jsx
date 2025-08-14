import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Only for internal navigation

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] text-gray-700 pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-base">
        
        {/* Logo & Info */}
        <div>
               <Link
                      to="/"
                      className="flex items-center font-extrabold text-3xl text-[#1e1e2d]"
                    >
                      <span>Z</span>
                      <span className="text-[#5aa6f8]">W</span>
                      <span className="text-[#5aa6f8]">0</span>
                      <span>LF</span>
                    </Link>
          <p className="mt-3">
            Creative Agency Based on Country name
          </p>
          <p className="font-semibold mt-5">info@domainname.com</p>
          <p>(+0) 123 456 789</p>
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
            <li className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 hover:text-[#5aa6f8] cursor-pointer">
              <FaLinkedinIn /> Linkedin
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-3">
            <li className="hover:text-[#5aa6f8] cursor-pointer">Web Development</li>
            <li className="hover:text-[#5aa6f8] cursor-pointer">Digital Marketing</li>
            <li className="hover:text-[#5aa6f8] cursor-pointer">Game Development</li>
            <li className="hover:text-[#5aa6f8] cursor-pointer">Mobile App Development</li>
            <li className="hover:text-[#5aa6f8] cursor-pointer">Networking Services</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-200 pt-5 px-6 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
        <p> @ 2024 Zwolf. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-[#5aa6f8] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#5aa6f8] cursor-pointer">Terms of Service</span>
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
