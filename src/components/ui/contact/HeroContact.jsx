import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroContact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative h-[490px] md:h-[350px] lg:h-[390px] flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <h1
        className="relative text-white text-3xl sm:text-4xl lg:text-5xl  text-center"
        data-aos="zoom-in"
      >
        Get in Touch
      </h1>
    </section>
  );
};

export default HeroContact;
