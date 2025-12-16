// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import BlogHero from "./BlogHero";
// import axios from "axios";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL = 'https://zwolfconsultancyservice-backend.onrender.com/api/blogs/fetch';

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await axios.get(API_BASE_URL, {
//         timeout: 10000,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('API Response:', response.data);

//       let blogsData = response.data;

//       // Handle different response formats
//       if (blogsData.blogs && Array.isArray(blogsData.blogs)) {
//         blogsData = blogsData.blogs;
//       } else if (blogsData.data && Array.isArray(blogsData.data)) {
//         blogsData = blogsData.data;
//       } else if (!Array.isArray(blogsData)) {
//         console.error('Unexpected response format:', blogsData);
//         throw new Error('API response is not in expected format');
//       }

//       setBlogs(blogsData);
//       console.log(`Successfully loaded ${blogsData.length} blogs`);
      
//     } catch (error) {
//       console.error('Error fetching blogs:', error.message);
//       const errorMsg = error.code === 'ECONNABORTED' ? 
//         'Request timeout - Please check your internet connection' : 
//         `Failed to load blogs: ${error.message}`;
//       setError(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     AOS.init({ 
//       duration: 800, 
//       once: true,
//       offset: 100
//     });

//     fetchBlogs();
//   }, []);

//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)+/g, "");
//   };

//   const handleBlogClick = async (blog) => {
//     try {
//       const slug = createSlug(blog.title);
//       sessionStorage.setItem("selectedBlog", JSON.stringify(blog));
//       window.location.href = `/blog/${slug}`;
//     } catch (error) {
//       console.error('Error handling blog click:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <BlogHero />
//         <section className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-center min-h-[400px]">
//               <div className="text-center">
//                 <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
//                 <p className="mt-4 text-gray-600 text-lg">Loading blogs...</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }

//   if (error && blogs.length === 0) {
//     return (
//       <>  
//         <BlogHero />
//         <section className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-center min-h-[400px]">
//               <div className="text-center">
//                 <div className="text-red-500 text-6xl mb-4">⚠️</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Blogs</h3>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={fetchBlogs}
//                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }

//   return (
//     <>
//       <BlogHero />
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Our Latest Articles
//             </h2>
//             <p className="text-gray-600">
//               {blogs.length} article{blogs.length !== 1 ? 's' : ''} available
//             </p>
//           </div>

//           {blogs.length > 0 ? (
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {blogs.map((blog, index) => (
//                 <div
//                   key={blog._id || blog.id || index}
//                   className="bg-[#f9fbff] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   onClick={() => handleBlogClick(blog)}
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
//                       }}
//                     />
//                     {blog.category && (
//                       <div className="absolute top-4 left-4">
//                         <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
//                           {blog.category}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-5">
//                     <p className="text-gray-400 text-sm mb-2">
//                       {blog.date} • {blog.readTime || '5 min read'}
//                     </p>
//                     <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
//                       {blog.title}
//                     </h3>
//                     {blog.excerpt && (
//                       <p className="text-gray-600 text-sm mt-2 line-clamp-2">
//                         {blog.excerpt}
//                       </p>
//                     )}
//                     {blog.author && (
//                       <div className="flex items-center mt-3 pt-3 border-t border-gray-200">
//                         <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
//                           {blog.author.charAt(0)}
//                         </div>
//                         <span className="text-gray-500 text-xs">{blog.author}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <div className="text-gray-400 text-6xl mb-4">📝</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blogs Found</h3>
//               <p className="text-gray-600">Check back later for new articles!</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;



import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogHero from "./BlogHero";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://zwolfconsultancyservice-backend.onrender.com/api/blogs/fetch';

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(API_BASE_URL, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
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

      setBlogs(blogsData);
      console.log(`Successfully loaded ${blogsData.length} blogs`);
      
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
      const errorMsg = error.code === 'ECONNABORTED' ? 
        'Request timeout - Please check your internet connection' : 
        `Failed to load blogs: ${error.message}`;
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      offset: 100
    });

    fetchBlogs();
  }, []);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleBlogClick = async (blog) => {
    try {
      const slug = createSlug(blog.title);
      sessionStorage.setItem("selectedBlog", JSON.stringify(blog));
      window.location.href = `/blog/${slug}`;
    } catch (error) {
      console.error('Error handling blog click:', error);
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
      <>
        <BlogHero />
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg">Loading blogs...</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <>
        <BlogHero />
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Blogs</h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                  onClick={fetchBlogs}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <BlogHero />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Latest Articles
            </h2>
            <p className="text-gray-600">
              {blogs.length} article{blogs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {blogs.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, index) => (
                <div
                  key={blog._id || blog.id || index}
                  className="bg-[#f9fbff] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getBlogImage(blog)}
                      alt={blog.title}
                      className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
                      }}
                    />
                    {blog.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-gray-400 text-sm mb-2">
                      {formatDate(blog.publishedAt || blog.createdAt || blog.date)} • {blog.readTime || '5 min read'}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    )}
                    {blog.author && (
                      <div className="flex items-center mt-3 pt-3 border-t border-gray-200">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          {blog.author.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-500 text-xs">{blog.author}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blogs Found</h3>
              <p className="text-gray-600">Check back later for new articles!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;  