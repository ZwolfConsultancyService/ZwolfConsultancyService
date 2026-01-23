import React from "react";
import { FaLightbulb, FaAward, FaHandHoldingUsd } from "react-icons/fa";

const features = [
  {
    title: "Innovation",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    icon: <FaLightbulb className="w-10 h-10 text-[#5aa6f8]" />,
  },
  {
    title: "Quality-Focused",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    icon: <FaAward className="w-10 h-10 text-[#5aa6f8]" />,
  },
  {
    title: "Value For Money",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    icon: <FaHandHoldingUsd className="w-10 h-10 text-[#5aa6f8]" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9fbff] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#5aa6f8] text-lg font-medium mb-2">Why Choose Us</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl   text-gray-800 mb-10">
          Why choose us ?
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
