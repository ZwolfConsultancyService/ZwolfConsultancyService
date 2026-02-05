// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { slugify } from "../../../lib/slugify";
// import { servicesData } from "../../ui/service/servicesData";
// import Logo from "../../../assets/Logo.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services", dropdown: true },
//     { name: "Blog", path: "/blog" },
//   ];

//   const servicesDropdown = servicesData.map((service) => ({
//     name: service.title,
//     path: `/services/${slugify(service.title)}`,
//   }));

//   const isActive = (path) => location.pathname === path;

//   const toggleMobileServices = () => {
//     setMobileServicesOpen(!mobileServicesOpen);
//   };

//   const closeMobileMenu = () => {
//     setMenuOpen(false);
//     setMobileServicesOpen(false);
//   };

//   return (
//     <div className="bg-[#f7f8fc] w-full fixed top-0 left-0 shadow-sm z-50">
//       <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4">
//         {/* Logo with Circle & Brand Name */}
//         <Link
//           to="/"
//           className="flex items-center gap-3 z-10 flex-shrink-0 transition-transform duration-200 hover:scale-105"
//           onClick={closeMobileMenu}
//         >
//           {/* Circle Logo */}
//           <div className="relative rounded-full bg-white shadow-md p-1.5 sm:p-2">
//             <img
//               src={Logo}
//               alt="ZWOLF Logo"
//               className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
//             />
//           </div>

//           {/* Brand Name */}
//           <div className="flex flex-col leading-tight">
//             <span className="text-[#5aa6f8]  text-lg sm:text-xl lg:text-2xl tracking-tight">
//               ZWOLF
//             </span>
//             <span className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base -mt-1">
//               Consultancy
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Menu - Shows from lg (1024px) and up */}
//         <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base font-medium text-[#1e1e2d]">
//           {navItems.map((item, idx) => (
//             <li
//               key={idx}
//               className="relative"
//               onMouseEnter={() => item.dropdown && setServicesOpen(true)}
//               onMouseLeave={() => item.dropdown && setServicesOpen(false)}
//             >
//               <Link
//                 to={item.path}
//                 className={`flex items-center space-x-1 transition-colors duration-200 py-2 px-1 ${
//                   isActive(item.path)
//                     ? "text-[#5aa6f8] font-semibold"
//                     : "hover:text-[#5aa6f8]"
//                 }`}
//               >
//                 <span className="whitespace-nowrap">{item.name}</span>
//                 {item.dropdown && (
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-200 ${
//                       servicesOpen ? "rotate-180" : ""
//                     } ${isActive(item.path) ? "text-[#5aa6f8]" : ""}`}
//                   />
//                 )}
//               </Link>

//               {/* Desktop Dropdown */}
//               {item.dropdown && servicesOpen && (
//                 <div className="absolute left-0 mt-1 bg-white border border-gray-100 text-[#1e1e2d] rounded-xl shadow-lg py-2 w-56 transform opacity-100 scale-100 transition-all duration-200">
//                   {servicesDropdown.map((service, sIdx) => (
//                     <Link
//                       key={sIdx}
//                       to={service.path}
//                       className="block px-4 py-2 text-sm hover:bg-[#5aa6f8] hover:text-white transition-colors duration-150"
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button - Compact */}
//         <Link
//           to="/contact"
//           className="hidden lg:inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-[#1467c0] transition-all duration-200 hover:shadow-md whitespace-nowrap z-10"
//         >
//           Free Consultation
//           <FaArrowUpRightFromSquare className="ml-2 text-xs" />
//         </Link>

//         {/* Mobile/Tablet Menu Toggle */}
//         <button
//           className="lg:hidden text-xl text-[#1e1e2d] p-2 z-10 hover:text-[#5aa6f8] transition-colors duration-200"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* Mobile/Tablet Menu */}
//       <div
//         className={`lg:hidden bg-[#f7f8fc] border-t border-gray-200 transition-all duration-300 overflow-hidden ${
//           menuOpen
//             ? "max-h-[calc(100vh-64px)] opacity-100"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 sm:px-6 py-3 space-y-1 overflow-y-auto max-h-[calc(100vh-64px)]">
//           {navItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="border-b border-gray-100 last:border-b-0 pb-1 last:pb-0"
//             >
//               {item.dropdown ? (
//                 <>
//                   {/* Services with dropdown toggle */}
//                   <div className="flex items-center justify-between">
//                     <Link
//                       to={item.path}
//                       className={`block py-2 text-base font-medium transition-colors duration-150 ${
//                         isActive(item.path)
//                           ? "text-[#5aa6f8] font-semibold"
//                           : "text-[#1e1e2d] hover:text-[#5aa6f8]"
//                       }`}
//                       onClick={closeMobileMenu}
//                     >
//                       {item.name}
//                     </Link>
//                     <button
//                       onClick={toggleMobileServices}
//                       className="p-2 text-[#1e1e2d] hover:text-[#5aa6f8] transition-colors duration-200"
//                       aria-label={
//                         mobileServicesOpen
//                           ? "Close services menu"
//                           : "Open services menu"
//                       }
//                     >
//                       <FaChevronDown
//                         className={`text-sm transition-transform duration-200 ${
//                           mobileServicesOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {/* Mobile Services Dropdown */}
//                   <div
//                     className={`ml-3 border-l-2 border-[#5aa6f8] pl-3 transition-all duration-300 overflow-hidden ${
//                       mobileServicesOpen
//                         ? "max-h-96 opacity-100 mt-1"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="space-y-0.5 py-1">
//                       {servicesDropdown.map((service, sIdx) => (
//                         <Link
//                           key={sIdx}
//                           to={service.path}
//                           className="block py-1.5 text-sm text-[#1e1e2d] hover:text-[#5aa6f8] transition-colors duration-150 hover:pl-2"
//                           onClick={closeMobileMenu}
//                         >
//                           {service.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   to={item.path}
//                   className={`block py-2 text-base font-medium transition-colors duration-150 ${
//                     isActive(item.path)
//                       ? "text-[#5aa6f8] font-semibold"
//                       : "text-[#1e1e2d] hover:text-[#5aa6f8]"
//                   }`}
//                   onClick={closeMobileMenu}
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Mobile CTA Button - Compact */}
//           <div className="pt-3 mt-3 border-t border-gray-200">
//             <Link
//               to="/contact"
//               className="flex items-center justify-center w-full bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-[#1467c0] transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Free Consultation
//               <FaArrowUpRightFromSquare className="ml-2 text-xs" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { slugify } from "../../../lib/slugify";
import { servicesData } from "../../ui/service/servicesData";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  const servicesDropdown = servicesData.map((service) => ({
    name: service.title,
    path: `/services/${slugify(service.title)}`,
  }));

  const isActive = (path) => location.pathname === path;

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className={`w-full fixed top-0 left-0 shadow-sm z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/50 backdrop-blur-lg shadow-md" 
        : "bg-[#f7f8fc]"
    }`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4">
        {/* Logo with Circle & Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-3 z-10 flex-shrink-0 transition-transform duration-200 hover:scale-105"
          onClick={closeMobileMenu}
        >
          {/* Circle Logo */}
          <div className="relative rounded-full bg-white shadow-md p-1.5 sm:p-2">
            <img
              src={Logo}
              alt="ZWOLF Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="text-[#5aa6f8]  text-lg sm:text-xl lg:text-2xl tracking-tight">
              ZWOLF
            </span>
            <span className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base -mt-1">
              Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Menu - Shows from lg (1024px) and up */}
        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base font-medium text-[#1e1e2d]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.dropdown && setServicesOpen(true)}
              onMouseLeave={() => item.dropdown && setServicesOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 py-2 px-1 ${
                  isActive(item.path)
                    ? "text-[#5aa6f8] font-semibold"
                    : "hover:text-[#5aa6f8]"
                }`}
              >
                <span className="whitespace-nowrap">{item.name}</span>
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
                <div className="absolute left-0 mt-1 bg-white border border-gray-100 text-[#1e1e2d] rounded-xl shadow-lg py-2 w-56 transform opacity-100 scale-100 transition-all duration-200">
                  {servicesDropdown.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      to={service.path}
                      className="block px-4 py-2 text-sm hover:bg-[#5aa6f8] hover:text-white transition-colors duration-150"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Compact */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-[#1467c0] transition-all duration-200 hover:shadow-md whitespace-nowrap z-10"
        >
          Free Consultation
          <FaArrowUpRightFromSquare className="ml-2 text-xs" />
        </Link>

        {/* Mobile/Tablet Menu Toggle */}
        <button
          className="lg:hidden text-xl text-[#1e1e2d] p-2 z-10 hover:text-[#5aa6f8] transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden ${isScrolled ? "bg-white/80 backdrop-blur-lg" : "bg-[#f7f8fc]"} border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-[calc(100vh-64px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-3 space-y-1 overflow-y-auto max-h-[calc(100vh-64px)]">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-gray-100 last:border-b-0 pb-1 last:pb-0"
            >
              {item.dropdown ? (
                <>
                  {/* Services with dropdown toggle */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className={`block py-2 text-base font-medium transition-colors duration-150 ${
                        isActive(item.path)
                          ? "text-[#5aa6f8] font-semibold"
                          : "text-[#1e1e2d] hover:text-[#5aa6f8]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleMobileServices}
                      className="p-2 text-[#1e1e2d] hover:text-[#5aa6f8] transition-colors duration-200"
                      aria-label={
                        mobileServicesOpen
                          ? "Close services menu"
                          : "Open services menu"
                      }
                    >
                      <FaChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile Services Dropdown */}
                  <div
                    className={`ml-3 border-l-2 border-[#5aa6f8] pl-3 transition-all duration-300 overflow-hidden ${
                      mobileServicesOpen
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-0.5 py-1">
                      {servicesDropdown.map((service, sIdx) => (
                        <Link
                          key={sIdx}
                          to={service.path}
                          className="block py-1.5 text-sm text-[#1e1e2d] hover:text-[#5aa6f8] transition-colors duration-150 hover:pl-2"
                          onClick={closeMobileMenu}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block py-2 text-base font-medium transition-colors duration-150 ${
                    isActive(item.path)
                      ? "text-[#5aa6f8] font-semibold"
                      : "text-[#1e1e2d] hover:text-[#5aa6f8]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA Button - Compact */}
          <div className="pt-3 mt-3 border-t border-gray-200">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-[#1467c0] transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Free Consultation
              <FaArrowUpRightFromSquare className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;