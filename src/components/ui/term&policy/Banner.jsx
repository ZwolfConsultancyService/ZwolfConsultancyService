import React, { useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

	  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div>
	 <section className="bg-[#f5f9ff] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
        <div className="flex justify-center mb-4">
          <div className="bg-[#5aa6f8] p-4 rounded-full text-white text-3xl shadow-lg">
            <FaShieldAlt />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Zwolf Consultancy, your privacy is our priority. Learn how we collect, use,
          and safeguard your data while delivering exceptional IT services.
        </p>
      </div>
    </section>
    </div>
  )
}

export default Banner