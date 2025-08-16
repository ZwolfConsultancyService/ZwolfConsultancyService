{/* Pagination */}  const handleBackClick = () => {
    window.history.back();
    // Or navigate to blog list: window.location.href = '/blog';
  };import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendar, FaChevronLeft, FaChevronRight, FaCopy, FaFacebook, FaLinkedin, FaShare, FaTwitter, FaWhatsapp } from "react-icons/fa";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Get blog data from sessionStorage (set by Blog list component)
    const storedBlog = sessionStorage.getItem('selectedBlog');
    if (storedBlog) {
      const blogData = JSON.parse(storedBlog);
      // Add extended content for detail view
      const extendedBlog = {
        ...blogData,
        author: getAuthorByTitle(blogData.title),
        category: getCategoryByTitle(blogData.title),
        readTime: "5 min read",
        content: getContentByTitle(blogData.title)
      };
      setBlog(extendedBlog);
    }
    window.scrollTo(0, 0);
  }, []);

  // Helper functions to get additional data based on title
  const getAuthorByTitle = (title) => {
    const authors = {
      "Unlocking the Potential of AI in Business Success": "John Smith",
      "Strategies for Building a Successful Distributed Team": "Sarah Johnson",
      "Empowering Citizen Developers and Accelerating Innovation": "Mike Davis",
      "Top Cybersecurity Trends to Watch in 2024": "Lisa Chen",
      "The Role of Cloud Computing in Modern Businesses": "David Wilson"
    };
    return authors[title] || "Tech Writer";
  };

  const getCategoryByTitle = (title) => {
    const categories = {
      "Unlocking the Potential of AI in Business Success": "Technology",
      "Strategies for Building a Successful Distributed Team": "Business",
      "Empowering Citizen Developers and Accelerating Innovation": "Development",
      "Top Cybersecurity Trends to Watch in 2024": "Security",
      "The Role of Cloud Computing in Modern Businesses": "Cloud"
    };
    return categories[title] || "Technology";
  };

  // All blog titles for pagination
  const allBlogs = [
    "Unlocking the Potential of AI in Business Success",
    "Strategies for Building a Successful Distributed Team", 
    "Empowering Citizen Developers and Accelerating Innovation",
    "Top Cybersecurity Trends to Watch in 2024",
    "The Role of Cloud Computing in Modern Businesses"
  ];

  const getContentByTitle = (title) => {
    const contents = {
      "Unlocking the Potential of AI in Business Success": `
        <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate, compete, and grow. From automating routine tasks to providing deep insights through data analysis, AI has become an indispensable tool for modern enterprises.</p>
        
        <h2>The AI Revolution in Business</h2>
        <p>Today's businesses are leveraging AI in various ways to enhance productivity, reduce costs, and improve customer experiences. Machine learning algorithms can predict market trends, chatbots provide 24/7 customer support, and automated systems streamline operations.</p>
        
        <h2>Key Benefits of AI Implementation</h2>
        <p>Organizations that successfully implement AI solutions report significant improvements in efficiency, accuracy, and decision-making capabilities. The technology enables businesses to process vast amounts of data quickly and identify patterns that would be impossible for humans to detect.</p>
        
        <h2>Future Outlook</h2>
        <p>As AI continues to evolve, we can expect even more innovative applications that will further transform the business landscape. Companies that embrace AI today are positioning themselves for success in tomorrow's digital economy.</p>
      `,
      "Strategies for Building a Successful Distributed Team": `
        <p>The shift to remote work has fundamentally changed how we think about team building and collaboration. Building a successful distributed team requires intentional strategies and the right tools to ensure productivity and engagement.</p>
        
        <h2>Communication is Key</h2>
        <p>Effective communication becomes even more critical when team members are spread across different locations and time zones. Establishing clear communication protocols and using the right tools can make all the difference.</p>
        
        <h2>Building Trust and Culture</h2>
        <p>Creating a strong team culture remotely requires deliberate effort. Regular virtual team building activities, clear expectations, and transparent feedback processes help build trust among distributed team members.</p>
        
        <h2>Tools and Technology</h2>
        <p>Investing in the right collaboration tools, project management platforms, and communication systems is essential for distributed team success. The right technology stack can bridge geographical gaps and enable seamless collaboration.</p>
      `,
      "Empowering Citizen Developers and Accelerating Innovation": `
        <p>Citizen development is revolutionizing how organizations approach software creation. By empowering non-technical users to build applications, companies can accelerate innovation and reduce the burden on IT departments.</p>
        
        <h2>What is Citizen Development?</h2>
        <p>Citizen development refers to the practice of enabling business users to create applications using low-code or no-code platforms, without requiring traditional programming skills.</p>
        
        <h2>Benefits for Organizations</h2>
        <p>Organizations embracing citizen development see faster time-to-market for applications, reduced IT backlog, and increased innovation from business users who understand their needs best.</p>
        
        <h2>Best Practices</h2>
        <p>Successful citizen development programs require proper governance, training, and support to ensure security, scalability, and maintainability of applications created by business users.</p>
      `,
      "Top Cybersecurity Trends to Watch in 2024": `
        <p>Cybersecurity continues to evolve as new threats emerge and technology advances. Understanding the latest trends and threats is crucial for organizations looking to protect their digital assets.</p>
        
        <h2>AI-Powered Security</h2>
        <p>Artificial intelligence is being leveraged both by attackers and defenders. AI-powered security solutions can detect anomalies and respond to threats faster than traditional methods.</p>
        
        <h2>Zero Trust Architecture</h2>
        <p>The zero trust security model continues to gain adoption as organizations realize that traditional perimeter-based security is no longer sufficient in today's distributed work environment.</p>
        
        <h2>Cloud Security Challenges</h2>
        <p>As more organizations move to the cloud, new security challenges emerge. Understanding cloud security best practices and compliance requirements is essential for modern businesses.</p>
      `,
      "The Role of Cloud Computing in Modern Businesses": `
        <p>Cloud computing has become the backbone of modern digital infrastructure. From startups to enterprise organizations, businesses are leveraging cloud services to scale, innovate, and compete effectively.</p>
        
        <h2>Scalability and Flexibility</h2>
        <p>Cloud services offer unparalleled scalability, allowing businesses to quickly adapt to changing demands without significant upfront infrastructure investments.</p>
        
        <h2>Cost Optimization</h2>
        <p>By moving to the cloud, organizations can reduce capital expenditures and convert fixed costs to variable costs, paying only for the resources they actually use.</p>
        
        <h2>Innovation Enablement</h2>
        <p>Cloud platforms provide access to cutting-edge technologies like AI, machine learning, and advanced analytics, enabling businesses to innovate faster than ever before.</p>
      `
    };
    return contents[title] || "<p>Content not available.</p>";
  };

  // Pagination functionality
  const getCurrentBlogIndex = () => {
    return allBlogs.findIndex(title => title === blog.title);
  };

  const getPreviousBlog = () => {
    const currentIndex = getCurrentBlogIndex();
    if (currentIndex > 0) {
      return allBlogs[currentIndex - 1];
    }
    return null;
  };

  const getNextBlog = () => {
    const currentIndex = getCurrentBlogIndex();
    if (currentIndex < allBlogs.length - 1) {
      return allBlogs[currentIndex + 1];
    }
    return null;
  };

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handlePrevious = () => {
    const prevTitle = getPreviousBlog();
    if (prevTitle) {
      const slug = createSlug(prevTitle);
      // Store new blog data
      const prevBlog = {
        title: prevTitle,
        date: "April 16, 2024",
        image: getBlogImage(prevTitle)
      };
      sessionStorage.setItem('selectedBlog', JSON.stringify(prevBlog));
      window.location.href = `/blog/${slug}`;
    }
  };

  const handleNext = () => {
    const nextTitle = getNextBlog();
    if (nextTitle) {
      const slug = createSlug(nextTitle);
      // Store new blog data
      const nextBlog = {
        title: nextTitle,
        date: "April 16, 2024",
        image: getBlogImage(nextTitle)
      };
      sessionStorage.setItem('selectedBlog', JSON.stringify(nextBlog));
      window.location.href = `/blog/${slug}`;
    }
  };

  const getBlogImage = (title) => {
    const images = {
      "Unlocking the Potential of AI in Business Success": "https://www.livemint.com/lm-img/img/2024/10/10/600x338/Ai_potential_mint_1728544134669_1728544141578.jpg",
      "Strategies for Building a Successful Distributed Team": "https://www.tronsoftech.com/website/images/post-2.jpg",
      "Empowering Citizen Developers and Accelerating Innovation": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      "Top Cybersecurity Trends to Watch in 2024": "https://cognissolutions.com/wp-content/uploads/2024/09/cyber-security-concept-digital-art_23-2151637760.jpg",
      "The Role of Cloud Computing in Modern Businesses": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    };
    return images[title] || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80";
  };

  // Share functionality
  const getCurrentPageUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    // Fallback URL generation
    const slug = createSlug(blog.title);
    return `https://yourdomain.com/blog/${slug}`;
  };

  const shareOnTwitter = () => {
    const url = getCurrentPageUrl();
    const text = `Check out this article: "${blog.title}"`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = getCurrentPageUrl();
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const url = getCurrentPageUrl();
    const text = `Check out this article: "${blog.title}" - ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const url = getCurrentPageUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    const url = getCurrentPageUrl();
    try {
      await navigator.clipboard.writeText(url);
      // Show success message (you can add a toast notification here)
      alert('Link copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
        >
          <FaArrowLeft className="text-gray-700 group-hover:-translate-x-1 transition-transform" />
        </button>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center text-white/90 gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {blog.author.charAt(0)}
                </div>
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <FaShare className="text-gray-400 mr-3" />
              <span className="text-gray-600 font-medium">Share this article</span>
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
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              {getPreviousBlog() && (
                <button
                  onClick={handlePrevious}
                  className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Previous Article</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {getPreviousBlog().length > 50 ? 
                        `${getPreviousBlog().substring(0, 50)}...` : 
                        getPreviousBlog()
                      }
                    </p>
                  </div>
                </button>
              )}
            </div>
            
            <div className="flex-1 text-right">
              {getNextBlog() && (
                <button
                  onClick={handleNext}
                  className="group flex items-center justify-end text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Next Article</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {getNextBlog().length > 50 ? 
                        `${getNextBlog().substring(0, 50)}...` : 
                        getNextBlog()
                      }
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