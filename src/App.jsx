

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
import CaseStudy from "./components/ui/CaseStudy/CaseStudy";
import CaseStudyDetail from "./components/ui/CaseStudy/CaseStudyDetail";

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
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />

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