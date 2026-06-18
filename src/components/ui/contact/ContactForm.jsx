import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔧 Dropdown me yahi services dikhengi — naya service add karna ho to bas isi array me add karo
const SERVICE_OPTIONS = [
  "Website Development",
  "Mobile App Development",
  "Graphic Designing",
  "Digital Marketing",
  "Business Consultation",
  "Cloud & Hosting Services",
  "Accounting & Financial Services",
  "Lead Generation",
  "Software Development",
  "SEO Services",
];

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // form state — ab sirf 4 fields: name, phone, email, service
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data =>", formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 overflow-x-hidden">
      {/* Left */}
      <div data-aos="fade-right" className="min-w-0">
        <p className="text-[#5aa6f8] font-medium mb-2">Contact Us</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in touch with us today
        </h2>
        <p className="text-gray-500 mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore et.
        </p>

        <h4 className="font-semibold text-lg mb-2">Follow Us:</h4>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61576374277131" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5aa6f8] text-white"><FaFacebookF /></a>
          <a href="https://www.instagram.com/zwolfconsultancy/profilecard/?igsh=d2pzOWJmeDBnbWZx" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5aa6f8] text-white"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/zwolf-consultancy/" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5aa6f8] text-white"><FaLinkedinIn /></a>
          <a href="https://x.com/Zwolfconsultanc" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5aa6f8] text-white"><FaTwitter /></a>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        data-aos="fade-left"
        className="bg-[#f4f8ff] rounded-3xl p-6 sm:p-8 space-y-4 min-w-0"
      >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
          className="p-3 rounded-lg w-full outline-none border border-gray-400"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            placeholder="Phone"
            className="p-3 rounded-lg w-full outline-none border border-gray-400"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            className="p-3 rounded-lg w-full outline-none border border-gray-400"
          />
        </div>

        <select
          name="service"
          onChange={handleChange}
          value={formData.service}
          className="p-3 rounded-lg w-full outline-none border border-gray-400 bg-white text-gray-700"
        >
          <option value="" disabled>
            Select a Service
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-[#5aa6f8] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#467ddc] transition"
        >
          Send A Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;