import React, { useEffect } from "react";
import { FaCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-white text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        {/* Heading */}
        <a
          className="text-[#5aa6f8] text-sm font-medium mb-2 inline-block"
          href="#"
          data-aos="fade-down"
        >
          About Company
        </a>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6"
          data-aos="fade-up"
        >
          Websites that tell your brand's story
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
              architecto beatae vitae dicta sunt explicabo, sed quia
              consequuntur magni dolores eos.
            </p>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
              {[
                "Ease of Scalability",
                "Instant Impact",
                "Expertise and Experience",
                "Time Zone Aligned",
                "Full Flexibility",
                "Proactive Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#5aa6f8] text-white text-xs">
                    <FaCheck />
                  </div>
                  <span className="font-semibold text-black text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
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
      </main>
    </div>
  );
};

export default About;
