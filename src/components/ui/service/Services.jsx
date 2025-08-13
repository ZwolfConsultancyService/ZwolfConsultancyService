import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const services = [
  {
    title: "Web Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
  },
  {
    title: "Digital Marketing",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    title: "Game Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://plus.unsplash.com/premium_photo-1682141025267-9e0ade0c0826?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  {
    title: "Mobile App Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    title: "Networking Services",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80",
  },
  {
    title: "Graphic Design",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f9fbff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <p className="text-[#5aa6f8] font-medium">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              What we can offer today
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#5aa6f8] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#4d95e3] transition"
          >
            View All Services <FaArrowUpRightFromSquare />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
