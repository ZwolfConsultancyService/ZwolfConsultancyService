import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    date: "April 16, 2024",
    title: "Unlocking the Potential of AI in Business Success",
    image:
      "https://www.livemint.com/lm-img/img/2024/10/10/600x338/Ai_potential_mint_1728544134669_1728544141578.jpg",
  },
  {
    date: "April 16, 2024",
    title: "Strategies for Building a Successful Distributed Team",
    image:
      "https://www.tronsoftech.com/website/images/post-2.jpg",
  },
  {
    date: "April 16, 2024",
    title:
      "Empowering Citizen Developers and Accelerating Innovation",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

const LatestBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <p className="text-[#5aa6f8] font-medium mb-2">
              Latest Blog & Articles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The latest insights you need to know
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#5aa6f8] hover:bg-[#4a94e4] text-white px-5 py-3 rounded-full font-medium transition"
          >
            View All Articles <FaArrowRight />
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#f9fbff] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-gray-400 text-sm mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
