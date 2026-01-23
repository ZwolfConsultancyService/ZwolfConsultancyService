import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "Address",
    icon: FaMapMarkerAlt,
    text: "C-285 Pul Pehladpur,\nNew Delhi 110044",
    link: "https://maps.google.com/?q=C-285+Pul+Pehladpur+New+Delhi+110044",
    image:
      "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/contact-info-1.jpg",
  },
  {
    title: "Call Now",
    icon: FaPhoneAlt,
    text: "9520989744",
    link: "tel:9520989744",
    image:
      "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/contact-info-2.jpg",
  },
  {
  title: "Email Us",
  icon: FaEnvelope,
  text: "zwolfconsultancy@gmail.com",
  link: "mailto:zwolfconsultancy@gmail.com",
  image:
    "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/contact-info-3.jpg",
}
];

const ContactInfoCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
    {cardData.map((card, index) => {
  const Icon = card.icon;
  return (
    <a
      key={index}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#f4f8ff] rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition block"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <span className="bg-[#5aa6f8] text-white p-3 rounded-full">
          <Icon />
        </span>
      </div>
      <hr />
      <p className="text-gray-500 whitespace-pre-line">{card.text}</p>
     
    </a>
  );
})}

    </div>
  );
};

export default ContactInfoCards;
