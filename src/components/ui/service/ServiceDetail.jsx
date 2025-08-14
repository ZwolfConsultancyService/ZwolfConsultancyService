import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { getServiceById } from "./servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDetailHero from "./ServiceDetailHero";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = getServiceById(id);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-[#5aa6f8] hover:underline"
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
	<>
	<ServiceDetailHero title={service.title}  />

    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="flex items-center gap-3 mb-6" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                  <IconComponent className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="300">
                {service.title}
              </h1>
              <p className="text-xl text-[#5aa6f8] font-medium mb-6" data-aos="fade-up" data-aos-delay="400">
                {service.tagline}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                {service.detailedDescription}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.offerings.map((offering, index) => {
              const OfferingIcon = offering.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 text-[#5aa6f8] p-2 rounded-lg">
                      <OfferingIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{offering.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="bg-[#5aa6f8] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-medium text-gray-900 text-sm">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      {service.technologies && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {service.technologies.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3">
                    <TechIcon className="w-8 h-8 text-[#5aa6f8]" />
                    <span className="font-medium text-gray-900">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Benefits & Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
              <div className="space-y-4">
                {service.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 text-[#5aa6f8] p-1 rounded-full">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#5aa6f8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how we can help your business grow with our {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#5aa6f8] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Get Free Consultation
            </button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;