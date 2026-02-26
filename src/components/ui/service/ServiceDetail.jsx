import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaCheck, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { servicesData } from "./servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDetailHero from "./ServiceDetailHero";
import { slugify } from "../../../lib/slugify";

const INITIAL_SHOW = 18;

const ServiceDetail = () => {
  const { slug } = useParams();
  const [showAll, setShowAll] = useState(false);

  const service = servicesData.find(
    (s) => s.slug === slug || slugify(s.title) === slug
  );

  const navigate = useNavigate();

  const shouldNotIndex =
    service &&
    service.slug !== "website-development-company" &&
    service.slug !== "seo-services-company";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
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
  const locations = service.locations || [];
  const visibleLocations = showAll ? locations : locations.slice(0, INITIAL_SHOW);
  const remaining = locations.length - INITIAL_SHOW;

  return (
    <>
      <Helmet>
        {shouldNotIndex && <meta name="robots" content="noindex, follow" />}
      </Helmet>

      <ServiceDetailHero title={service.title} />

      <div className="min-h-screen bg-gray-50">

        {/* ── Overview ── */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">
                  {service.title}
                </h1>
                <p className="text-xl text-[#5aa6f8] font-medium mb-6" data-aos="fade-up" data-aos-delay="200">
                  {service.tagline}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                  {service.detailedDescription}
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Offerings ── */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-12 text-center" data-aos="fade-up">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.offerings.map((offering, index) => {
                const OfferingIcon = offering.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-50 text-[#5aa6f8] p-2 rounded-lg">
                        <OfferingIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{offering.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm">{offering.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Process ── */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-12 text-center" data-aos="fade-up">
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 120}>
                  <div className="bg-[#5aa6f8] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-gray-700 text-sm">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Technologies ── */}
        {service.technologies && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl text-gray-900 mb-12 text-center" data-aos="fade-up">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {service.technologies.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 60}
                    >
                      <TechIcon className="w-6 h-6 text-[#5aa6f8]" />
                      <span className="font-medium text-gray-800 text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Benefits & Why Choose Us ── */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-green-100 text-green-600 p-1 rounded-full shrink-0">
                        <FaCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div data-aos="fade-left">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Why Choose Us</h2>
                <div className="space-y-4">
                  {service.whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-blue-100 text-[#5aa6f8] p-1 rounded-full shrink-0">
                        <FaCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-600">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Locations ── */}
        {locations.length > 0 && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Header */}
              <div className="text-center mb-10" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 text-[#5aa6f8] bg-blue-50 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                  <FaMapMarkerAlt className="w-3.5 h-3.5" />
                  Service Areas
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {service.title} Near You
                </h2>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">
                  Serving {locations.length}+ locations across Faridabad, Delhi NCR & surrounding areas.
                </p>
              </div>

              {/* Location Grid */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8" data-aos="fade-up" data-aos-delay="100">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {visibleLocations.map((location, index) => (
                    <Link
                      key={index}
                      to={`/${service.slug}-in-${slugify(location)}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#5aa6f8] py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-150 group"
                    >
                      <FaMapMarkerAlt className="w-3 h-3 text-gray-300 group-hover:text-[#5aa6f8] shrink-0 transition-colors" />
                      <span className="truncate">{location}</span>
                    </Link>
                  ))}
                </div>

                {/* View More / Less */}
                {locations.length > INITIAL_SHOW && (
                  <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#5aa6f8] hover:text-blue-700 transition"
                    >
                      {showAll ? (
                        <><FaChevronUp className="w-3 h-3" /> Show Less</>
                      ) : (
                        <><FaChevronDown className="w-3 h-3" /> View {remaining} More Locations</>
                      )}
                    </button>
                  </div>
                )}
              </div>

              <p className="text-center text-gray-400 text-sm mt-5">
                Can't find your area?{" "}
                <Link to="/contact" className="text-[#5aa6f8] hover:underline font-medium">
                  Contact us
                </Link>{" "}
                — we cover more than you think.
              </p>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="bg-[#5aa6f8] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's discuss how we can help your business grow with our{" "}
              {service.title.toLowerCase()} services.
            </p>
            <button
              className="bg-white text-[#5aa6f8] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              onClick={() => navigate("/contact")}
            >
              Get Free Consultation
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default ServiceDetail;