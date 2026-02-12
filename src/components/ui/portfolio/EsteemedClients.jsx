
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Correct imports (case-sensitive, src/assets)
import client1 from "../../../assets/clientImg/IMG-20250826-WA0012.jpg";
import client2 from "../../../assets/clientImg/BMJ-Marble.jpg";
import client3 from "../../../assets/clientImg/IMG-20250826-WA0009.jpg";
import client4 from "../../../assets/clientImg/IMG-20250826-WA0010.jpg";
import client5 from "../../../assets/clientImg/sunrise.jpg";
import client6 from "../../../assets/clientImg/IMG-20250826-WA0006.jpg";
import client7 from "../../../assets/clientImg/IMG-20250826-WA0005.jpg";
import client8 from "../../../assets/clientImg/IMG-20250826-WA0007.jpg";
import client9 from "../../../assets/clientImg/IMG-20250826-WA0004.jpg";
import client10 from "../../../assets/clientImg/nartan-academy.jpg";
import client11 from "../../../assets/clientImg/lawfirm.jpg";

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
  client11,
];

const EsteemedClients = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Double the logos for perfect loop (more copies = smoother)
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="bg-[#f9fbff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#5aa6f8] text-sm tracking-wide uppercase mb-3">
            Trusted Partners
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4">
            Esteemed Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Together, we embark on a journey where your goals align with our
            expertise, leading to innovative solutions and exceptional results.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9fbff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9fbff] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling wrapper */}
          <div className="overflow-hidden py-8">
            <div className="flex gap-8 sm:gap-12 animate-infinite-scroll items-center">
              {infiniteLogos.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 group relative"
                >
                  <img
                    src={src}
                    alt={`client-${(idx % logos.length) + 1}`}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain
                               opacity-80 hover:opacity-100 
                               hover:scale-110 transition-all duration-300
                               drop-shadow-md hover:drop-shadow-2xl"
                    loading="lazy"
                  />
                  
                  {/* Enhanced shadow effect on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-[#5aa6f8]/30 to-purple-500/30 scale-150"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infiniteScroll 25s linear infinite;
          width: max-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }

        /* Responsive speeds */
        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation-duration: 15s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-infinite-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default EsteemedClients;