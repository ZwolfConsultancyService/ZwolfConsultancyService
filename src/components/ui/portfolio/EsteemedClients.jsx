import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import client1 from "../../../assets/clientimg/IMG-20250826-WA0012.jpg";
import client2 from "../../../assets/clientimg/BMJ-Marble.jpg";
import client3 from "../../../assets/clientimg/IMG-20250826-WA0009.jpg";
import client4 from "../../../assets/clientimg/IMG-20250826-WA0010.jpg";
import client5 from "../../../assets/clientimg/sunrise.jpg";
import client6 from "../../../assets/clientimg/IMG-20250826-WA0007.jpg";
import client7 from "../../../assets/clientimg/IMG-20250826-WA0005.jpg";
import client8 from "../../../assets/clientimg/IMG-20250826-WA0006.jpg";
import client9 from "../../../assets/clientimg/IMG-20250826-WA0004.jpg";
import client10 from "../../../assets/clientimg/nartan-academy.jpg";
import client11 from "../../../assets/clientimg/lawfirm.jpg";

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11
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
         {logos.map((src, idx) => (
  <div
    key={idx}
    className="h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] border border-[#dbe5ff] rounded-lg bg-white hover:shadow-md transition overflow-hidden"
  >
    <img
      src={src}
      alt={`client-${idx + 1}`}
      className="h-full w-full object-cover"
    />
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default EsteemedClients;