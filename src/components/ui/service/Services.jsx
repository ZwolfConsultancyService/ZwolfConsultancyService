import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { servicesData } from "./servicesData";
import { Link } from "react-router-dom";
import { slugify } from "../../../lib/slugify";

const Services = () => {
  return (
    <section className="bg-[#f9fbff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <p className="text-[#5aa6f8] font-medium">Our Services</p>
            <h2 className="text-3xl sm:text-4xl  text-gray-900 mt-2">
              What we can offer today
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <Link to={`/services/${slugify(service.title)}`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="bg-[#5aa6f8] text-white p-2 rounded-full">
                      <FaArrowUpRightFromSquare />
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm border-b border-gray-200 pb-4 mb-4">
                    {service.description}
                  </p>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full h-40 object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
