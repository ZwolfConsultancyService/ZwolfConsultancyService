// blogData.js - Centralized blog data

export const blogs = [
  {
    id: 1,
    date: "April 16, 2024",
    title: "Unlocking the Potential of AI in Business Success",
    image: "https://www.livemint.com/lm-img/img/2024/10/10/600x338/Ai_potential_mint_1728544134669_1728544141578.jpg",
    author: "John Smith",
    category: "Technology",
    readTime: "5 min read",
    excerpt: "Artificial Intelligence is transforming how businesses operate, compete, and grow in the modern digital landscape.",
    content: "Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate, compete, and grow. From automating routine tasks to providing deep insights through data analysis, AI has become an indispensable tool for modern enterprises. Today's businesses are leveraging AI in various ways to enhance productivity, reduce costs, and improve customer experiences. Machine learning algorithms can predict market trends, chatbots provide 24/7 customer support, and automated systems streamline operations. Organizations that successfully implement AI solutions report significant improvements in efficiency, accuracy, and decision-making capabilities. The technology enables businesses to process vast amounts of data quickly and identify patterns that would be impossible for humans to detect. As AI continues to evolve, we can expect even more innovative applications that will further transform the business landscape. Companies that embrace AI today are positioning themselves for success in tomorrow's digital economy."
  },
  {
    id: 2,
    date: "April 16, 2024",
    title: "Strategies for Building a Successful Distributed Team",
    image: "https://www.tronsoftech.com/website/images/post-2.jpg",
    author: "Sarah Johnson",
    category: "Business",
    readTime: "5 min read",
    excerpt: "The shift to remote work has fundamentally changed how we think about team building and collaboration.",
    content: "The shift to remote work has fundamentally changed how we think about team building and collaboration. Building a successful distributed team requires intentional strategies and the right tools to ensure productivity and engagement. Effective communication becomes even more critical when team members are spread across different locations and time zones. Establishing clear communication protocols and using the right tools can make all the difference. Creating a strong team culture remotely requires deliberate effort. Regular virtual team building activities, clear expectations, and transparent feedback processes help build trust among distributed team members. Investing in the right collaboration tools, project management platforms, and communication systems is essential for distributed team success."
  },
  {
    id: 3,
    date: "April 16, 2024",
    title: "Empowering Citizen Developers and Accelerating Innovation",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    author: "Mike Davis",
    category: "Development",
    readTime: "5 min read",
    excerpt: "Citizen development is revolutionizing how organizations approach software creation by empowering non-technical users.",
    content: "Citizen development is revolutionizing how organizations approach software creation. By empowering non-technical users to build applications, companies can accelerate innovation and reduce the burden on IT departments. Citizen development refers to the practice of enabling business users to create applications using low-code or no-code platforms, without requiring traditional programming skills. Organizations embracing citizen development see faster time-to-market for applications, reduced IT backlog, and increased innovation from business users who understand their needs best. Successful citizen development programs require proper governance, training, and support to ensure security, scalability, and maintainability of applications created by business users."
  },
  {
    id: 4,
    date: "April 16, 2024",
    title: "Top Cybersecurity Trends to Watch in 2024",
    image: "https://cognissolutions.com/wp-content/uploads/2024/09/cyber-security-concept-digital-art_23-2151637760.jpg",
    author: "Lisa Chen",
    category: "Security",
    readTime: "5 min read",
    excerpt: "Cybersecurity continues to evolve as new threats emerge and technology advances in 2024.",
    content: "Cybersecurity continues to evolve as new threats emerge and technology advances. Understanding the latest trends and threats is crucial for organizations looking to protect their digital assets. Artificial intelligence is being leveraged both by attackers and defenders. AI-powered security solutions can detect anomalies and respond to threats faster than traditional methods. The zero trust security model continues to gain adoption as organizations realize that traditional perimeter-based security is no longer sufficient in today's distributed work environment. As more organizations move to the cloud, new security challenges emerge. Understanding cloud security best practices and compliance requirements is essential for modern businesses."
  },
  {
    id: 5,
    date: "April 16, 2024",
    title: "The Role of Cloud Computing in Modern Businesses",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    author: "David Wilson",
    category: "Cloud",
    readTime: "5 min read",
    excerpt: "Cloud computing has become the backbone of modern digital infrastructure for businesses of all sizes.",
    content: "Cloud computing has become the backbone of modern digital infrastructure. From startups to enterprise organizations, businesses are leveraging cloud services to scale, innovate, and compete effectively. Cloud services offer unparalleled scalability, allowing businesses to quickly adapt to changing demands without significant upfront infrastructure investments. By moving to the cloud, organizations can reduce capital expenditures and convert fixed costs to variable costs, paying only for the resources they actually use. Cloud platforms provide access to cutting-edge technologies like AI, machine learning, and advanced analytics, enabling businesses to innovate faster than ever before."
  }
];

// Utility functions
export const getAllBlogs = () => blogs;

export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === id);
};

export const getBlogByTitle = (title) => {
  return blogs.find(blog => blog.title === title);
};

export const getBlogBySlug = (slug) => {
  return blogs.find(blog => createSlug(blog.title) === slug);
};

export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const getPreviousBlog = (currentTitle) => {
  const currentIndex = blogs.findIndex(blog => blog.title === currentTitle);
  return currentIndex > 0 ? blogs[currentIndex - 1] : null;
};

export const getNextBlog = (currentTitle) => {
  const currentIndex = blogs.findIndex(blog => blog.title === currentTitle);
  return currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
};