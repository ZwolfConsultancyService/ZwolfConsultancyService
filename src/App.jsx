// import React from "react";
// import { Routes, Route, Router } from "react-router-dom";
// import HomePage from "./components/Pages/home/HomePage";
// import About from "./components/ui/about/About";
// import Layout from "./components/Pages/layout/Layout";
// import Services from "./components/ui/service/Services";
// import Blog from "./components/ui/blog/Blog";
// import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
// import TermsConditions from "./components/ui/term&policy/TermsConditions";
// import ServiceDetail from "./components/ui/service/ServiceDetail";
// import ScrollToTop from "./lib/ScrollToTop";
// import Contact from "./components/ui/contact/Contact";
// import BlogDetail from "./components/ui/blog/BlogDetail";

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:slug" element={<ServiceDetail />} />
//           <Route path="/:slug" element={<ServiceDetail />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/Pages/home/HomePage";
// import About from "./components/ui/about/About";
// import Layout from "./components/Pages/layout/Layout";
// import Services from "./components/ui/service/Services";
// import Blog from "./components/ui/blog/Blog";
// import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
// import TermsConditions from "./components/ui/term&policy/TermsConditions";
// import ServiceDetail from "./components/ui/service/ServiceDetail";
// import ServiceLocationDetail from "./components/ui/service/ServiceLocationDetail/ServiceLocationDetail";
// import ScrollToTop from "./lib/ScrollToTop";
// import Contact from "./components/ui/contact/Contact";
// import BlogDetail from "./components/ui/blog/BlogDetail";

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />

//           {/* Service detail with /services prefix */}
//           <Route path="/services/:slug" element={<ServiceDetail />} />

//           {/* Location-based service - WITHOUT /services prefix */}
//           <Route
//             path="/:serviceSlug/:locationSlug"
//             element={<ServiceLocationDetail />}
//           />

//           {/* General slug route for other pages */}
//           <Route path="/:slug" element={<ServiceDetail />} />

//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/Pages/home/HomePage";
// import About from "./components/ui/about/About";
// import Layout from "./components/Pages/layout/Layout";
// import Services from "./components/ui/service/Services";
// import Blog from "./components/ui/blog/Blog";
// import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
// import TermsConditions from "./components/ui/term&policy/TermsConditions";
// import ServiceDetail from "./components/ui/service/ServiceDetail";
// import ServiceLocationDetail from "./components/ui/service/ServiceLocationDetail/ServiceLocationDetail";
// import ScrollToTop from "./lib/ScrollToTop";
// import Contact from "./components/ui/contact/Contact";
// import BlogDetail from "./components/ui/blog/BlogDetail";

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />

//           {/* Service detail with /services prefix */}
//           <Route path="/services/:slug" element={<ServiceDetail />} />

//           {/* Location-based service with .html extension */}
//           <Route
//             path="/:serviceSlug-in-:locationSlug.html"
//             element={<ServiceLocationDetail />}
//           />

//           {/* General slug route for other pages */}
//           <Route path="/:slug" element={<ServiceDetail />} />

//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// export default App;





// import React from "react";
// import { Routes, Route, useParams } from "react-router-dom";
// import HomePage from "./components/Pages/home/HomePage";
// import About from "./components/ui/about/About";
// import Layout from "./components/Pages/layout/Layout";
// import Services from "./components/ui/service/Services";
// import Blog from "./components/ui/blog/Blog";
// import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
// import TermsConditions from "./components/ui/term&policy/TermsConditions";
// import ServiceDetail from "./components/ui/service/ServiceDetail";
// import ServiceLocationDetail from "./components/ui/service/ServiceLocationDetail/ServiceLocationDetail";
// import ScrollToTop from "./lib/ScrollToTop";
// import Contact from "./components/ui/contact/Contact";
// import BlogDetail from "./components/ui/blog/BlogDetail";

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Blog detail */}
//           <Route path="/blog/:slug" element={<BlogDetail />} />

//           {/* Service detail with /services prefix */}
//           <Route path="/:slug" element={<ServiceDetail />} />

//           {/* 🔥 CATCH-ALL for location and service pages */}
//           <Route path="/:slug" element={<LocationOrServiceRouter />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// // 🔥 NEW: Smart Router Component
// const LocationOrServiceRouter = () => {
//   const { slug } = useParams();
  
//   console.log("🔀 Router received slug:", slug);
  
//   // Remove .html if present
//   const cleanSlug = slug.replace('.html', '');
  
//   // Check if it's a location page (contains "-in-")
//   if (cleanSlug.includes('-in-')) {
//     console.log("✅ Routing to Location Page");
//     return <ServiceLocationDetail />;
//   } else {
//     console.log("✅ Routing to Service Detail");
//     return <ServiceDetail />;
//   }
// };

// export default App;



import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./components/Pages/home/HomePage";
import About from "./components/ui/about/About";
import Layout from "./components/Pages/layout/Layout";
import Services from "./components/ui/service/Services";
import Blog from "./components/ui/blog/Blog";
import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
import TermsConditions from "./components/ui/term&policy/TermsConditions";
import ServiceDetail from "./components/ui/service/ServiceDetail";
import ServiceLocationDetail from "./components/ui/service/ServiceLocationDetail/ServiceLocationDetail";
import ScrollToTop from "./lib/ScrollToTop";
import Contact from "./components/ui/contact/Contact";
import BlogDetail from "./components/ui/blog/BlogDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />

          {/* Blog detail */}
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* 🔥 Service routes - SPECIFIC routes FIRST */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* 🔥 CATCH-ALL for location and service pages - GENERIC routes LAST */}
          <Route path="/:slug" element={<LocationOrServiceRouter />} />
        </Routes>
      </Layout>
    </>
  );
}

// 🔥 Smart Router Component
const LocationOrServiceRouter = () => {
  const { slug } = useParams();
  
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🔀 SMART ROUTER");
  console.log("Raw slug:", slug);
  
  // Remove .html if present
  const cleanSlug = slug?.replace('.html', '') || '';
  console.log("Clean slug:", cleanSlug);
  
  // Check if it's a location page (contains "-in-")
  if (cleanSlug.includes('-in-')) {
    console.log("✅ Contains '-in-' → Routing to ServiceLocationDetail");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    return <ServiceLocationDetail />;
  } else {
    console.log("✅ No '-in-' → Routing to ServiceDetail");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    return <ServiceDetail />;
  }
};

export default App;