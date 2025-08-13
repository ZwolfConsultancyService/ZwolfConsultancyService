import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", active: true },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

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

        {/* Desktop Menu (only from lg breakpoint) */}
        <ul className="hidden lg:flex items-center space-x-8 text-base  font-medium text-[#1e1e2d]">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`flex items-center space-x-1 ${
                  item.active
                    ? "text-[#5aa6f8] font-semibold"
                    : "hover:text-[#1e1e2d]"
                }`}
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <FaChevronDown
                    className={`text-xs ${
                      item.active ? "text-[#5aa6f8]" : ""
                    }`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          to="/consultation"
          className="hidden lg:inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-[#1467c0] transition"
        >
          Free Consultation
        </Link>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden text-2xl text-[#1e1e2d]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f7f8fc] shadow-inner px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`block ${
                item.active
                  ? "text-[#5aa6f8] font-semibold"
                  : "text-[#1e1e2d] hover:text-[#1467c0]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
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
