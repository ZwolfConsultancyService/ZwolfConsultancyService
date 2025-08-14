import React, { useEffect, useState } from "react";
import { FaCheck, FaArrowUpRightFromSquare, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-white text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        {/* Heading */}
        <a
          className="text-[#5aa6f8] text-sm font-medium mb-2 inline-block"
          href="/about"
          data-aos="fade-down"
        >
          About Us
        </a>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6"
          data-aos="fade-up"
        >
          Innovating Today for a Smarter Tomorrow
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
          {/* Image Section */}
          <div
            className="relative flex-shrink-0 w-full max-w-lg lg:max-w-xl mb-10 lg:mb-0"
            data-aos="fade-right"
          >
            <img
              alt="Team collaborating at office"
              className="rounded-3xl w-full h-full lg:h-[600px] xl:h-[500px] object-contain lg:object-cover"
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 max-w-2xl mt-0 md:mt-4" data-aos="fade-left">
            <p className="text-gray-500 mb-6 leading-relaxed">
              We are a full-stack IT solutions company committed to turning
              ambitious ideas into impactful digital realities. From powerful
              websites and user-friendly mobile apps to data-driven marketing
              and enterprise-grade software, we help businesses grow smarter,
              faster, and stronger in the digital world.
            </p>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our approach is simple — listen, understand, and deliver. We
              don’t believe in one-size-fits-all solutions. Every project is a
              fresh canvas, and every client’s vision deserves a custom strategy
              backed by cutting-edge technology and creativity.
            </p>

            {/* Content that expands on Read More */}
            {expanded && (
              <>
                {/* What Makes Us Different */}
                <h3 className="text-xl font-bold text-black mb-4">
                  What Makes Us Different?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
                  {[
                    "360° Solutions Under One Roof – From design to deployment, we handle it all.",
                    "Result-Oriented Approach – We focus on outcomes, not just deliverables.",
                    "Future-Ready Technology – We build solutions that scale as your business grows.",
                    "Long-Term Partnerships – We’re with you long after the launch.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#5aa6f8] text-white text-xs mt-1">
                        <FaCheck />
                      </div>
                      <span className="font-medium text-gray-700 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mission */}
                <h3 className="text-xl font-bold text-black mb-2">Our Mission</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  To empower businesses with innovative, efficient, and future-ready
                  digital solutions that drive measurable growth.
                </p>

                {/* Vision */}
                <h3 className="text-xl font-bold text-black mb-2">Our Vision</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  To become the most trusted technology partner for businesses
                  worldwide, known for creativity, quality, and results.
                </p>
              </>
            )}

            {/* Read More / Less Button */}
            <button
              className="text-[#5aa6f8] font-semibold mb-8 flex items-center space-x-2"
              onClick={() => setExpanded(!expanded)}
            >
              <span>{expanded ? "Read Less" : "Read More"}</span>
              {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* CTA Button */}
            <div>
              <button
                className="bg-[#5aa6f8] text-white font-semibold rounded-full px-6 py-3 text-sm flex items-center space-x-2 hover:bg-[#4892e2] transition"
                type="button"
                data-aos="zoom-in"
              >
                <span>Free Consultation</span>
                <FaArrowUpRightFromSquare />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
