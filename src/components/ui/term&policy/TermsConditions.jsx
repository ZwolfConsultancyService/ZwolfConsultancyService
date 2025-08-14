import React, { useEffect } from "react";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaUserTie,
  FaClock,
  FaSync,
  FaCopyright,
  FaExclamationTriangle,
  FaBan,
  FaGavel,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-white py-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-[#5aa6f8] p-4 rounded-full text-white text-3xl shadow-lg">
            <FaHandshake />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Welcome to Zwolf Consultancy. These Terms & Conditions govern the use of our
          website, digital platforms, and IT services. By engaging with us, you agree to
          comply with these terms.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-10">
        {/* 1. Our Services */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaHandshake className="text-[#5aa6f8] mr-3" /> 1. Our Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Software Development</li>
            <li>Graphic Designing</li>
            <li>Digital Marketing</li>
            <li>Business Consultation</li>
            <li>Cloud & Hosting Services</li>
            <li>Accounting & Financial Services</li>
            <li>Lead Generation</li>
          </ul>
          <p className="mt-2">
            All services are provided as per the scope outlined in a formal proposal,
            quotation, or agreement.
          </p>
        </div>

        {/* 2. Payments */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaMoneyBillWave className="text-[#5aa6f8] mr-3" /> 2. Payments
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A 50% advance payment is required before starting any project unless
              otherwise agreed in writing.
            </li>
            <li>The remaining 50% is due upon completion before final delivery.</li>
            <li>Invoices must be paid within agreed terms.</li>
            <li>
              Payments are non-refundable once work has commenced, except if Zwolf
              Consultancy fails to deliver the agreed scope.
            </li>
          </ul>
        </div>

        {/* 3. Client Responsibilities */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaUserTie className="text-[#5aa6f8] mr-3" /> 3. Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide complete and accurate project details.</li>
            <li>Share required content, files, or credentials promptly.</li>
            <li>Review and approve work within agreed timelines.</li>
            <li>Ensure all provided materials have proper rights.</li>
          </ul>
        </div>

        {/* 4. Project Timelines */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaClock className="text-[#5aa6f8] mr-3" /> 4. Project Timelines & Delivery
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Estimated timelines are provided in proposals.</li>
            <li>Client delays may result in adjusted delivery dates.</li>
            <li>Deployment may be delayed if inputs are pending.</li>
          </ul>
        </div>

        {/* 5. Revisions & Scope Changes */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaSync className="text-[#5aa6f8] mr-3" /> 5. Revisions & Scope Changes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Revisions are included as per the agreed scope.</li>
            <li>
              Additional requests outside scope will be charged separately.
            </li>
          </ul>
        </div>

        {/* 6. Intellectual Property */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaCopyright className="text-[#5aa6f8] mr-3" /> 6. Intellectual Property
          </h2>
          <p>
            Work remains property of Zwolf Consultancy until full payment is received.
            After payment, ownership is transferred to the client (except licensed tools
            or third-party assets).
          </p>
        </div>

        {/* 7. Warranties & Limitations */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaExclamationTriangle className="text-[#5aa6f8] mr-3" /> 7. Warranties & Limitations
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We ensure work matches the agreed scope & specifications.</li>
            <li>Not liable for hosting failures, downtime, or client-side changes.</li>
            <li>Not liable for data loss due to client or third-party actions.</li>
          </ul>
        </div>

        {/* 8. Termination */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaBan className="text-[#5aa6f8] mr-3" /> 8. Termination
          </h2>
          <p>
            Either party may terminate the project with written notice if obligations
            aren’t met. Payments made are non-refundable, and incomplete work remains our
            property until cleared.
          </p>
        </div>

        {/* 9. Governing Law */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaGavel className="text-[#5aa6f8] mr-3" /> 9. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India, with disputes handled in New
            Delhi.
          </p>
        </div>

        {/* 10. Contact Us */}
        <div data-aos="fade-up">
          <h2 className="flex items-center text-xl font-bold mb-3">
            <FaEnvelope className="text-[#5aa6f8] mr-3" /> 10. Contact Us
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="text-[#5aa6f8] mr-2" /> zwolfconsultancy@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="text-[#5aa6f8] mr-2" /> 9520989744
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#5aa6f8] mr-2" /> C-285 Pul Pehladpur, New Delhi 110044
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
