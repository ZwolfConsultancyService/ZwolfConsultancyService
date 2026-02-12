// import React from "react";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { servicesData } from "./servicesData";
// import { Link } from "react-router-dom";
// import { slugify } from "../../../lib/slugify";

// const Services = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-[#f9fbff] py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
//           <div className="flex-1">
//             <p className="text-[#5aa6f8] text-sm  tracking-wide uppercase mb-3">
//               Our Services
//             </p>
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
//               What we can offer today
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mt-4 rounded-full"></div>
//           </div>
//           <Link
//             to="/services"
//             className="group hidden sm:flex items-center gap-2 text-[#5aa6f8] font-semibold hover:gap-3 transition-all duration-300"
//           >
//             View All Services
//             <FaArrowUpRightFromSquare className="group-hover:rotate-45 transition-transform duration-300" />
//           </Link>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {servicesData.map((service, index) => (
//             <Link
//               key={index}
//               to={`/${slugify(service.title, { lower: true })}`} // ✅ SEO URL
//               className="group block"
//             >
//               <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col h-full border border-gray-100 overflow-hidden relative">
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#5aa6f8]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col h-full">
//                   {/* Header */}
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5aa6f8] transition-colors duration-300 pr-2 flex-1">
//                       {service.title}
//                     </h3>
//                     <span className="flex-shrink-0 bg-gradient-to-br from-[#5aa6f8] to-[#4a8cd8] text-white p-3 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
//                       <FaArrowUpRightFromSquare className="w-4 h-4" />
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
//                     {service.description}
//                   </p>

//                   {/* Image */}
//                   <div className="relative rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>

//                   {/* Decorative border bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//                 </div>

//                 {/* Decorative element */}
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#5aa6f8]/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile View All Button */}
//         <div className="mt-12 text-center sm:hidden">
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5aa6f8] to-purple-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
//           >
//             View All Services
//             <FaArrowUpRightFromSquare />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { servicesData } from "./servicesData";
import { Link } from "react-router-dom";
import { slugify } from "../../../lib/slugify";

const Services = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Website Development & SEO Services in Delhi | Zwolf Consultancy</title>
        <meta 
          name="description" 
          content="Zwolf Consultancy offers professional Website Development and SEO services in Delhi. Get SEO-friendly websites, lead generation strategies, and top Google rankings." 
        />
        <meta 
          name="keywords" 
          content="Website Development Services Delhi, SEO Services Delhi, Digital Marketing Services, Zwolf Consultancy Services, Web Design Services, Mobile App Development Delhi" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zwolf Consultancy" />
        <link rel="canonical" href="https://zwolfconsultancy.com/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zwolfconsultancy.com/services" />
        <meta property="og:title" content="Website Development & SEO Services in Delhi | Zwolf Consultancy" />
        <meta property="og:description" content="Zwolf Consultancy offers professional Website Development and SEO services in Delhi. Get SEO-friendly websites, lead generation strategies, and top Google rankings." />
        <meta property="og:image" content="https://zwolfconsultancy.com/services-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zwolfconsultancy.com/services" />
        <meta property="twitter:title" content="Website Development & SEO Services in Delhi | Zwolf Consultancy" />
        <meta property="twitter:description" content="Zwolf Consultancy offers professional Website Development and SEO services in Delhi. Get SEO-friendly websites, lead generation strategies, and top Google rankings." />
        <meta property="twitter:image" content="https://zwolfconsultancy.com/services-og-image.jpg" />

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Development and SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "Zwolf Consultancy",
              "url": "https://zwolfconsultancy.com",
              "logo": "https://zwolfconsultancy.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/zwolfconsultancy",
                "https://www.linkedin.com/company/zwolfconsultancy",
                "https://twitter.com/zwolfconsultancy"
              ]
            },
            "areaServed": "Delhi, India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development",
                    "description": "Professional website development services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services",
                    "description": "Search Engine Optimization services for better rankings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing",
                    "description": "Comprehensive digital marketing solutions"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-white to-[#f9fbff] mb-6">
        {/* Banner */}
        <div className="relative h-[300px] sm:h-[350px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Zwolf Consultancy Services - Website Development and SEO in Delhi"
              className="w-full h-full object-cover"
            />
            {/* Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r "></div>
          </div>

          {/* Banner Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Services
              </h1>
              <div className="w-20 h-1.5 bg-white rounded-full mt-4"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 mt-11 gap-6">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
                What we can offer today
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mt-4 rounded-full"></div>
            </div>
            <Link
              to="/services"
              className="group hidden sm:flex items-center gap-2 text-[#5aa6f8] font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Services
              <FaArrowUpRightFromSquare className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <Link
                key={index}
                to={`/${slugify(service.title, { lower: true })}`}
                className="group block"
              >
                <article className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col h-full border border-gray-100 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5aa6f8]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5aa6f8] transition-colors duration-300 pr-2 flex-1">
                        {service.title}
                      </h3>
                      <span className="flex-shrink-0 bg-gradient-to-br from-[#5aa6f8] to-[#4a8cd8] text-white p-3 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                        <FaArrowUpRightFromSquare className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                      <img
                        src={service.image}
                        alt={`${service.title} - Zwolf Consultancy Service`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Decorative border bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#5aa6f8]/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-12 text-center sm:hidden">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5aa6f8] to-purple-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Services
              <FaArrowUpRightFromSquare />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;