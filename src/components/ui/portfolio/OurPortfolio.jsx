



// import React, { useState } from "react";
// import Masonry from "react-masonry-css";

// const OurPortfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const projects = [
//     {
//       title: "E-Commerce Website",
//       category: "Website",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     },
//     {
//       title: "Mobile App UI",
//       category: "App",
//       image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
//     },
//     {
//       title: "Admin Dashboard",
//       category: "Dashboard",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     },
//     {
//       title: "SEO Growth Result",
//       category: "SEO",
//       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
//     },
//     {
//       title: "Brand Identity",
//       category: "Branding",
//       image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//     },
//     {
//       title: "Landing Page Design",
//       category: "Website",
//       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//   ];

//   const filters = ["All", "Website", "App", "Dashboard", "SEO", "Branding"];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   const breakpointColumnsObj = {
//     default: 3,
//     768: 1,
//   };

//   return (
//     <section className="bg-white py-16 text-gray-800">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Heading */}
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
//           Our Work Results 🚀
//         </h2>
//         <p className="text-center text-gray-500 mb-10">
//           See what we deliver to our clients
//         </p>

//         {/* Filters */}
//         <div className="flex justify-center flex-wrap gap-3 mb-10">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-2 rounded-full text-sm transition
//               ${
//                 activeFilter === filter
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}
//         <Masonry
//           breakpointCols={breakpointColumnsObj}
//           className="flex gap-6"
//           columnClassName="space-y-6"
//         >
//           {filteredProjects.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-60 object-cover"
//               />

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{item.category}</p>
//               </div>
//             </div>
//           ))}
//         </Masonry>
//       </div>
//     </section>
//   );
// };

// export default OurPortfolio;



import React, { useState } from "react";
import Masonry from "react-masonry-css";

const OurPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Website",
      category: "Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "Mobile App UI",
      category: "App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
      title: "Admin Dashboard",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "SEO Growth Result",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
    {
      title: "Landing Page Design",
      category: "Website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  const filters = ["All", "Website", "App", "Dashboard", "SEO", "Branding"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const breakpointColumnsObj = {
    default: 3,
    768: 1,
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our Work Results 🚀
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg">
          Delivering real impact through design & development
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-8"
          columnClassName="space-y-8"
        >
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden 
              shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default OurPortfolio;