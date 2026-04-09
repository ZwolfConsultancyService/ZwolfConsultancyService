 import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaArrowLeft,
  FaCheck,
  FaMapMarkerAlt,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";
import { servicesData, locationServiceData } from "../servicesData";
import { generateFullSEOData } from "../ServiceLocationDetail/seoMetadata";
// ✅ Yeh karo — exact match
import { getFaqData } from "../ServiceLocationDetail/serviceFaqDataSeo";
import AOS from "aos";
import "aos/dist/aos.css";
import { slugify } from "../../../../lib/slugify";

const ServiceLocationDetail = () => {
  const params = useParams();

  const navigate = useNavigate();
  const previousSlug = useRef("");

  // ✅ HOOKS HAMESHA UPAR — conditonal return se pehle
  const [openFaq, setOpenFaq] = useState(null);

  let slug = params.slug || "";
  slug = slug.replace(".html", "");

  // ✅ FIX: "-in-" se sirf pehli baar split karo
  // "website-development-company-in-greater-noida" → correct split
  const inIndex = slug.indexOf("-in-");
  const isValidSlug = inIndex !== -1;
  const serviceSlug = isValidSlug ? slug.substring(0, inIndex) : "";
  const locationSlug = isValidSlug ? slug.substring(inIndex + 4) : "";

  useEffect(() => {
    if (!isValidSlug) return;

    if (previousSlug.current !== slug) {
      previousSlug.current = slug;
      setOpenFaq(null);

      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });

      window.scrollTo(0, 0);

      setTimeout(() => {
        const seoData = generateFullSEOData();
        const pageSEO = seoData[serviceSlug]?.[locationSlug] || {};
        if (pageSEO.title) {
          document.title = pageSEO.title;
        }
      }, 100);
    }
  }, [slug, serviceSlug, locationSlug, isValidSlug]);

  // ✅ Invalid URL — hooks ke BAAD return
  if (!isValidSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Invalid URL Format
          </h1>
          <p className="text-gray-600 mb-6">
            Expected: service-slug-in-location-slug.html
          </p>
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

  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-4 text-sm text-gray-400">
            Debug: slug received = "{serviceSlug}"
          </p>
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

  const locationMatch = service.locations?.find(
    (loc) => slugify(loc) === locationSlug,
  );

  if (!locationMatch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Location Not Found
          </h1>
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

  const seoData = generateFullSEOData();
  const pageSEO = seoData[serviceSlug]?.[locationSlug] || {};
  const locationData = locationServiceData.generateLocationData(
    service,
    locationMatch,
  );
  const IconComponent = service.icon;

  // ✅ FAQ data fetch
 const faqItems = getFaqData(serviceSlug, locationMatch);
console.log("FAQ TEST:", serviceSlug, locationMatch, faqItems);


  // FAQ Schema for Google rich results
  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const handleLocationClick = (area) => {
    const newUrl = `/${service.slug}-in-${slugify(area)}`;
    window.location.href = newUrl;
  };

  return (
    <>
      <Helmet key={slug}>
        <title>
          {pageSEO.title ||
            `${service.title} in ${locationMatch} | Zwolf Consultancy`}
        </title>
        <meta
          name="description"
          content={pageSEO.metaDescription || locationData.metaDescription}
        />
        <meta
          name="keywords"
          content={
            pageSEO.keywords ||
            `${service.title.toLowerCase()}, ${locationMatch}`
          }
        />
        <meta
          property="og:title"
          content={pageSEO.title || `${service.title} in ${locationMatch}`}
        />
        <meta
          property="og:description"
          content={pageSEO.metaDescription || locationData.metaDescription}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            pageSEO.canonicalUrl || `https://zwolfconsutlancy.com/${slug}.html`
          }
        />
        <meta property="og:image" content={service.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageSEO.title} />
        <meta name="twitter:description" content={pageSEO.metaDescription} />
        <meta name="twitter:image" content={service.image} />
        <link
          rel="canonical"
          href={
            pageSEO.canonicalUrl || `https://zwolfconsutlancy.com/${slug}.html`
          }
        />
        {pageSEO.schema && (
          <script type="application/ld+json">
            {JSON.stringify(pageSEO.schema)}
          </script>
        )}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content={locationMatch} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>

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
                  {pageSEO.h1 || locationData.heroTitle}
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
                          {stat.value}
                          {stat.suffix}
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
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div
                className="bg-white rounded-3xl shadow-lg p-8 mb-8"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      About Our {service.title} in {locationMatch}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.detailedDescription}
                </p>
                <div className="bg-[#5aa6f8]/10 border-l-4 border-[#5aa6f8] p-6 rounded-r-xl">
                  <p className="text-gray-700">
                    <strong className="text-[#5aa6f8]">Local Expertise:</strong>{" "}
                    Our {locationMatch}-based team brings deep understanding of
                    the local market and personalized service to every project.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div
                className="bg-white rounded-3xl shadow-lg p-8 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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

              {/* Our Services */}
              <div
                className="bg-white rounded-3xl shadow-lg p-8 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
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
                          <p className="text-sm text-gray-600">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ===== FAQ SECTION ===== */}
              {faqItems.length > 0 && (
                <div
                  className="bg-white rounded-3xl shadow-lg p-8 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {service.title} services in {locationMatch} — common
                      questions answered
                    </p>
                  </div>

                  <div className="space-y-3">
                    {faqItems.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                      >
                        <button
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                          }
                          aria-expanded={openFaq === index}
                        >
                          <span className="font-semibold text-gray-900 text-base leading-snug">
                            {faq.question}
                          </span>
                          <FaChevronDown
                            className={`text-[#5aa6f8] flex-shrink-0 w-4 h-4 transition-transform duration-300 ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openFaq === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* ===== END FAQ SECTION ===== */}

              {/* Testimonial */}
              <div
                className="bg-gradient-to-br from-[#5aa6f8] to-[#4a96e8] rounded-3xl shadow-lg p-8 text-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(locationData.testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-white" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "{locationData.testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUsers className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {locationData.testimonial.author}
                    </div>
                    <div className="text-sm text-white/80">
                      {locationData.testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-3xl shadow-lg p-8 mb-8 sticky top-4"
                data-aos="fade-left"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Get Started Today
                </h3>
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:+919520989744"
                    className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
                  >
                    <FaPhone className="text-[#5aa6f8]" />
                    <div>
                      <div className="text-sm text-gray-600">Call Us</div>
                      <div className="font-semibold text-gray-900">
                        +91 9520989744
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:zwolfconsultancyservice@gmail.com"
                    className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl hover:bg-[#5aa6f8]/20 transition-colors"
                  >
                    <FaEnvelope className="text-[#5aa6f8]" />
                    <div>
                      <div className="text-sm text-gray-600">Email Us</div>
                      <div className="font-semibold text-gray-900">
                        zwolfconsultancyservice@gmail.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-4 bg-[#5aa6f8]/10 rounded-xl">
                    <FaClock className="text-[#5aa6f8]" />
                    <div>
                      <div className="text-sm text-gray-600">Working Hours</div>
                      <div className="font-semibold text-gray-900">
                        Mon-Sat: 9AM-6PM
                      </div>
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
              <div
                className="bg-white rounded-3xl shadow-lg p-8"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  We Also Serve
                </h3>
                <div className="space-y-2">
                  {locationData.nearbyAreas.map((area, index) => (
                    <a
                      key={index}
                      href={`/${service.slug}-in-${slugify(area)}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-[#5aa6f8]/5 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLocationClick(area);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">
                          {service.title} in {area}
                        </span>
                        <FaArrowLeft className="rotate-180 text-[#5aa6f8]" />
                      </div>
                    </a>
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
              Get expert {service.title.toLowerCase()} services tailored for{" "}
              {locationMatch} businesses
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
    </>
  );
};

export default ServiceLocationDetail;