import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { servicesData } from "./servicesData";
import { Link } from "react-router-dom";

// const services = [
//   {
//     title: "Website Development",
//     description:
//       "Beautiful, fast, and SEO-ready websites that convert visitors into loyal customers.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "User-friendly mobile apps that keep your business in your customer’s pocket.",
//     image:
//       "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
//   },
//   {
//     title: "Graphic Designing",
//     description:
//       "Eye-catching designs that speak your brand’s language and inspire action.",
//     image:
//       "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Data-driven campaigns that turn clicks into paying customers.",
//     image:
//       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
//   },
//   {
//     title: "Business Consultation",
//     description:
//       "Smart strategies to solve challenges, scale faster, and grow stronger.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1682141025267-9e0ade0c0826?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
//   },
//   {
//     title: "Cloud & Hosting Services",
//     description:
//       "Secure, reliable, and scalable hosting to keep your business online 24/7.",
//     image:
//       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80",
//   },
//   {
//     title: "Accounting & Financial Services",
//     description:
//       "Stress-free accounting and compliance so you can focus on growth.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1682141025267-9e0ade0c0826?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
//   },
//   {
//     title: "Lead Generation",
//     description:
//       "Targeted leads that boost sales, cut costs, and speed up your sales cycle.",
//     image:
//       "https://www.vanguard86.com/hs-fs/hubfs/Blog%20cover%20images/Smiling%20young%20man%20shaking%20hands%20with%20an%20insurance%20agent%20or%20investment%20adviser%20as%20he%20sits%20in%20a%20meeting%20with%20his%20wife%20in%20her%20office.jpeg?width=1000&name=Smiling%20young%20man%20shaking%20hands%20with%20an%20insurance%20agent%20or%20investment%20adviser%20as%20he%20sits%20in%20a%20meeting%20with%20his%20wife%20in%20her%20office.jpeg",
//   },
//   {
//     title: "Software Development",
//     description:
//       "Custom software solutions built to streamline your business operations.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
//   },
// ];

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
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <Link to={`/services/${service.id}`}>
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
