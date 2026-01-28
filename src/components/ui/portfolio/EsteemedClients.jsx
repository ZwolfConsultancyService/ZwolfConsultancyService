// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // ✅ Correct imports (case-sensitive, src/assets)
// import client1 from "../../../assets/clientImg/IMG-20250826-WA0012.jpg";
// import client2 from "../../../assets/clientImg/BMJ-Marble.jpg";
// import client3 from "../../../assets/clientImg/IMG-20250826-WA0009.jpg";
// import client4 from "../../../assets/clientImg/IMG-20250826-WA0010.jpg";
// import client5 from "../../../assets/clientImg/sunrise.jpg";
// import client6 from "../../../assets/clientImg/IMG-20250826-WA0007.jpg";
// import client7 from "../../../assets/clientImg/IMG-20250826-WA0005.jpg";
// import client8 from "../../../assets/clientImg/IMG-20250826-WA0006.jpg";
// import client9 from "../../../assets/clientImg/IMG-20250826-WA0004.jpg";
// import client10 from "../../../assets/clientImg/nartan-academy.jpg";
// import client11 from "../../../assets/clientImg/lawfirm.jpg";
  
// const logos = [
//   client1,
//   client2,
//   client3,
//   client4,
//   client5,
//   client6,
//   client7,
//   client8,
//   client9,
//   client10,
//   client11,
// ];

// const EsteemedClients = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   return (
//     <section className="bg-[#f1f8f7] mb-8 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2
//           className="text-center font-extrabold text-xl md:text-3xl lg:text-4xl mb-3"
//           data-aos="fade-up"
//         >
//           Esteemed Clients
//         </h2>

//         <p
//           className="text-center max-w-3xl mx-auto text-sm md:text-base text-gray-600 mb-8"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           Together, we embark on a journey where your goals align with our
//           expertise, leading to innovative solutions and exceptional results.
//         </p>

//         {/* Clients Logo Grid */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="200"
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
//         >
//           {logos.map((src, idx) => (
//             <div
//               key={idx}
//               className="h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px]
//                          border border-[#dbe5ff] rounded-lg bg-white
//                          hover:shadow-md transition overflow-hidden
//                          flex items-center justify-center"
//             >
//               <img
//                 src={src}
//                 alt={`client-${idx + 1}`}
//                 className="max-h-full max-w-full object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EsteemedClients;
      


import React, { useEffect, useState } from "react";
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
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Initially show only 7 clients (to make space for View More box)
  const initialCount = 7;
  const displayedLogos = showAll ? logos : logos.slice(0, initialCount);
  const hasMore = logos.length > initialCount;

  const toggleViewMore = () => {
    setShowAll(!showAll);
  };

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

        {/* Clients Logo Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {displayedLogos.map((src, idx) => (
            <div
              key={idx}
              className="h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px]
                         border border-[#dbe5ff] rounded-lg bg-white
                         hover:shadow-md transition overflow-hidden
                         flex items-center justify-center"
              data-aos={showAll && idx >= initialCount ? "fade-up" : ""}
              data-aos-delay={showAll && idx >= initialCount ? `${(idx - initialCount) * 50}` : "0"}
            >
              <img
                src={src}
                alt={`client-${idx + 1}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}

          {/* View More Box - Only show if there are more clients and not showing all */}
          {hasMore && !showAll && (
            <button
              onClick={toggleViewMore}
              className="h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px]
                         border-2 border-dashed border-[#4a90e2] rounded-lg bg-white
                         hover:bg-gradient-to-br hover:from-[#f0f7ff] hover:to-[#e8f2ff] 
                         hover:border-[#357abd] hover:shadow-lg 
                         transition-all duration-300 group
                         flex flex-col items-center justify-center gap-3
                         cursor-pointer relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a90e2]/5 to-[#357abd]/5 
                            translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              {/* Icon Circle */}
              <div className="relative w-16 h-16 rounded-full bg-[#e8f2ff] group-hover:bg-[#4a90e2] 
                             flex items-center justify-center transition-all duration-300 
                             group-hover:scale-110">
                <svg
                  className="w-8 h-8 text-[#4a90e2] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="relative text-center px-4">
                <span className="text-[#4a90e2] group-hover:text-[#357abd] font-bold text-base md:text-lg
                               transition-colors duration-300 block">
                  View More
                </span>
                <span className="text-gray-500 text-xs md:text-sm mt-1 block">
                  +{logos.length - initialCount} Clients
                </span>
              </div>

              {/* Arrow Icon */}
              <svg
                className="relative w-6 h-6 text-[#4a90e2] group-hover:text-[#357abd] 
                         transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          )}

          {/* View Less Box - Show when all clients are displayed */}
          {showAll && (
            <button
              onClick={toggleViewMore}
              className="h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px]
                         border-2 border-dashed border-[#ff6b6b] rounded-lg bg-white
                         hover:bg-gradient-to-br hover:from-[#fff5f5] hover:to-[#ffe8e8] 
                         hover:border-[#ff5252] hover:shadow-lg 
                         transition-all duration-300 group
                         flex flex-col items-center justify-center gap-3
                         cursor-pointer relative overflow-hidden"
              data-aos="fade-up"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/5 to-[#ff5252]/5 
                            translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              {/* Icon Circle */}
              <div className="relative w-16 h-16 rounded-full bg-[#ffe8e8] group-hover:bg-[#ff6b6b] 
                             flex items-center justify-center transition-all duration-300 
                             group-hover:scale-110">
                <svg
                  className="w-8 h-8 text-[#ff6b6b] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="relative text-center px-4">
                <span className="text-[#ff6b6b] group-hover:text-[#ff5252] font-bold text-base md:text-lg
                               transition-colors duration-300 block">
                  View Less
                </span>
                <span className="text-gray-500 text-xs md:text-sm mt-1 block">
                  Show Less
                </span>
              </div>

              {/* Arrow Icon */}
              <svg
                className="relative w-6 h-6 text-[#ff6b6b] group-hover:text-[#ff5252] 
                         transition-all duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EsteemedClients;