import React from "react";

const ServiceDetailHero = ({ title, image }) => {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50  bg-opacity-50"></div>

      {/* Service Title */}
      <h1 className="relative text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-4">
        {title}
      </h1>
    </section>
  );
};

export default ServiceDetailHero;
