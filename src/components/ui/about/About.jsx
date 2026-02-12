import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaCheck,
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import AboutImg from '../../../assets/AboutImg.jpeg'

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Zwolf Consultancy | Website & SEO Company in Delhi</title>
        <meta 
          name="description" 
          content="Learn more about Zwolf Consultancy, a leading Website Development and SEO Company in Delhi helping businesses grow through high-performance websites and strategic SEO." 
        />
        <meta 
          name="keywords" 
          content="About Zwolf Consultancy, SEO Company in Delhi, Website Development Company in Delhi, Digital Agency Delhi, Web Design Company Delhi" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zwolf Consultancy" />
        <link rel="canonical" href="https://zwolfconsultancy.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zwolfconsultancy.com/about" />
        <meta property="og:title" content="About Zwolf Consultancy | Website & SEO Company in Delhi" />
        <meta property="og:description" content="Learn more about Zwolf Consultancy, a leading Website Development and SEO Company in Delhi helping businesses grow through high-performance websites and strategic SEO." />
        <meta property="og:image" content="https://zwolfconsultancy.com/about-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zwolfconsultancy.com/about" />
        <meta property="twitter:title" content="About Zwolf Consultancy | Website & SEO Company in Delhi" />
        <meta property="twitter:description" content="Learn more about Zwolf Consultancy, a leading Website Development and SEO Company in Delhi helping businesses grow through high-performance websites and strategic SEO." />
        <meta property="twitter:image" content="https://zwolfconsultancy.com/about-og-image.jpg" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Zwolf Consultancy",
            "description": "Learn more about Zwolf Consultancy, a leading Website Development and SEO Company in Delhi",
            "url": "https://zwolfconsultancy.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zwolf Consultancy",
              "url": "https://zwolfconsultancy.com",
              "logo": "https://zwolfconsultancy.com/logo.png",
              "description": "Leading Website Development and SEO Company in Delhi",
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
            }
          })}
        </script>
      </Helmet>

      <div className="bg-white text-black">
        {/* Banner Section with Background Image */}
        <div className="relative h-[300px] sm:h-[350px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="About Zwolf Consultancy - Team collaboration"
              className="w-full h-full object-cover"
            />
            {/* Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r "></div>
          </div>

          {/* Banner Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                About Us
              </h1>
              <div className="w-20 h-1.5 bg-white rounded-full mt-4"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
            {/* Image Section */}
            <div
              className="relative flex-shrink-0 w-full max-w-lg lg:max-w-xl mb-10 lg:mb-0"
              data-aos="fade-right"
            >
              {/* Glow effect wrapper */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5aa6f8]/30 via-purple-500/30 to-cyan-400/30 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-2 shadow-xl">
                  <img
                    alt="Zwolf Consultancy team - Website development and SEO experts in Delhi"
                    className="rounded-2xl w-full h-full lg:h-[600px] xl:h-[500px] object-cover"
                    src={AboutImg}
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1 max-w-2xl mt-0 md:mt-4" data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Innovating Today for a Smarter Tomorrow
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Zwolf Consultancy is a modern digital solutions company that provides
                end-to-end digital services for businesses, including Website Development,
                Mobile App Development, Graphic Designing, Branding, Digital Marketing, and
                SEO. We combine technology, creativity, and marketing to create digital
                experiences that help businesses grow online, generate leads, and build a
                strong brand presence.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our focus is not just on delivering services, but on preparing our clients'
                businesses for long-term digital success. Every project is executed with a
                tailored strategy, quality-driven design, and transparent communication to
                ensure impactful output and measurable results. In today's competitive
                digital world, Zwolf Consultancy helps brands stand out through smarter
                strategies, powerful design, and scalable technology.
              </p>

              {/* Content that expands on Read More */}
              {expanded && (
                <>
                  {/* What Makes Us Different */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What Makes Us Different?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-8">
                    {[
                      "360° Solutions Under One Roof – From design to deployment, we handle it all.",
                      "Result-Oriented Approach – We focus on outcomes, not just deliverables.",
                      "Future-Ready Technology – We build solutions that scale as your business grows.",
                      "Long-Term Partnerships – We're with you long after the launch.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 group"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#5aa6f8] to-blue-600 text-white text-xs mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <FaCheck />
                        </div>
                        <span className="font-medium text-gray-700 text-base leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mission */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    To empower businesses with innovative, efficient, and future-ready
                    digital solutions that drive measurable growth.
                  </p>

                  {/* Vision */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    To become the most trusted technology partner for businesses worldwide,
                    known for creativity, quality, and results.
                  </p>
                </>
              )}

              {/* Read More / Less Button */}
              <button
                className="text-[#5aa6f8] font-semibold mb-8 flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                onClick={() => setExpanded(!expanded)}
              >
                <span>{expanded ? "Read Less" : "Read More"}</span>
                {expanded ? (
                  <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                )}
              </button>

              {/* CTA Button */}
              <div>
                <button
                  className="bg-gradient-to-r from-[#5aa6f8] to-blue-600 text-white font-semibold rounded-full px-8 py-4 text-sm flex items-center space-x-2 hover:from-blue-600 hover:to-[#5aa6f8] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  type="button"
                  data-aos="zoom-in"
                  onClick={() => navigate("/contact")}
                >
                  <span>Get Started Today</span>
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;