import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogHero from "./BlogHero";

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
    image: "https://www.tronsoftech.com/website/images/post-2.jpg",
  },
  {
    date: "April 16, 2024",
    title: "Empowering Citizen Developers and Accelerating Innovation",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    date: "April 16, 2024",
    title: "Top Cybersecurity Trends to Watch in 2024",
    image:
      "https://cognissolutions.com/wp-content/uploads/2024/09/cyber-security-concept-digital-art_23-2151637760.jpg",
  },
  {
    date: "April 16, 2024",
    title: "The Role of Cloud Computing in Modern Businesses",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
];


const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Function to create URL slug from title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleBlogClick = (blog) => {
    const slug = createSlug(blog.title);
    sessionStorage.setItem('selectedBlog', JSON.stringify(blog));
    window.location.href = `/blog/${slug}`;
  };

  return (
    <>
      <BlogHero />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-[#f9fbff] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onClick={() => handleBlogClick(blog)}
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
    </>
  );
};

export default Blog;