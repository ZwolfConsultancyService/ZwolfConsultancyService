import React, { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        alt="Office background with people working, laptop on table, and woman on phone in wheelchair"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/a1aa/image/e4cbfe4c-2949-45a5-7b28-274d8c60ff83.jpg"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div
        className="relative max-w-6xl px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-32"
        data-aos="fade-up"
      >
        {/* <p
          className="font-semibold text-sm md:text-lg lg:text-2xl mb-3"
          style={{ color: "#5aa6f8" }}
          data-aos="fade-down"
        >
          About Our Company
        </p> */}

        <h1
          className="text-white font-extrabold leading-tight sm:leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-6xl max-w-5xl mx-auto"
          data-aos="zoom-in"
        >
          Web Design, SEO &<br />
          Internet Marketing For <br />
          <span style={{ color: "#5aa6f8" }}>Your Business</span>
        </h1>

        <p
          className="text-black font-medium md:font-semibold text-xs sm:text-sm md:text-base max-w-3xl mx-auto mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo veritatis et quasi architecto beatae vitae dicta sunt.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-5 max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="#"
            className="inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 text-sm sm:text-base transition"
            style={{ backgroundColor: "#5aa6f8", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4892e2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5aa6f8")}
          >
            Free Consultation
            <FaArrowUpRightFromSquare className="ml-2" />
          </Link>

          {/* <a
            href="#"
            className="inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 text-sm sm:text-base transition"
            style={{ backgroundColor: "#5aa6f8", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4892e2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5aa6f8")}
          >
            View Portfolio
            <FaArrowUpRightFromSquare className="ml-2" />
          </a> */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
