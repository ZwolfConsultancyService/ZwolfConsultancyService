// import React, { useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
// import { servicesData } from "./servicesData";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ServiceDetailHero from "./ServiceDetailHero";
// import { slugify } from "../../../lib/slugify";

// const ServiceDetail = () => {
//   const { slug } = useParams();
//   const service = servicesData.find((s) => slugify(s.title) === slug);

//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl text-gray-900 mb-4">Service Not Found</h1>
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 text-[#5aa6f8] hover:underline"
//           >
//             <FaArrowLeft /> Back to Services
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const IconComponent = service.icon;

//   return (
//     <>
//       <ServiceDetailHero title={service.title} />

//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div data-aos="fade-right">
//                 <div
//                   className="flex items-center gap-3 mb-6"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
//                     <IconComponent className="w-8 h-8" />
//                   </div>
//                   <span className="text-sm font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full">
//                     {service.category}
//                   </span>
//                 </div>
//                 <h1
//                   className="text-4xl lg:text-5xl text-gray-900 mb-4"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   {service.title}
//                 </h1>
//                 <p
//                   className="text-xl text-[#5aa6f8] font-medium mb-6"
//                   data-aos="fade-up"
//                   data-aos-delay="400"
//                 >
//                   {service.tagline}
//                 </p>
//                 <p
//                   className="text-gray-600 text-lg leading-relaxed"
//                   data-aos="fade-up"
//                   data-aos-delay="500"
//                 >
//                   {service.detailedDescription}
//                 </p>
//               </div>
//               <div data-aos="fade-left" data-aos-delay="300">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="rounded-2xl shadow-lg w-full h-96 object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Offerings Section */}
//         <div className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2
//               className="text-3xl text-gray-900 mb-12 text-center"
//               data-aos="fade-up"
//             >
//               What We Offer
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {service.offerings.map((offering, index) => {
//                 const OfferingIcon = offering.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//                     data-aos="fade-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="bg-blue-50 text-[#5aa6f8] p-2 rounded-lg">
//                         <OfferingIcon className="w-5 h-5" />
//                       </div>
//                       <h3 className="font-semibold text-gray-900">
//                         {offering.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 text-sm">
//                       {offering.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Process Section */}
//         <div className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2
//               className="text-3xl text-gray-900 mb-12 text-center"
//               data-aos="fade-up"
//             >
//               Our Process
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//               {service.process.map((step, index) => (
//                 <div
//                   key={index}
//                   className="text-center"
//                   data-aos="zoom-in"
//                   data-aos-delay={index * 150}
//                 >
//                   <div className="bg-[#5aa6f8] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg mx-auto mb-4">
//                     {index + 1}
//                   </div>
//                   <h3 className="font-medium text-gray-900 text-sm">{step}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Technologies Section */}
//         {service.technologies && (
//           <div className="py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-3xl text-gray-900 mb-12 text-center">
//                 Technologies We Use
//               </h2>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {service.technologies.map((tech, index) => {
//                   const TechIcon = tech.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3"
//                     >
//                       <TechIcon className="w-8 h-8 text-[#5aa6f8]" />
//                       <span className="font-medium text-gray-900">
//                         {tech.name}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Benefits & Why Choose Us */}
//         <div className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Benefits */}
//               <div>
//                 <h2 className="text-2xl text-gray-900 mb-8">Benefits</h2>
//                 <div className="space-y-4">
//                   {service.benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="bg-green-100 text-green-600 p-1 rounded-full">
//                         <FaCheck className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-700">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Why Choose Us */}
//               <div>
//                 <h2 className="text-2xl text-gray-900 mb-8">Why Choose Us</h2>
//                 <div className="space-y-4">
//                   {service.whyChooseUs.map((reason, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="bg-blue-100 text-[#5aa6f8] p-1 rounded-full">
//                         <FaCheck className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-700">{reason}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Location Section - Make links clickable */}
//         {service.locations && service.locations.length > 0 && (
//           <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               {/* Header */}
//               <div className="text-center mb-12" data-aos="fade-up">
//                 <div className="inline-flex items-center gap-2 bg-blue-50 text-[#5aa6f8] px-4 py-2 rounded-full mb-4">
//                   <FaMapMarkerAlt className="w-4 h-4" />
//                   <span className="text-sm font-semibold">Our Service Areas</span>
//                 </div>
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   {service.title} Near You
//                 </h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   We provide professional {service.title.toLowerCase()} services across Faridabad and nearby areas
//                 </p>
//               </div>

//               {/* Location Cards */}
//               <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12" data-aos="fade-up" data-aos-delay="200">
//                 <div className="flex flex-wrap gap-3 justify-center">
//                   {service.locations.map((location, index) => (
//                     <Link
//                       key={index}
//                     //  to={`/${slugify(service.title)}/${slugify(location)}`}
//                     to={`/${slug}-in-${slugify(location)}`}
//                       className="group relative"
//                       data-aos="zoom-in"
//                       data-aos-delay={index * 30}
//                     >
//                       <div className="bg-gradient-to-r from-[#5aa6f8]/10 to-purple-500/10 border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#5aa6f8] hover:shadow-md transition-all duration-300 cursor-pointer">
//                         <span className="text-gray-700 font-medium group-hover:text-[#5aa6f8] transition-colors">
//                           {service.title} in {location}
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Extra Info */}
//               <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="400">
//                 <p className="text-gray-600 text-sm">
//                   Looking for {service.title.toLowerCase()} services in your area?
//                   <Link to="/contact" className="text-[#5aa6f8] hover:underline ml-1 font-semibold">
//                     Contact us today
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* CTA Section */}
//         <div className="bg-[#5aa6f8] py-16">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl text-white mb-4">Ready to Get Started?</h2>
//             <p className="text-blue-100 text-lg mb-8">
//               Let's discuss how we can help your business grow with our{" "}
//               {service.title.toLowerCase()} services.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 className="bg-white text-[#5aa6f8] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
//                 onClick={() => navigate("/contact")}
//               >
//                 Get Free Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServiceDetail;

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { servicesData } from "./servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDetailHero from "./ServiceDetailHero";
import { slugify } from "../../../lib/slugify";

const ServiceDetail = () => {
  const { slug } = useParams();

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🔍 SERVICE DETAIL PAGE");
  console.log("Looking for slug:", slug);
  console.log(
    "Available slugs:",
    servicesData.map((s) => s.slug),
  );

  // Try to find by slug property first, then fallback to slugify(title)
  const service = servicesData.find(
    (s) => s.slug === slug || slugify(s.title) === slug,
  );

  console.log("Service found:", service ? service.title : "NOT FOUND");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  const navigate = useNavigate();

  // Check if this service should NOT be indexed
  // Only Website Development and SEO Services should be indexed
  const shouldNotIndex =
    service &&
    service.slug !== "website-development-company" &&
    service.slug !== "seo-services-company";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-4">
            Looking for:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#5aa6f8] hover:underline"
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <>
      {/* Add noindex meta tag for all services EXCEPT Website Development and SEO Services */}
      <Helmet>
        {shouldNotIndex && <meta name="robots" content="noindex, follow" />}
      </Helmet>

      <ServiceDetailHero title={service.title} />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div
                  className="flex items-center gap-3 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h1
                  className="text-4xl lg:text-5xl text-gray-900 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {service.title}
                </h1>
                <p
                  className="text-xl text-[#5aa6f8] font-medium mb-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {service.tagline}
                </p>
                <p
                  className="text-gray-600 text-lg leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {service.detailedDescription}
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Offerings Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl text-gray-900 mb-12 text-center"
              data-aos="fade-up"
            >
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.offerings.map((offering, index) => {
                const OfferingIcon = offering.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-50 text-[#5aa6f8] p-2 rounded-lg">
                        <OfferingIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {offering.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {offering.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl text-gray-900 mb-12 text-center"
              data-aos="fade-up"
            >
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className="bg-[#5aa6f8] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        {service.technologies && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl text-gray-900 mb-12 text-center">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {service.technologies.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3"
                    >
                      <TechIcon className="w-8 h-8 text-[#5aa6f8]" />
                      <span className="font-medium text-gray-900">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Benefits & Why Choose Us */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-8">Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full">
                        <FaCheck className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-8">Why Choose Us</h2>
                <div className="space-y-4">
                  {service.whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-blue-100 text-[#5aa6f8] p-1 rounded-full">
                        <FaCheck className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section - Make links clickable */}
        {service.locations && service.locations.length > 0 && (
          <div className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#5aa6f8] px-4 py-2 rounded-full mb-4">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Our Service Areas
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {service.title} Near You
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We provide professional {service.title.toLowerCase()} services
                  across Faridabad and nearby areas
                </p>
              </div>

              {/* Location Cards */}
              <div
                className="bg-white rounded-3xl shadow-lg p-8 sm:p-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  {service.locations.map((location, index) => (
                    <Link
                      key={index}
                      to={`/${service.slug}-in-${slugify(location)}`}
                      className="group relative"
                      data-aos="zoom-in"
                      data-aos-delay={index * 30}
                    >
                      <div className="bg-gradient-to-r from-[#5aa6f8]/10 to-purple-500/10 border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#5aa6f8] hover:shadow-md transition-all duration-300 cursor-pointer">
                        <span className="text-gray-700 font-medium group-hover:text-[#5aa6f8] transition-colors">
                          {service.title} in {location}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Extra Info */}
              <div
                className="mt-8 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p className="text-gray-600 text-sm">
                  Looking for {service.title.toLowerCase()} services in your
                  area?
                  <Link
                    to="/contact"
                    className="text-[#5aa6f8] hover:underline ml-1 font-semibold"
                  >
                    Contact us today
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-[#5aa6f8] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's discuss how we can help your business grow with our{" "}
              {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-[#5aa6f8] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                onClick={() => navigate("/contact")}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
