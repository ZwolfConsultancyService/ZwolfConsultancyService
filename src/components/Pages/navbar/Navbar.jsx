import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { slugify } from "../../../lib/slugify";
import { servicesData } from "../../ui/service/servicesData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  return (
    <div className="bg-[#f7f8fc] w-full fixed top-0 left-0 shadow z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center font-extrabold text-2xl md:text-3xl text-[#1e1e2d]"
        >
          <span>Z</span>
          <span className="text-[#5aa6f8]">W</span>
          <span className="text-[#5aa6f8]">0</span>
          <span>LF</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-base font-medium text-[#1e1e2d]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.dropdown && setServicesOpen(true)}
              onMouseLeave={() => item.dropdown && setServicesOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-1 ${
                  isActive(item.path)
                    ? "text-[#5aa6f8] font-semibold"
                    : "hover:text-[#1e1e2d]"
                }`}
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <FaChevronDown
                    className={`text-xs ${
                      isActive(item.path) ? "text-[#5aa6f8]" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && servicesOpen && (
                <div className="absolute left-0 mt-2 bg-[#5aa6f8] text-white rounded-xl shadow-lg py-3 w-56">
                  {servicesDropdown.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      to={service.path}
                      className="block px-4 py-2 hover:bg-[#1467c0] transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/consultation"
          className="hidden lg:inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-[#1467c0] transition"
        >
          Free Consultation <FaArrowUpRightFromSquare className="ml-2" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-[#1e1e2d]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f7f8fc] shadow-inner px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link
                to={item.path}
                className={`block ${
                  isActive(item.path)
                    ? "text-[#5aa6f8] font-semibold"
                    : "text-[#1e1e2d] hover:text-[#1467c0]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>

              {/* Mobile dropdown for Services */}
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {servicesDropdown.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      to={service.path}
                      className="block text-[#1e1e2d] hover:text-[#5aa6f8]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/consultation"
            className="inline-flex items-center justify-center w-full bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-[#1467c0] transition"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
