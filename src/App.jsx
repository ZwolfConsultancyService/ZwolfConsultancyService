



// import React from "react";
// import { Routes, Route, useParams, Navigate } from "react-router-dom";
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
//           <Route path="/blogs" element={<Blog />} />
//           <Route path="/blogs/:slug" element={<BlogDetail />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/contacts" element={<Contact />} />

//           {/* Service detail — e.g. /services/mobile-app-development */}
//           <Route path="/services/:slug" element={<ServiceDetail />} />

//           {/* Location pages — e.g. /web-design-in-delhi */}
//           <Route path="/:slug" element={<LocationOrServiceRouter />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// const LocationOrServiceRouter = () => {
//   const { slug } = useParams();
//   const cleanSlug = slug?.replace('.html', '') || '';

//   // Redirect /blog to /blogs
//   if (cleanSlug === 'blog') {
//     return <Navigate to="/blogs" replace />;
//   }

//   // If slug starts with "blog", redirect to blogs listing
//   if (cleanSlug.startsWith('blog')) {
//     return <Navigate to="/blogs" replace />;
//   }

//   // Only handle location pages here (e.g. "web-design-in-delhi")
//   if (cleanSlug.includes('-in-')) {
//     return <ServiceLocationDetail />;
//   }

//   // For everything else (e.g. /website-development), treat as service
//   return <ServiceDetail />;
// };

// export default App;


import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";

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
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contacts" element={<Contact />} />

          {/* OLD URL redirect (IMPORTANT FIX) */}
          <Route path="/service/:slug" element={<RedirectService />} />

          {/* Service detail (NEW CLEAN URL) */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Location pages */}
          <Route path="/:slug" element={<LocationOrServiceRouter />} />
        </Routes>
      </Layout>
    </>
  );
}

/* -----------------------------
   REDIRECT OLD /service/ URLs
------------------------------*/
const RedirectService = () => {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
};

/* -----------------------------
   SMART ROUTER
------------------------------*/
const LocationOrServiceRouter = () => {
  const { slug } = useParams();
  const cleanSlug = slug?.replace(".html", "") || "";

  // blog redirects
  if (cleanSlug === "blog" || cleanSlug.startsWith("blog")) {
    return <Navigate to="/blogs" replace />;
  }

  // location pages
  if (cleanSlug.includes("-in-")) {
    return <ServiceLocationDetail />;
  }

  // default service page
  return <ServiceDetail />;
};

export default App;