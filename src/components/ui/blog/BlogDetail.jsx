// import React, { useEffect, useState } from "react";
// import {
//   FaArrowLeft,
//   FaCalendar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaCopy,
//   FaFacebook,
//   FaLinkedin,
//   FaShare,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa";
// import axios from "axios";

// const BlogDetail = () => {
//   const [blog, setBlog] = useState(null);
//   const [allBlogs, setAllBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // const API_BASE_URL =
//   //   "https://zwolfconsultancyservice-backend.onrender.com/api/blogs/fetch";

//   const API_BASE_URL = "/api/blogs/fetch";


//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(API_BASE_URL, {
//         timeout: 8000,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("API Response:", response.data);

//       let blogsData = response.data;

//       // Handle different response formats
//       if (blogsData.blogs && Array.isArray(blogsData.blogs)) {
//         blogsData = blogsData.blogs;
//       } else if (blogsData.data && Array.isArray(blogsData.data)) {
//         blogsData = blogsData.data;
//       } else if (!Array.isArray(blogsData)) {
//         console.error("Unexpected response format:", blogsData);
//         throw new Error("API response is not in expected format");
//       }

//       return blogsData;
//     } catch (error) {
//       console.error("Error fetching blogs:", error.message);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const loadBlogData = async () => {
//       try {
//         // Get stored blog data immediately
//         const storedBlog = sessionStorage.getItem("selectedBlog");
//         if (storedBlog) {
//           setBlog(JSON.parse(storedBlog));
//           setLoading(false);
//         }

//         // Fetch all blogs for navigation
//         const blogs = await fetchBlogs();
//         setAllBlogs(blogs);

//         // Update with full blog data if available
//         if (storedBlog) {
//           const blogData = JSON.parse(storedBlog);
//           const fullBlogData = blogs.find((b) => b.title === blogData.title);
//           if (fullBlogData) {
//             setBlog(fullBlogData);
//           }
//         }
//       } catch (error) {
//         console.error("Failed to load blog data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadBlogData();
//     window.scrollTo(0, 0);
//   }, []);

//   // Helper function to get blog image URL
//   const getBlogImage = (blog) => {
//     if (!blog) return "https://via.placeholder.com/1200x600?text=Blog+Image";

//     // Check if images array exists and has items
//     if (blog.images && Array.isArray(blog.images) && blog.images.length > 0) {
//       return blog.images[0].url;
//     }
//     // Fallback to blog.image if it exists
//     if (blog.image) {
//       return blog.image;
//     }
//     // Default placeholder
//     return "https://via.placeholder.com/1200x600?text=Blog+Image";
//   };

//   // Helper function to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "Recent";

//     const date = new Date(dateString);
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return date.toLocaleDateString("en-US", options);
//   };

//   // Helper function to strip HTML tags from content
//   const stripHtmlTags = (html) => {
//     if (!html) return "";
//     const tmp = document.createElement("DIV");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   };

//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)+/g, "");
//   };

//   const getPreviousBlog = () => {
//     const currentIndex = allBlogs.findIndex((b) => b.title === blog.title);
//     return currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
//   };

//   const getNextBlog = () => {
//     const currentIndex = allBlogs.findIndex((b) => b.title === blog.title);
//     return currentIndex < allBlogs.length - 1
//       ? allBlogs[currentIndex + 1]
//       : null;
//   };

//   const handleBackClick = () => {
//     window.history.back();
//   };

//   const handleNavigation = async (targetBlog) => {
//     if (!targetBlog) return;

//     const slug = createSlug(targetBlog.title);
//     sessionStorage.setItem("selectedBlog", JSON.stringify(targetBlog));
//     window.location.href = `/blog/${slug}`;
//   };

//   // Share functions
//   const getCurrentPageUrl = () => {
//     return window.location.href;
//   };

//   const shareOnTwitter = () => {
//     const url = getCurrentPageUrl();
//     const text = `Check out this article: "${blog.title}"`;
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
//     window.open(twitterUrl, "_blank");
//   };

//   const shareOnLinkedIn = () => {
//     const url = getCurrentPageUrl();
//     const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
//     window.open(linkedInUrl, "_blank");
//   };

//   const shareOnWhatsApp = () => {
//     const url = getCurrentPageUrl();
//     const text = `Check out this article: "${blog.title}" - ${url}`;
//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   const shareOnFacebook = () => {
//     const url = getCurrentPageUrl();
//     const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
//     window.open(facebookUrl, "_blank");
//   };

//   const copyToClipboard = async () => {
//     try {
//       const url = getCurrentPageUrl();
//       await navigator.clipboard.writeText(url);
//       alert("Link copied to clipboard!");
//     } catch (error) {
//       console.error("Failed to copy:", error);
//     }
//   };

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading blog...</p>
//         </div>
//       </div>
//     );
//   }

//   const previousBlog = getPreviousBlog();
//   const nextBlog = getNextBlog();

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="relative">
//         <img
//           src={getBlogImage(blog)}
//           alt={blog.title}
//           className="w-full h-64 md:h-96 object-cover"
//           onError={(e) => {
//             e.target.src =
//               "https://via.placeholder.com/1200x600?text=Blog+Image";
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//         <button
//           onClick={handleBackClick}
//           className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
//         >
//           <FaArrowLeft className="text-gray-700 group-hover:-translate-x-1 transition-transform" />
//         </button>

//         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="mb-4">
//               <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//                 {blog.category || "Article"}
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-5xl  text-white mb-4 leading-tight">
//               {blog.title}
//             </h1>
//             <div className="flex flex-wrap items-center text-white/90 gap-6">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white  mr-3">
//                   {blog.author ? blog.author.charAt(0).toUpperCase() : "A"}
//                 </div>
//                 <span className="font-medium">{blog.author || "Author"}</span>
//               </div>
//               <div className="flex items-center">
//                 <FaCalendar className="mr-2" />
//                 <span>
//                   {formatDate(blog.publishedAt || blog.createdAt || blog.date)}
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <span>{blog.readTime || "5 min read"}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="prose prose-lg max-w-none">
//           <div className="text-gray-700 leading-relaxed">
//             {/* Check if content has HTML tags */}
//             {blog.content && blog.content.includes("<") ? (
//               <div
//                 className="text-lg leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//               />
//             ) : (
//               <p className="text-lg leading-relaxed whitespace-pre-line">
//                 {blog.content}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Share Section */}
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <div className="flex items-center">
//               <FaShare className="text-gray-400 mr-3" />
//               <span className="text-gray-600 font-medium">
//                 Share this article
//               </span>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <button
//                 onClick={shareOnTwitter}
//                 className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
//               >
//                 <FaTwitter className="mr-2" />
//                 Twitter
//               </button>
//               <button
//                 onClick={shareOnLinkedIn}
//                 className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
//               >
//                 <FaLinkedin className="mr-2" />
//                 LinkedIn
//               </button>
//               <button
//                 onClick={shareOnWhatsApp}
//                 className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
//               >
//                 <FaWhatsapp className="mr-2" />
//                 WhatsApp
//               </button>
//               <button
//                 onClick={shareOnFacebook}
//                 className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 <FaFacebook className="mr-2" />
//                 Facebook
//               </button>
//               <button
//                 onClick={copyToClipboard}
//                 className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
//               >
//                 <FaCopy className="mr-2" />
//                 Copy Link
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Section */}
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <div className="flex justify-between items-center">
//             <div className="flex-1">
//               {previousBlog && (
//                 <button
//                   onClick={() => handleNavigation(previousBlog)}
//                   className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors"
//                 >
//                   <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
//                   <div className="text-left">
//                     <p className="text-sm text-gray-500 mb-1">
//                       Previous Article
//                     </p>
//                     <p className="font-medium text-gray-900 group-hover:text-blue-700">
//                       {previousBlog.title.length > 50
//                         ? `${previousBlog.title.substring(0, 50)}...`
//                         : previousBlog.title}
//                     </p>
//                   </div>
//                 </button>
//               )}
//             </div>

//             <div className="flex-1 text-right">
//               {nextBlog && (
//                 <button
//                   onClick={() => handleNavigation(nextBlog)}
//                   className="group flex items-center justify-end text-blue-600 hover:text-blue-700 transition-colors"
//                 >
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500 mb-1">Next Article</p>
//                     <p className="font-medium text-gray-900 group-hover:text-blue-700">
//                       {nextBlog.title.length > 50
//                         ? `${nextBlog.title.substring(0, 50)}...`
//                         : nextBlog.title}
//                     </p>
//                   </div>
//                   <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;



import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaCopy,
  FaFacebook,
  FaLinkedin,
  FaShare,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⭐ UPDATED - Use environment variable
  const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/blogs/fetch`;

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_BASE_URL, {
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);

      let blogsData = response.data;

      // Handle different response formats
      if (blogsData.blogs && Array.isArray(blogsData.blogs)) {
        blogsData = blogsData.blogs;
      } else if (blogsData.data && Array.isArray(blogsData.data)) {
        blogsData = blogsData.data;
      } else if (!Array.isArray(blogsData)) {
        console.error("Unexpected response format:", blogsData);
        throw new Error("API response is not in expected format");
      }

      return blogsData;
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        // Get stored blog data immediately
        const storedBlog = sessionStorage.getItem("selectedBlog");
        if (storedBlog) {
          setBlog(JSON.parse(storedBlog));
          setLoading(false);
        }

        // Fetch all blogs for navigation
        const blogs = await fetchBlogs();
        setAllBlogs(blogs);

        // Update with full blog data if available
        if (storedBlog) {
          const blogData = JSON.parse(storedBlog);
          const fullBlogData = blogs.find((b) => b.title === blogData.title);
          if (fullBlogData) {
            setBlog(fullBlogData);
          }
        }
      } catch (error) {
        console.error("Failed to load blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
    window.scrollTo(0, 0);
  }, []);

  // Helper function to get blog image URL
  const getBlogImage = (blog) => {
    if (!blog) return "https://via.placeholder.com/1200x600?text=Blog+Image";

    // Check if images array exists and has items
    if (blog.images && Array.isArray(blog.images) && blog.images.length > 0) {
      return blog.images[0].url;
    }
    // Fallback to blog.image if it exists
    if (blog.image) {
      return blog.image;
    }
    // Default placeholder
    return "https://via.placeholder.com/1200x600?text=Blog+Image";
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Recent";

    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Helper function to strip HTML tags from content
  const stripHtmlTags = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const getPreviousBlog = () => {
    const currentIndex = allBlogs.findIndex((b) => b.title === blog.title);
    return currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  };

  const getNextBlog = () => {
    const currentIndex = allBlogs.findIndex((b) => b.title === blog.title);
    return currentIndex < allBlogs.length - 1
      ? allBlogs[currentIndex + 1]
      : null;
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleNavigation = async (targetBlog) => {
    if (!targetBlog) return;

    const slug = createSlug(targetBlog.title);
    sessionStorage.setItem("selectedBlog", JSON.stringify(targetBlog));
    window.location.href = `/blog/${slug}`;
  };

  // Share functions
  const getCurrentPageUrl = () => {
    return window.location.href;
  };

  const shareOnTwitter = () => {
    const url = getCurrentPageUrl();
    const text = `Check out this article: "${blog.title}"`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = getCurrentPageUrl();
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = getCurrentPageUrl();
    const text = `Check out this article: "${blog.title}" - ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const url = getCurrentPageUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      const url = getCurrentPageUrl();
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  const previousBlog = getPreviousBlog();
  const nextBlog = getNextBlog();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={getBlogImage(blog)}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x600?text=Blog+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <button
          onClick={handleBackClick}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
        >
          <FaArrowLeft className="text-gray-700 group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {blog.category || "Article"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl  text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center text-white/90 gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white  mr-3">
                  {blog.author ? blog.author.charAt(0).toUpperCase() : "A"}
                </div>
                <span className="font-medium">{blog.author || "Author"}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>
                  {formatDate(blog.publishedAt || blog.createdAt || blog.date)}
                </span>
              </div>
              <div className="flex items-center">
                <span>{blog.readTime || "5 min read"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed">
            {/* Check if content has HTML tags */}
            {blog.content && blog.content.includes("<") ? (
              <div
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            )}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <FaShare className="text-gray-400 mr-3" />
              <span className="text-gray-600 font-medium">
                Share this article
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={shareOnTwitter}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <FaTwitter className="mr-2" />
                Twitter
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </button>
              <button
                onClick={shareOnWhatsApp}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaFacebook className="mr-2" />
                Facebook
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <FaCopy className="mr-2" />
                Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              {previousBlog && (
                <button
                  onClick={() => handleNavigation(previousBlog)}
                  className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">
                      Previous Article
                    </p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {previousBlog.title.length > 50
                        ? `${previousBlog.title.substring(0, 50)}...`
                        : previousBlog.title}
                    </p>
                  </div>
                </button>
              )}
            </div>

            <div className="flex-1 text-right">
              {nextBlog && (
                <button
                  onClick={() => handleNavigation(nextBlog)}
                  className="group flex items-center justify-end text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Next Article</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {nextBlog.title.length > 50
                        ? `${nextBlog.title.substring(0, 50)}...`
                        : nextBlog.title}
                    </p>
                  </div>
                  <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;