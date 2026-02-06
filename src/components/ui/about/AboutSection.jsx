import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import AboutImg from '../../../assets/AboutImg.jpeg';

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          
          {/* Image Section */}
          <div
            className="relative flex-shrink-0 w-full lg:w-1/2 mb-10 lg:mb-0"
            data-aos="fade-right"
          >
            {/* Glow effect wrapper */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5aa6f8]/30 via-purple-500/30 to-cyan-400/30 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-2 shadow-xl">
                <img
                  alt="Team collaborating at office"
                  className="rounded-2xl w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
                  src={AboutImg}
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 lg:w-1/2" data-aos="fade-left">
            {/* Section Badge */}
            <div className="inline-block mb-4">
              <span className="text-[#5aa6f8] text-xs sm:text-sm  tracking-widest uppercase 
                             px-4 py-2 rounded-full bg-[#5aa6f8]/10 border border-[#5aa6f8]/30">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Innovating Today for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5aa6f8] to-purple-600">
                Smarter Tomorrow
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 rounded-full mb-6"></div>
            
            {/* Description Paragraphs */}
            <p className="text-gray-600 mb-5 leading-relaxed text-base">
              Zwolf Consultancy is a modern digital solutions company that provides
              end-to-end digital services for businesses, including Website Development,
              Mobile App Development, Graphic Designing, Branding, Digital Marketing, and
              SEO. We combine technology, creativity, and marketing to create digital
              experiences that help businesses grow online, generate leads, and build a
              strong brand presence.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Our focus is not just on delivering services, but on preparing our clients'
              businesses for long-term digital success. Every project is executed with a
              tailored strategy, quality-driven design, and transparent communication to
              ensure impactful output and measurable results.
            </p>

            {/* Expandable Content */}
            {expanded && (
              <div className="space-y-6 mb-6">
                {/* What Makes Us Different */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                    What Makes Us Different?
                  </h3>

                  <div className="space-y-3">
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
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#5aa6f8] to-blue-600 text-white text-xs mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                          <FaCheck />
                        </div>
                        <span className="font-medium text-gray-700 text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mission */}
                  <div className="bg-gradient-to-br from-[#5aa6f8]/5 to-purple-500/5 rounded-xl p-5 border border-[#5aa6f8]/20">
                    <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#5aa6f8] mr-2"></span>
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      To empower businesses with innovative, efficient, and future-ready
                      digital solutions that drive measurable growth.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-gradient-to-br from-purple-500/5 to-[#5aa6f8]/5 rounded-xl p-5 border border-purple-500/20">
                    <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      To become the most trusted technology partner for businesses worldwide,
                      known for creativity, quality, and results.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Read More / Less Button */}
            <button
              className="text-[#5aa6f8] font-semibold mb-6 flex items-center space-x-2 hover:text-blue-600 transition-colors group"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="text-sm">{expanded ? "Read Less" : "Read More"}</span>
              {expanded ? (
                <FaChevronUp className="group-hover:-translate-y-1 transition-transform text-sm" />
              ) : (
                <FaChevronDown className="group-hover:translate-y-1 transition-transform text-sm" />
              )}
            </button>

            {/* CTA Button */}
            <div>
              <button
                className="bg-gradient-to-r from-[#5aa6f8] to-blue-600 text-white font-semibold rounded-full px-7 py-3.5 text-sm flex items-center space-x-2 hover:from-blue-600 hover:to-[#5aa6f8] transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                type="button"
                data-aos="zoom-in"
                onClick={() => navigate("/contact")}
              >
                <span>Get Started Today</span>
                <FaArrowUpRightFromSquare className="group-hover:rotate-45 transition-transform duration-300 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutSection;