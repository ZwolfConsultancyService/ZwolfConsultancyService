import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { servicesData } from "../../../components/ui/service/servicesData";
import { Link } from "react-router-dom";
import { slugify } from "../../../lib/slugify";

const ServicesSection = () => {
  // Home page ke liye sirf pehli 6 services dikhayenge
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="bg-gradient-to-b from-white to-[#f9fbff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <div className="flex-1">
            <p className="text-[#5aa6f8] text-sm tracking-wide uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
              What we can offer today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mt-4 rounded-full"></div>
          </div>
          <Link
            to="/services"
            className="group hidden sm:flex items-center gap-2 text-[#5aa6f8] font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Services
            <FaArrowUpRightFromSquare className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              to={`/services/${slugify(service.title, { lower: true })}`}
              className="group block"
            >
              <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col h-full border border-gray-100 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5aa6f8]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5aa6f8] transition-colors duration-300 pr-2 flex-1">
                      {service.title}
                    </h3>
                    <span className="flex-shrink-0 bg-gradient-to-br from-[#5aa6f8] to-[#4a8cd8] text-white p-3 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                      <FaArrowUpRightFromSquare className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Decorative border bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#5aa6f8]/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5aa6f8] to-purple-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Services
            <FaArrowUpRightFromSquare />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;