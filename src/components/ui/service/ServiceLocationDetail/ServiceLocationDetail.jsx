// // import React, { useEffect } from "react";
// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import {
// //   FaArrowLeft,
// //   FaCheck,
// //   FaMapMarkerAlt,
// //   FaStar,
// //   FaPhone,
// //   FaEnvelope,
// //   FaClock,
// //   FaUsers,
// //   FaAward,
// //   FaChartLine
// // } from "react-icons/fa";
// // import { servicesData, locationServiceData } from "../../../ui/service/servicesData";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { slugify } from "../../../../lib/slugify";

// // const ServiceLocationDetail = () => {
// //   const { serviceSlug, locationSlug } = useParams();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       once: true,
// //       easing: "ease-out-cubic",
// //     });
// //     window.scrollTo(0, 0);
// //   }, [serviceSlug, locationSlug]);

// //   // Find the service - flexible matching
// //   const service = servicesData.find((s) => {
// //     const titleSlug = slugify(s.title);
    
// //     // Direct match
// //     if (titleSlug === serviceSlug) return true;
    
// //     // Check if serviceSlug contains the title slug (for cases like "website-development-company" vs "website-development")
// //     if (serviceSlug.includes(titleSlug)) return true;
    
// //     // Check if title slug contains service slug
// //     if (titleSlug.includes(serviceSlug)) return true;
    
// //     // Check if slug property exists
// //     if (s.slug && s.slug === serviceSlug) return true;
    
// //     return false;
// //   });
  
// //   if (!service) {
// //     console.log("Looking for service:", serviceSlug);
// //     console.log("Available services:", servicesData.map(s => ({
// //       title: s.title,
// //       slug: slugify(s.title),
// //       customSlug: s.slug
// //     })));
    
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center max-w-md mx-auto p-8">
// //           <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
// //             <FaArrowLeft className="text-3xl" />
// //           </div>
// //           <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
// //           <p className="text-gray-600 mb-2">We couldn't find the service you're looking for.</p>
// //           <p className="text-sm text-gray-500 mb-6">URL Slug: <code className="bg-gray-100 px-2 py-1 rounded">{serviceSlug}</code></p>
// //           <Link
// //             to="/services"
// //             className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
// //           >
// //             <FaArrowLeft /> Back to Services
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Find the location from service's location array
// //   const location = service.locations?.find(
// //     (loc) => slugify(loc) === locationSlug
// //   );

// //   if (!location) {
// //     console.log("Looking for location:", locationSlug);
// //     console.log("Available locations:", service.locations?.map(loc => ({
// //       name: loc,
// //       slug: slugify(loc)
// //     })));
    
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center max-w-md mx-auto p-8">
// //           <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
// //             <FaMapMarkerAlt className="text-3xl" />
// //           </div>
// //           <h1 className="text-3xl font-bold text-gray-900 mb-4">Location Not Found</h1>
// //           <p className="text-gray-600 mb-2">We don't serve this location yet.</p>
// //           <p className="text-sm text-gray-500 mb-6">Location Slug: <code className="bg-gray-100 px-2 py-1 rounded">{locationSlug}</code></p>
// //           <Link
// //             to={`/services/${serviceSlug}`}
// //             className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
// //           >
// //             <FaArrowLeft /> Back to {service.title}
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Generate location-specific data
// //   const locationData = locationServiceData.generateLocationData(service, location);
// //   const IconComponent = service.icon;

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Hero Section */}
// //       <div className="relative bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-20 overflow-hidden">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
// //         </div>
        
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Breadcrumb */}
// //           <div className="mb-8" data-aos="fade-down">
// //             <div className="flex items-center gap-2 text-white/80 text-sm">
// //               <Link to="/" className="hover:text-white">Home</Link>
// //               <span>/</span>
// //               <Link to="/services" className="hover:text-white">Services</Link>
// //               <span>/</span>
// //               <Link to={`/services/${slugify(service.title)}`} className="hover:text-white">{service.title}</Link>
// //               <span>/</span>
// //               <span className="text-white font-medium">{location}</span>
// //             </div>
// //           </div>

// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div data-aos="fade-right">
// //               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
// //                 <FaMapMarkerAlt className="text-white" />
// //                 <span className="text-white font-medium">{location}</span>
// //               </div>
              
// //               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
// //                 {locationData.heroTitle}
// //               </h1>
              
// //               <p className="text-xl text-white/90 mb-8">
// //                 {locationData.heroDescription}
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4">
// //                 <button
// //                   onClick={() => navigate("/contact")}
// //                   className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
// //                 >
// //                   Get Free Quote
// //                 </button>
// //                 <a
// //                   href="tel:+919999999999"
// //                   className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
// //                 >
// //                   <FaPhone /> Call Now
// //                 </a>
// //               </div>
// //             </div>

// //             <div data-aos="fade-left" data-aos-delay="200">
// //               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
// //                 <div className="grid grid-cols-2 gap-6">
// //                   {locationData.localStats.map((stat, index) => (
// //                     <div key={index} className="text-center">
// //                       <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
// //                         {stat.value}{stat.suffix}
// //                       </div>
// //                       <div className="text-white/80 text-sm">{stat.label}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// //         <div className="grid lg:grid-cols-3 gap-12">
// //           {/* Left Column - Main Content */}
// //           <div className="lg:col-span-2">
// //             {/* About Section */}
// //             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up">
// //               <div className="flex items-center gap-3 mb-6">
// //                 <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
// //                   <IconComponent className="w-8 h-8" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-900">
// //                     About Our {service.title} in {location}
// //                   </h2>
// //                   <span className="text-sm text-gray-500">{service.category}</span>
// //                 </div>
// //               </div>
              
// //               <p className="text-gray-600 leading-relaxed mb-6">
// //                 {service.detailedDescription}
// //               </p>

// //               <div className="bg-[#5aa6f8]/10 border-l-4 border-[#5aa6f8] p-6 rounded-r-xl">
// //                 <p className="text-gray-700">
// //                   <strong className="text-[#5aa6f8]">Local Expertise:</strong> Our {location}-based team brings deep understanding of the local market and personalized service to every project.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Why Choose Us Local */}
// //             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6">
// //                 Why Choose Us in {location}?
// //               </h2>
// //               <div className="space-y-4">
// //                 {locationData.whyChooseLocal.map((reason, index) => (
// //                   <div key={index} className="flex items-start gap-3">
// //                     <div className="bg-[#5aa6f8]/20 text-[#5aa6f8] p-1.5 rounded-full mt-1">
// //                       <FaCheck className="w-4 h-4" />
// //                     </div>
// //                     <span className="text-gray-700">{reason}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* What We Offer */}
// //             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="200">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6">
// //                 Our Services in {location}
// //               </h2>
// //               <div className="grid sm:grid-cols-2 gap-4">
// //                 {service.offerings.slice(0, 6).map((offering, index) => {
// //                   const OfferingIcon = offering.icon;
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#5aa6f8]/5 transition-colors"
// //                     >
// //                       <div className="bg-white text-[#5aa6f8] p-2 rounded-lg shadow-sm border border-[#5aa6f8]/20">
// //                         <OfferingIcon className="w-5 h-5" />
// //                       </div>
// //                       <div>
// //                         <h3 className="font-semibold text-gray-900 mb-1">
// //                           {offering.title}
// //                         </h3>
// //                         <p className="text-sm text-gray-600">{offering.description}</p>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Testimonial */}
// //             <div className="bg-gradient-to-br from-[#5aa6f8] to-[#4a96e8] rounded-3xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="300">
// //               <div className="flex gap-1 mb-4">
// //                 {[...Array(locationData.testimonial.rating)].map((_, i) => (
// //                   <FaStar key={i} className="text-white" />
// //                 ))}
// //               </div>
// //               <p className="text-lg mb-6 italic">"{locationData.testimonial.text}"</p>
// //               <div className="flex items-center gap-3">
// //                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
// //                   <FaUsers className="text-white" />
// //                 </div>
// //                 <div>
// //                   <div className="font-semibold">{locationData.testimonial.author}</div>
// //                   <div className="text-sm text-white/80">{locationData.testimonial.location}</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Column - Sidebar */}
// //           <div className="lg:col-span-1">
// //             {/* Contact Card */}
// //             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 sticky top-4" data-aos="fade-left">
// //               <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
// //               <div className="space-y-4 mb-6">
// //                 <a
// //                   href="tel:+919999999999"
// //                   className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
// //                 >
// //                   <FaPhone className="text-[#5aa6f8]" />
// //                   <div>
// //                     <div className="text-sm text-gray-600">Call Us</div>
// //                     <div className="font-semibold text-gray-900">+91 99999 99999</div>
// //                   </div>
// //                 </a>
// // <a
                
// //                   href="mailto:info@example.com"
// //                   className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
// //                 >
// //                   <FaEnvelope className="text-[#5aa6f8]" />
// //                   <div>
// //                     <div className="text-sm text-gray-600">Email Us</div>
// //                     <div className="font-semibold text-gray-900">info@example.com</div>
// //                   </div>
// //                 </a>

// //                 <div className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl">
// //                   <FaClock className="text-[#5aa6f8]" />
// //                   <div>
// //                     <div className="text-sm text-gray-600">Working Hours</div>
// //                     <div className="font-semibold text-gray-900">Mon-Sat: 9AM-6PM</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={() => navigate("/contact")}
// //                 className="w-full bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
// //               >
// //                 Request Free Consultation
// //               </button>
// //             </div>

// //             {/* Nearby Areas */}
// //             <div className="bg-white rounded-3xl shadow-lg p-8" data-aos="fade-left" data-aos-delay="200">
// //               <h3 className="text-xl font-bold text-gray-900 mb-6">
// //                 We Also Serve
// //               </h3>
// //               <div className="space-y-2">
// //                 {locationData.nearbyAreas.map((area, index) => (
// //                   <Link
// //   key={index}
// //   to={`/${service.slug || slugify(service.title)}-in-${slugify(area)}.html`} // Use service.slug
// //   className="block p-3 bg-gray-50 rounded-lg hover:bg-[#5aa6f8]/5 transition-colors"
// // >
// //   <div className="flex items-center justify-between">
// //     <span className="text-gray-700">{service.title} in {area}</span>
// //     <FaArrowLeft className="rotate-180 text-[#5aa6f8]" />
// //   </div>
// // </Link>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <div className="bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-16">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl font-bold text-white mb-4">
// //             Ready to Transform Your Business in {location}?
// //           </h2>
// //           <p className="text-white/90 text-lg mb-8">
// //             Get expert {service.title.toLowerCase()} services tailored for {location} businesses
// //           </p>
// //           <button
// //             onClick={() => navigate("/contact")}
// //             className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
// //           >
// //             Start Your Project Today
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceLocationDetail;





// import React, { useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   FaArrowLeft,
//   FaCheck,
//   FaMapMarkerAlt,
//   FaStar,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaUsers,
// } from "react-icons/fa";
// import { servicesData, locationServiceData } from "../../../ui/service/servicesData";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { slugify } from "../../../../lib/slugify";

// const ServiceLocationDetail = () => {
//   const params = useParams();
//   const navigate = useNavigate();
  
//   // Extract and clean slugs
//   const serviceSlug = params.serviceSlug;
//   let locationSlug = params.locationSlug;
  
//   // Remove .html extension if present
//   if (locationSlug?.endsWith('.html')) {
//     locationSlug = locationSlug.replace('.html', '');
//   }
  
 
// console.log("RAW params:", params);
// console.log("Service Slug:", serviceSlug);
// console.log("Location Slug:", locationSlug);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//     window.scrollTo(0, 0);
//   }, [serviceSlug, locationSlug]);

//   // Find the service using slug property
//   const service = servicesData.find((s) => s.slug === serviceSlug);
  
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//             <FaArrowLeft className="text-3xl" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
//           <p className="text-gray-600 mb-2">We couldn't find the service you're looking for.</p>
//           <p className="text-sm text-gray-500 mb-2">
//             Looking for: <code className="bg-gray-100 px-2 py-1 rounded">{serviceSlug}</code>
//           </p>
//           <p className="text-xs text-gray-400 mb-6">
//             Available: {servicesData.map(s => s.slug).join(', ')}
//           </p>
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
//           >
//             <FaArrowLeft /> Back to Services
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Find the location from service's location array
//   const location = service.locations?.find(
//     (loc) => slugify(loc) === locationSlug
//   );

//   if (!location) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//             <FaMapMarkerAlt className="text-3xl" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Location Not Found</h1>
//           <p className="text-gray-600 mb-2">We don't serve this location yet.</p>
//           <p className="text-sm text-gray-500 mb-2">
//             Looking for: <code className="bg-gray-100 px-2 py-1 rounded">{locationSlug}</code>
//           </p>
//           <p className="text-xs text-gray-400 mb-6">
//             Available: {service.locations?.map(loc => slugify(loc)).join(', ')}
//           </p>
//           <Link
//             to={`/services/${service.slug || slugify(service.title)}`}
//             className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
//           >
//             <FaArrowLeft /> Back to {service.title}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Generate location-specific data
//   const locationData = locationServiceData.generateLocationData(service, location);
//   const IconComponent = service.icon;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Breadcrumb */}
//           <div className="mb-8" data-aos="fade-down">
//             <div className="flex items-center gap-2 text-white/80 text-sm">
//               <Link to="/" className="hover:text-white">Home</Link>
//               <span>/</span>
//               <Link to="/services" className="hover:text-white">Services</Link>
//               <span>/</span>
//               <Link to={`/services/${service.slug || slugify(service.title)}`} className="hover:text-white">{service.title}</Link>
//               <span>/</span>
//               <span className="text-white font-medium">{location}</span>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div data-aos="fade-right">
//               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <FaMapMarkerAlt className="text-white" />
//                 <span className="text-white font-medium">{location}</span>
//               </div>
              
//               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
//                 {locationData.heroTitle}
//               </h1>
              
//               <p className="text-xl text-white/90 mb-8">
//                 {locationData.heroDescription}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => navigate("/contact")}
//                   className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
//                 >
//                   Get Free Quote
//                 </button>
//                 <a
//                   href="tel:+919999999999"
//                   className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <FaPhone /> Call Now
//                 </a>
//               </div>
//             </div>

//             <div data-aos="fade-left" data-aos-delay="200">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <div className="grid grid-cols-2 gap-6">
//                   {locationData.localStats.map((stat, index) => (
//                     <div key={index} className="text-center">
//                       <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
//                         {stat.value}{stat.suffix}
//                       </div>
//                       <div className="text-white/80 text-sm">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Left Column - Main Content */}
//           <div className="lg:col-span-2">
//             {/* About Section */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
//                   <IconComponent className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     About Our {service.title} in {location}
//                   </h2>
//                   <span className="text-sm text-gray-500">{service.category}</span>
//                 </div>
//               </div>
              
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 {service.detailedDescription}
//               </p>

//               <div className="bg-[#5aa6f8]/10 border-l-4 border-[#5aa6f8] p-6 rounded-r-xl">
//                 <p className="text-gray-700">
//                   <strong className="text-[#5aa6f8]">Local Expertise:</strong> Our {location}-based team brings deep understanding of the local market and personalized service to every project.
//                 </p>
//               </div>
//             </div>

//             {/* Why Choose Us Local */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Why Choose Us in {location}?
//               </h2>
//               <div className="space-y-4">
//                 {locationData.whyChooseLocal.map((reason, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <div className="bg-[#5aa6f8]/20 text-[#5aa6f8] p-1.5 rounded-full mt-1">
//                       <FaCheck className="w-4 h-4" />
//                     </div>
//                     <span className="text-gray-700">{reason}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* What We Offer */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="200">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Our Services in {location}
//               </h2>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {service.offerings.slice(0, 6).map((offering, index) => {
//                   const OfferingIcon = offering.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#5aa6f8]/5 transition-colors"
//                     >
//                       <div className="bg-white text-[#5aa6f8] p-2 rounded-lg shadow-sm border border-[#5aa6f8]/20">
//                         <OfferingIcon className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">
//                           {offering.title}
//                         </h3>
//                         <p className="text-sm text-gray-600">{offering.description}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Testimonial */}
//             <div className="bg-gradient-to-br from-[#5aa6f8] to-[#4a96e8] rounded-3xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="300">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(locationData.testimonial.rating)].map((_, i) => (
//                   <FaStar key={i} className="text-white" />
//                 ))}
//               </div>
//               <p className="text-lg mb-6 italic">"{locationData.testimonial.text}"</p>
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                   <FaUsers className="text-white" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">{locationData.testimonial.author}</div>
//                   <div className="text-sm text-white/80">{locationData.testimonial.location}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Contact Card */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 sticky top-4" data-aos="fade-left">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
//               <div className="space-y-4 mb-6">
//                 <a
//                   href="tel:+919999999999"
//                   className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
//                 >
//                   <FaPhone className="text-[#5aa6f8]" />
//                   <div>
//                     <div className="text-sm text-gray-600">Call Us</div>
//                     <div className="font-semibold text-gray-900">+91 99999 99999</div>
//                   </div>
//                 </a>

//                 <a
//                   href="mailto:info@example.com"
//                   className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
//                 >
//                   <FaEnvelope className="text-[#5aa6f8]" />
//                   <div>
//                     <div className="text-sm text-gray-600">Email Us</div>
//                     <div className="font-semibold text-gray-900">info@example.com</div>
//                   </div>
//                 </a>

//                 <div className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl">
//                   <FaClock className="text-[#5aa6f8]" />
//                   <div>
//                     <div className="text-sm text-gray-600">Working Hours</div>
//                     <div className="font-semibold text-gray-900">Mon-Sat: 9AM-6PM</div>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate("/contact")}
//                 className="w-full bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
//               >
//                 Request Free Consultation
//               </button>
//             </div>

//             {/* Nearby Areas */}
//             <div className="bg-white rounded-3xl shadow-lg p-8" data-aos="fade-left" data-aos-delay="200">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">
//                 We Also Serve
//               </h3>
//               <div className="space-y-2">
//                 {locationData.nearbyAreas.map((area, index) => (
//                   <Link
//                     key={index}
//                     to={`/${service.slug || slugify(service.title)}-in-${slugify(area)}.html`}
//                     className="block p-3 bg-gray-50 rounded-lg hover:bg-[#5aa6f8]/5 transition-colors"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-700">{service.title} in {area}</span>
//                       <FaArrowLeft className="rotate-180 text-[#5aa6f8]" />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to Transform Your Business in {location}?
//           </h2>
//           <p className="text-white/90 text-lg mb-8">
//             Get expert {service.title.toLowerCase()} services tailored for {location} businesses
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
//           >
//             Start Your Project Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceLocationDetail;

import React, { useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaMapMarkerAlt,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { servicesData, locationServiceData } from "../servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { slugify } from "../../../../lib/slugify";

const ServiceLocationDetail = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the slug
  let slug = params.slug || "";
  
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🔍 SERVICE LOCATION DETAIL");
  console.log("Full URL:", location.pathname);
  console.log("Raw Slug:", slug);
  
  // Remove .html extension
  slug = slug.replace('.html', '');
  console.log("Clean Slug:", slug);
  
  // Split by "-in-"
  const parts = slug.split('-in-');
  
  if (parts.length !== 2) {
    console.log("❌ Invalid format");
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid URL Format</h1>
          <p className="text-gray-600 mb-6">Expected: service-slug-in-location-slug.html</p>
          <p className="text-sm text-gray-500 mb-6">Got: {location.pathname}</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }
  
  const serviceSlug = parts[0];
  const locationSlug = parts[1];
  
  console.log("✅ Service Slug:", serviceSlug);
  console.log("✅ Location Slug:", locationSlug);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the service
  console.log("\n🔍 Searching for service...");
  console.log("Available services:");
  servicesData.forEach(s => console.log(`  - ${s.slug}`));
  
  const service = servicesData.find((s) => s.slug === serviceSlug);
  
  if (!service) {
    console.log("❌ Service NOT FOUND");
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <FaArrowLeft className="text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6 text-left text-sm">
            <div className="mb-2"><strong>URL:</strong> {location.pathname}</div>
            <div className="mb-2"><strong>Looking for:</strong> {serviceSlug}</div>
            <div className="mb-2"><strong>Available services:</strong></div>
            <div className="ml-4">
              {servicesData.map(s => (
                <div key={s.id} className="text-xs">• {s.slug}</div>
              ))}
            </div>
          </div>
          
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  console.log("✅ Service found:", service.title);

  // Find the location
  console.log("\n🔍 Searching for location...");
  console.log("Available locations:");
  service.locations?.forEach(loc => console.log(`  - ${slugify(loc)} (${loc})`));
  
  const locationMatch = service.locations?.find((loc) => {
    return slugify(loc) === locationSlug;
  });

  if (!locationMatch) {
    console.log("❌ Location NOT FOUND");
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <div className="bg-red-50 text-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6 text-left text-sm">
            <div className="mb-2"><strong>Service:</strong> {service.title}</div>
            <div className="mb-2"><strong>Looking for:</strong> {locationSlug}</div>
            <div className="mb-2"><strong>Available locations:</strong></div>
            <div className="ml-4">
              {service.locations?.map((loc, idx) => (
                <div key={idx} className="text-xs">• {slugify(loc)} → {loc}</div>
              ))}
            </div>
          </div>
          
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full hover:bg-[#4a96e8] transition-all"
          >
            <FaArrowLeft /> Back to {service.title}
          </Link>
        </div>
      </div>
    );
  }

  console.log("✅ Location found:", locationMatch);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  // Generate location-specific data
  const locationData = locationServiceData.generateLocationData(service, locationMatch);
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <FaMapMarkerAlt className="text-white" />
                <span className="text-white font-medium">{locationMatch}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {locationData.heroTitle}
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                {locationData.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Get Free Quote
                </button>
                <a
                  href="tel:+919520989744"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {locationData.localStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    About Our {service.title} in {locationMatch}
                  </h2>
                  <span className="text-sm text-gray-500">{service.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.detailedDescription}
              </p>

              <div className="bg-[#5aa6f8]/10 border-l-4 border-[#5aa6f8] p-6 rounded-r-xl">
                <p className="text-gray-700">
                  <strong className="text-[#5aa6f8]">Local Expertise:</strong> Our {locationMatch}-based team brings deep understanding of the local market and personalized service to every project.
                </p>
              </div>
            </div>

            {/* Why Choose Us Local */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us in {locationMatch}?
              </h2>
              <div className="space-y-4">
                {locationData.whyChooseLocal.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#5aa6f8]/20 text-[#5aa6f8] p-1.5 rounded-full mt-1">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Services in {locationMatch}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.offerings.slice(0, 6).map((offering, index) => {
                  const OfferingIcon = offering.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#5aa6f8]/5 transition-colors"
                    >
                      <div className="bg-white text-[#5aa6f8] p-2 rounded-lg shadow-sm border border-[#5aa6f8]/20">
                        <OfferingIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {offering.title}
                        </h3>
                        <p className="text-sm text-gray-600">{offering.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#5aa6f8] to-[#4a96e8] rounded-3xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="300">
              <div className="flex gap-1 mb-4">
                {[...Array(locationData.testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-white" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{locationData.testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUsers className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">{locationData.testimonial.author}</div>
                  <div className="text-sm text-white/80">{locationData.testimonial.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 sticky top-4" data-aos="fade-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <div className="space-y-4 mb-6">
                
                <a href="tel:+919520989744"
                  className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
                >
                  <FaPhone className="text-[#5aa6f8]" />
                  <div>
                    <div className="text-sm text-gray-600">Call Us</div>
                    <div className="font-semibold text-gray-900">+91 9520989744</div>
                  </div>
                </a>

                <a
                  href="zwolfconsultancy@gmail.com"
                  className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
                >
                  <FaEnvelope className="text-[#5aa6f8]" />
                  <div>
                    <div className="text-sm text-gray-600">Email Us</div>
                    <div className="font-semibold text-gray-900">zwolfconsultancy@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl">
                  <FaClock className="text-[#5aa6f8]" />
                  <div>
                    <div className="text-sm text-gray-600">Working Hours</div>
                    <div className="font-semibold text-gray-900">Mon-Sat: 9AM-6PM</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="w-full bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request Free Consultation
              </button>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-3xl shadow-lg p-8" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                We Also Serve
              </h3>
              <div className="space-y-2">
                {locationData.nearbyAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={`/${service.slug}-in-${slugify(area)}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-[#5aa6f8]/5 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">{service.title} in {area}</span>
                      <FaArrowLeft className="rotate-180 text-[#5aa6f8]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#5aa6f8] to-[#4a96e8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business in {locationMatch}?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get expert {service.title.toLowerCase()} services tailored for {locationMatch} businesses
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#5aa6f8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocationDetail;