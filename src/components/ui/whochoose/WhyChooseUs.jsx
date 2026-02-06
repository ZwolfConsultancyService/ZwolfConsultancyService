// import React from "react";
// import { FaLightbulb, FaAward, FaHandHoldingUsd } from "react-icons/fa";

// const features = [
//   {
//     title: "Innovation",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
//     icon: <FaLightbulb className="w-10 h-10 text-[#5aa6f8]" />,
//   },
//   {
//     title: "Quality-Focused",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
//     icon: <FaAward className="w-10 h-10 text-[#5aa6f8]" />,
//   },
//   {
//     title: "Value For Money",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
//     icon: <FaHandHoldingUsd className="w-10 h-10 text-[#5aa6f8]" />,
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#f9fbff] ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <p className="text-[#5aa6f8] text-lg font-medium mb-2">Why Choose Us</p>
//         <h2 className="text-4xl md:text-5xl lg:text-6xl   text-gray-800 mb-10">
//           Why choose us ?
//         </h2>

//         {/* Feature Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-lg transition"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-500 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



import React from "react";
import { FaLightbulb, FaAward, FaHandHoldingUsd } from "react-icons/fa";

const features = [
  {
    title: "Innovation",
    description:
      "We build innovative IT solutions using modern technologies to solve real business challenges.",
    icon: FaLightbulb,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Quality-Focused",
    description:
      "We deliver reliable, secure, and high-performance IT services with strict quality standards.",
    icon: FaAward,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Value For Money",
    description:
      "We offer cost-effective IT solutions that ensure maximum performance and long-term ROI.",
    icon: FaHandHoldingUsd,
    gradient: "from-orange-500 to-red-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#f9fbff] to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#5aa6f8] text-sm font-semibold tracking-wide uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-4">
            Why choose us?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden border border-gray-100"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5aa6f8]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container with gradient background */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#5aa6f8] group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold mb-3 text-gray-900 group-hover:text-[#5aa6f8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#5aa6f8]/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;