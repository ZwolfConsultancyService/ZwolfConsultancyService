import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const logos = [
  "https://storage.googleapis.com/a1aa/image/d091f8dc-32fe-4780-ba4b-cf589e24eaf6.jpg",
  "https://storage.googleapis.com/a1aa/image/7f8074f9-f8e3-4ce4-b195-370be451842c.jpg",
  "https://storage.googleapis.com/a1aa/image/7015d081-b40f-4af5-84bb-e707bceacbbf.jpg",
  "https://storage.googleapis.com/a1aa/image/dfd1dfc1-8f4a-4957-af63-5fc3f21f657a.jpg",
  "https://storage.googleapis.com/a1aa/image/b427ab59-324b-40f2-f42d-063aa4435545.jpg",
  "https://storage.googleapis.com/a1aa/image/c09c3119-98b9-4af8-b6f2-315056f8ecde.jpg",
  "https://storage.googleapis.com/a1aa/image/c01492ea-7ffe-432c-14bd-a42ee785d738.jpg",
  "https://storage.googleapis.com/a1aa/image/055fd45d-012c-44ed-deca-f7576c56742f.jpg",
  "https://storage.googleapis.com/a1aa/image/47b841f9-605c-44cb-16b1-2464e0744851.jpg",
  "https://storage.googleapis.com/a1aa/image/97c5d542-4e1e-441e-57d2-6033cec9f518.jpg",
  "https://storage.googleapis.com/a1aa/image/4a05a645-f00a-410e-a7ef-37611c46878f.jpg",
  // extra logos below not included because we only want 11
  "https://storage.googleapis.com/a1aa/image/09c6f4d5-4190-47c6-77d9-f74ff78bf220.jpg",
  "https://storage.googleapis.com/a1aa/image/1818e881-694e-4679-88df-77b71262ceea.jpg",
];

const EsteemedClients = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-[#f1f8f7] mb-8 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center font-extrabold text-xl md:text-3xl lg:text-4xl mb-3"
          data-aos="fade-up"
        >
          Esteemed Clients
        </h2>
        <p
          className="text-center max-w-3xl mx-auto text-sm md:text-base text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Together, we embark on a journey where your goals align with our
          expertise, leading to innovative solutions and exceptional results.
        </p>

        {/* logo grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {logos.slice(0, 11).map((src, idx) => (
            <div
              key={idx}
              className="min-h-[90px] md:min-h-[110px] border border-[#dbe5ff] rounded-lg flex items-center justify-center  bg-white hover:shadow-md transition"
            >
              <img
                src={src}
                alt={`client-${idx}`}
                className="h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EsteemedClients;
