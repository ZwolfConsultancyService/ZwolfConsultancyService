import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://zwolfconsultancyservice-backend.onrender.com/api/blogs/fetch';
  const LATEST_BLOGS_COUNT = 3;

  const fetchLatestBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(API_BASE_URL, {
        timeout: 8000,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('API Response:', response.data);

      let blogsData = response.data;

      // Handle different response formats
      if (blogsData.blogs && Array.isArray(blogsData.blogs)) {
        blogsData = blogsData.blogs;
      } else if (blogsData.data && Array.isArray(blogsData.data)) {
        blogsData = blogsData.data;
      } else if (!Array.isArray(blogsData)) {
        console.error('Unexpected response format:', blogsData);
        throw new Error('API response is not in expected format');
      }

      const latestBlogs = blogsData.slice(0, LATEST_BLOGS_COUNT);
      setBlogs(latestBlogs);
      
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      offset: 50
    });
    
    fetchLatestBlogs();
  }, []);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleBlogClick = async (blog) => {
    try {
      const slug = createSlug(blog.title);
      sessionStorage.setItem('selectedBlog', JSON.stringify(blog));
      window.location.href = `/blog/${slug}`;
    } catch (error) {
      console.error('Error navigating to blog:', error);
    }
  };

  // Helper function to get blog image URL
  const getBlogImage = (blog) => {
    // Check if images array exists and has items
    if (blog.images && Array.isArray(blog.images) && blog.images.length > 0) {
      return blog.images[0].url;
    }
    // Fallback to blog.image if it exists
    if (blog.image) {
      return blog.image;
    }
    // Default placeholder
    return 'https://via.placeholder.com/400x200?text=Blog+Image';
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
            <div>
              <p className="text-[#5aa6f8] font-medium mb-2">
                Latest Blog & Articles
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                The latest insights you need to know
              </h2>
            </div>
            <Link
              to="/blog"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#5aa6f8] hover:bg-[#4a94e4] text-white px-5 py-3 rounded-full font-medium transition"
            >
              View All Articles <FaArrowRight />
            </Link>
          </div>

          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading latest blogs...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
            <div>
              <p className="text-[#5aa6f8] font-medium mb-2">
                Latest Blog & Articles
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                The latest insights you need to know
              </h2>
            </div>
            <Link
              to="/blog"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#5aa6f8] hover:bg-[#4a94e4] text-white px-5 py-3 rounded-full font-medium transition"
            >
              View All Articles <FaArrowRight />
            </Link>
          </div>

          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Articles</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={fetchLatestBlogs}
                className="bg-[#5aa6f8] text-white px-6 py-2 rounded-lg hover:bg-[#4a94e4] transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <p className="text-[#5aa6f8] font-medium mb-2">
              Latest Blog & Articles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The latest insights you need to know
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#5aa6f8] hover:bg-[#4a94e4] text-white px-5 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            View All Articles <FaArrowRight />
          </Link>
        </div>

        {blogs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div
                key={blog._id || blog.id || index}
                className="bg-[#f9fbff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onClick={() => handleBlogClick(blog)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getBlogImage(blog)}
                    alt={blog.title}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
                    }}
                  />
                  {blog.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#5aa6f8] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-sm mb-2">
                    {formatDate(blog.publishedAt || blog.createdAt || blog.date)} {blog.readTime && `• ${blog.readTime}`}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-[#5aa6f8] transition-colors duration-200 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  {blog.author && (
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="w-7 h-7 bg-gradient-to-br from-[#5aa6f8] to-[#4a94e4] rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          {blog.author.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-500 text-sm font-medium">{blog.author}</span>
                      </div>
                      <FaArrowRight className="text-[#5aa6f8] text-sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">📰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Recent Articles</h3>
            <p className="text-gray-600">New articles will appear here soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestBlog;  