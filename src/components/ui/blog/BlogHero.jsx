import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogHero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4" data-aos="fade-up">
        <p className="text-[#5aa6f8] font-medium text-lg mb-3">
          Welcome to Our Blog
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Latest Blogs & Articles
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Stay updated with the latest industry trends, insights, and tips to
          help your business grow and thrive in the digital age.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
