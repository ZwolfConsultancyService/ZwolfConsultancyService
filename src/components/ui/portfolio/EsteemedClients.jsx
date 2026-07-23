// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import client1 from "../../../assets/clientImg/IMG-20250826-WA0012.jpg";
// import client2 from "../../../assets/clientImg/BMJ-Marble.jpg";
// import client3 from "../../../assets/clientImg/IMG-20250826-WA0009.jpg";
// import client4 from "../../../assets/clientImg/IMG-20250826-WA0010.jpg";
// import client5 from "../../../assets/clientImg/sunrise.jpg";
// import client6 from "../../../assets/clientImg/IMG-20250826-WA0006.jpg";
// import client7 from "../../../assets/clientImg/IMG-20250826-WA0005.jpg";
// import client8 from "../../../assets/clientImg/IMG-20250826-WA0007.jpg";
// import client9 from "../../../assets/clientImg/IMG-20250826-WA0004.jpg";
// import client10 from "../../../assets/clientImg/nartan-academy.jpg";
// import client11 from "../../../assets/clientImg/lawfirm.jpg";
// import client12 from "../../../assets/clientImg/Advance.png";
// import client13 from "../../../assets/clientImg/maapitambara.png";
// import client14 from "../../../assets/clientImg/Omarch.png";
// import client15 from "../../../assets/clientImg/chandra.jpeg";
// import client16 from "../../../assets/clientImg/sudhir.jpeg";
// import client17 from "../../../assets/clientImg/abhishek.jpeg";
// import client18 from "../../../assets/clientImg/logodentist.png";
// // ✅ Yahan har client ka website link daalo
// const logos = [
//   { img: client1, name: "Client 1" },
//   { img: client2, name: "Client 2" },
//   { img: client3, name: "Client 3" },
//   { img: client4, name: "Client 4" },
//   { img: client5, name: "Client 5" },
//   { img: client6, name: "Client 6" },
//   { img: client7, name: "Client 7" },
//   { img: client8, name: "Client 8" },
//   { img: client9, name: "Client 9" },
//   { img: client10, name: "Client 10" },
//   { img: client11, name: "Client 11" },
//   {
//     img: client12,
//     url: "https://advancepainphysiotherapy.com/",
//     name: "Client 12",
//   },
//   {
//     img: client13,
//     url: "https://maapitambaratourandtravels.com/",
//     name: "Client 13",
//   },
//   { img: client14, url: "https://omarch.in/", name: "Client 14" },
//    { img: client15, name: "Client 15" },
//     {
//     img: client16,
//     url: "https://www.drsudhirseth.in/",
//     name: "Client 16",
//   },

//     {
//     img: client17,
//     url: "https://drabhishekvaish.com/",
//     name: "Client 17",
//   },
//      {
//     img: client18,
//     url: "https://drabhishekvaish.com/",
//     name: "Client 17",
//   },
// ];

// const EsteemedClients = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   // Double karo smooth loop ke liye
//   const infiniteLogos = [...logos, ...logos];

//   return (
//     <section className="bg-[#f9fbff] py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16" data-aos="fade-up">
//           <p className="text-[#5aa6f8] text-sm tracking-wide uppercase mb-3">
//             Trusted Partners
//           </p>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4">
//             Esteemed Clients
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#5aa6f8] to-purple-500 mx-auto rounded-full mb-6"></div>
//           <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
//             Together, we embark on a journey where your goals align with our
//             expertise, leading to innovative solutions and exceptional results.
//           </p>
//         </div>

//         {/* Infinite Scroll Container */}
//         <div className="relative" data-aos="fade-up" data-aos-delay="200">
//           {/* Gradient overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9fbff] to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9fbff] to-transparent z-10 pointer-events-none"></div>

//           {/* Scrolling wrapper */}
//           <div className="overflow-hidden py-8">
//             <div className="flex gap-8 sm:gap-12 animate-infinite-scroll items-center">
//               {infiniteLogos.map((client, idx) => (
//                 <a
//                   key={idx}
//                   href={client.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   title={client.name}
//                   className="flex-shrink-0 group relative cursor-pointer"
//                 >
//                   <img
//                     src={client.img}
//                     alt={client.name}
//                     className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain
//                                opacity-80 hover:opacity-100
//                                hover:scale-110 transition-all duration-300
//                                drop-shadow-md hover:drop-shadow-2xl"
//                     loading="lazy"
//                   />

//                   {/* Glow effect on hover */}
//                   <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-[#5aa6f8]/30 to-purple-500/30 scale-150"></div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes infiniteScroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-infinite-scroll {
//           animation: infiniteScroll 25s linear infinite;
//           width: max-content;
//         }
//         .animate-infinite-scroll:hover {
//           animation-play-state: paused;
//         }
//         @media (max-width: 640px) {
//           .animate-infinite-scroll { animation-duration: 15s; }
//         }
//         @media (min-width: 641px) and (max-width: 1024px) {
//           .animate-infinite-scroll { animation-duration: 20s; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default EsteemedClients;




import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
import client12 from "../../../assets/clientImg/Advance.png";
import client13 from "../../../assets/clientImg/maapitambara.png";
import client14 from "../../../assets/clientImg/Omarch.png";
import client15 from "../../../assets/clientImg/chandra.jpeg";
import client16 from "../../../assets/clientImg/sudhir.jpeg";
import client17 from "../../../assets/clientImg/abhishek.jpeg";
import client18 from "../../../assets/clientImg/logodentist.png";
import client19 from "../../../assets/clientImg/rentabode.png";
import client20 from "../../../assets/clientImg/calogo.jpeg";
import client21 from "../../../assets/clientImg/LegacyCuratorlogo.png";
import client22 from "../../../assets/clientImg/Logoaarogya.png";
import client23 from "../../../assets/clientImg/astha.png";
import client24 from "../../../assets/clientImg/singlalogo.png";
import client25 from "../../../assets/clientImg/bjplogo.jpeg";

// ✅ Yahan har client ka website link daalo
const logos = [
  { img: client1, name: "Client 1" },
  { img: client2, name: "Client 2" },
  { img: client3, name: "Client 3" },
  { img: client4, name: "Client 4" },
  { img: client5, name: "Client 5" },
  { img: client6, name: "Client 6" },
  { img: client7, name: "Client 7" },
  { img: client8, name: "Client 8" },
  { img: client9, name: "Client 9" },
  { img: client10, name: "Client 10" },
  { img: client11, name: "Client 11" },
  { img: client12, url: "https://advancepainphysiotherapy.com/", name: "Client 12" },
  { img: client13, url: "https://maapitambaratourandtravels.com/", name: "Client 13" },
  { img: client14, url: "https://omarch.in/", name: "Client 14" },
  { img: client15, name: "Client 15" },
  { img: client16, url: "https://www.drsudhirseth.in/", name: "Client 16" },
  { img: client17, url: "https://drabhishekvaish.com/", name: "Client 17" },
  { img: client18, url: "https://goldenratiodentistry.com/", name: "Client 18" },
  { img: client19, url: "https://rentabodeindia.com/", name: "Client 19" },
  { img: client20, url: "https://goravarora.com/", name: "Client 20" },
  { img: client21, url: "https://legacycurator.in/", name: "Client 21" },
  { img: client22, url: "https://aarogyaphysiotherapyandrehabilitation.com/", name: "Client 22" },
  { img: client23, url: "https://asthahealthcare.in/", name: "Client 23" },
  { img: client24, url: "https://singladentals.com/", name: "Client 24" },
  { img: client25, url: "https://rajeevjaitly.in/", name: "Client 25" },
];

const EsteemedClients = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Do rows mein baato — opposite direction scroll ke liye
  const rowA = logos.filter((_, i) => i % 2 === 0);
  const rowB = logos.filter((_, i) => i % 2 !== 0);
  const infiniteRowA = [...rowA, ...rowA];
  const infiniteRowB = [...rowB, ...rowB];

  const Card = ({ client }) => (
    <a
      href={client.url || "#"}
      target={client.url ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="client-card flex-shrink-0 group relative"
      title={client.name}
    >
      <img
        src={client.img}
        alt={client.name}
        className="client-logo"
        loading="lazy"
      />
      <span className="client-glow" aria-hidden="true" />
    </a>
  );

  return (
    <section className="clients-section py-24 overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500&display=swap');

        .clients-section {
          background: #F7F9FC;
          background-image: radial-gradient(circle, #E4E9F2 1px, transparent 1px);
          background-size: 22px 22px;
        }

        .clients-section p,
        .clients-section span.body-text {
          font-family: 'Inter', sans-serif;
        }

        .client-card {
          width: 260px;
          height: 168px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          border: 1px solid #E3E8F2;
          border-radius: 10px;
          background: #FFFFFF;
          box-shadow: 0 1px 2px rgba(15, 27, 45, 0.04);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        .client-card:hover {
          border-color: #F0A93E;
          box-shadow: 0 12px 28px -12px rgba(15, 27, 45, 0.18);
          transform: translateY(-3px);
        }

        .client-logo {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform 0.35s ease;
        }
        .client-card:hover .client-logo {
          transform: scale(1.04);
        }

        .client-glow {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          pointer-events: none;
          box-shadow: inset 0 0 0 1px rgba(240, 169, 62, 0);
          transition: box-shadow 0.35s ease;
        }
        .client-card:hover .client-glow {
          box-shadow: inset 0 0 0 1px rgba(240, 169, 62, 0.25);
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .row-left {
          animation: scrollLeft 42s linear infinite;
          width: max-content;
        }
        .row-right {
          animation: scrollRight 36s linear infinite;
          width: max-content;
        }
        .row-left:hover, .row-right:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .row-left { animation-duration: 26s; }
          .row-right { animation-duration: 22s; }
          .client-card { width: 190px; height: 128px; padding: 12px 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .row-left, .row-right { animation: none; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="text-[13px] tracking-[0.2em] uppercase text-[#4C8DF6]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Trusted Partners
            </span>
            <span className="w-1 h-1 rounded-full bg-[#8291A8]" />
            <span
              className="text-[13px] text-[#8291A8]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {logos.length} on the roster
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-[#0F1B2D] mb-5"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Esteemed Clients
          </h2>

          <p className="max-w-2xl mx-auto text-[#556074] leading-relaxed body-text">
            Together, we embark on a journey where your goals align with our
            expertise, leading to innovative solutions and exceptional results.
          </p>
        </div>

        {/* Dual-row roster */}
        <div className="relative" data-aos="fade-up" data-aos-delay="150">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F7F9FC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F7F9FC] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-3">
            <div className="row-left flex gap-4 sm:gap-5 items-center">
              {infiniteRowA.map((client, idx) => (
                <Card client={client} key={`a-${idx}`} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden py-3 mt-4">
            <div className="row-right flex gap-4 sm:gap-5 items-center">
              {infiniteRowB.map((client, idx) => (
                <Card client={client} key={`b-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsteemedClients;