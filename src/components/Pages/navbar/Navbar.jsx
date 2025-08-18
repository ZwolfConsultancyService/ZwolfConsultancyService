import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { slugify } from "../../../lib/slugify";
import { servicesData } from "../../ui/service/servicesData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  const servicesDropdown = servicesData.map(service => ({
    name: service.title,
    path: `/services/${slugify(service.title)}`
  }));

  const isActive = (path) => location.pathname === path;

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <div className="bg-[#f7f8fc] w-full fixed top-0 left-0 shadow z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4">
        {/* Logo - Responsive sizing */}
        <Link
          to="/"
          className="flex items-center font-extrabold text-xl sm:text-2xl md:text-3xl text-[#1e1e2d]"
        >
          <span>Z</span>
          <span className="text-[#5aa6f8]">W</span>
          <span className="text-[#5aa6f8]">0</span>
          <span>LF</span>
        </Link>

        {/* Desktop Menu - Hidden on mobile and tablet */}
        <ul className="hidden xl:flex items-center space-x-6 2xl:space-x-8 text-sm lg:text-base font-medium text-[#1e1e2d]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.dropdown && setServicesOpen(true)}
              onMouseLeave={() => item.dropdown && setServicesOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#5aa6f8] font-semibold"
                    : "hover:text-[#5aa6f8]"
                }`}
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    } ${isActive(item.path) ? "text-[#5aa6f8]" : ""}`}
                  />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.dropdown && servicesOpen && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-100 text-[#1e1e2d] rounded-xl shadow-lg py-2 w-56 transform opacity-100 scale-100 transition-all duration-200">
                  {servicesDropdown.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      to={service.path}
                      className="block px-4 py-2 hover:bg-[#5aa6f8] hover:text-white transition-colors duration-150"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Responsive sizing and visibility */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#1467c0] transition-colors duration-200"
        >
          <span className="hidden lg:inline">Free Consultation</span>
          <span className="lg:hidden">Contact</span>
          <FaArrowUpRightFromSquare className="ml-1 lg:ml-2 text-xs" />
        </Link>

        {/* Mobile/Tablet Menu Toggle */}
        <button
          className="xl:hidden text-xl sm:text-2xl text-[#1e1e2d] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#f7f8fc] border-t border-gray-200 px-3 sm:px-4 md:px-6 py-4 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {item.dropdown ? (
                <>
                  {/* Services with dropdown toggle */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className={`block py-2 text-base sm:text-lg ${
                        isActive(item.path)
                          ? "text-[#5aa6f8] font-semibold"
                          : "text-[#1e1e2d]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleMobileServices}
                      className="p-2 text-[#1e1e2d] hover:text-[#5aa6f8]"
                    >
                      <FaChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile Services Dropdown */}
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2 pb-2 border-l-2 border-[#5aa6f8] pl-4">
                      {servicesDropdown.map((service, sIdx) => (
                        <Link
                          key={sIdx}
                          to={service.path}
                          className="block py-1 text-sm sm:text-base text-[#1e1e2d] hover:text-[#5aa6f8] transition-colors duration-150"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block py-2 text-base sm:text-lg transition-colors duration-150 ${
                    isActive(item.path)
                      ? "text-[#5aa6f8] font-semibold"
                      : "text-[#1e1e2d] hover:text-[#5aa6f8]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-3 border-t border-gray-200">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full bg-[#5aa6f8] text-white font-semibold text-sm sm:text-base rounded-full px-6 py-3 hover:bg-[#1467c0] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Free Consultation
              <FaArrowUpRightFromSquare className="ml-2 text-sm" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;