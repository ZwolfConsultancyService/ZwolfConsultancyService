import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./components/Pages/home/HomePage";
import About from "./components/ui/about/About";
import Layout from "./components/Pages/layout/Layout";
import Services from "./components/ui/service/Services";
import Blog from "./components/ui/blog/Blog";
import PrivacyPolicy from "./components/ui/term&policy/PrivacyPolicy";
import TermsConditions from "./components/ui/term&policy/TermsConditions";
import ServiceDetail from "./components/ui/service/ServiceDetail";
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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
