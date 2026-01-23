import React, { useEffect } from "react";
import {
  FaLock,
  FaDatabase,
  FaShareAlt,
  FaShieldAlt,
  FaCookieBite,
  FaUserShield,
  FaLink,
  FaSyncAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-[#5aa6f8] p-4 rounded-full text-white text-3xl shadow-lg">
              <FaShieldAlt />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Zwolf Consultancy, your privacy is our priority. This Privacy
            Policy explains how we collect, use, and protect your personal and
            business information when you interact with our website, services,
            or team.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-10">
          {/* 1. Information We Collect */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaDatabase className="text-[#5aa6f8] mr-3" /> 1. Information We
              Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information</strong> – Name, email, phone
                number, address, billing details.
              </li>
              <li>
                <strong>Business Information</strong> – Company name, project
                requirements, files, and documents you share.
              </li>
              <li>
                <strong>Technical Data</strong> – IP address, browser type,
                device info, website analytics.
              </li>
              <li>
                <strong>Communication Records</strong> – Emails, chat messages,
                and call details for project purposes.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaLock className="text-[#5aa6f8] mr-3" /> 2. How We Use Your
              Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our IT services.</li>
              <li>Communicate regarding projects, payments, and support.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with legal and contractual obligations.</li>
            </ul>
          </div>

          {/* 3. Data Sharing */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaShareAlt className="text-[#5aa6f8] mr-3" /> 3. Data Sharing
            </h2>
            <p>We do not sell or trade your personal information.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With trusted partners/vendors assisting in service delivery
                (under confidentiality agreements).
              </li>
              <li>When legally required by government or court orders.</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaShieldAlt className="text-[#5aa6f8] mr-3" /> 4. Data Security
            </h2>
            <p>
              We use industry-standard measures to protect your data from
              unauthorized access or loss. No online system is 100% secure, but
              we take every precaution possible.
            </p>
          </div>

          {/* 5. Cookies & Tracking */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaCookieBite className="text-[#5aa6f8] mr-3" /> 5. Cookies &
              Tracking
            </h2>
            <p>Our website may use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track website performance.</li>
              <li>Remember user preferences.</li>
              <li>Improve user experience.</li>
            </ul>
            <p>
              You can disable cookies in your browser, but some features may not
              work properly.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaUserShield className="text-[#5aa6f8] mr-3" /> 6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of the data we hold about you.</li>
              <li>Ask for corrections or updates.</li>
              <li>
                Request deletion of your personal data (subject to legal
                requirements).
              </li>
            </ul>
          </div>

          {/* 7. Third-Party Links */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaLink className="text-[#5aa6f8] mr-3" /> 7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to other websites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          {/* 8. Changes to This Policy */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaSyncAlt className="text-[#5aa6f8] mr-3" /> 8. Changes to This
              Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div data-aos="fade-up">
            <h2 className="flex items-center text-xl  text-gray-900 mb-3">
              <FaEnvelope className="text-[#5aa6f8] mr-3" /> 9. Contact Us
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="text-[#5aa6f8] mr-2" />{" "}
                zwolfconsultancy@gmail.com
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#5aa6f8] mr-2" /> 9520989744
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-[#5aa6f8] mr-2" /> C-285 Pul
                Pehladpur, New Delhi 110044
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
