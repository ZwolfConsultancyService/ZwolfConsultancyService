// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { Loader2 } from "lucide-react";

// const API_URL = "https://www.zwolfconsultancy.com/api/case-studies";

// const CaseStudy = () => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCaseStudies = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await fetch(API_URL);
//         const rawText = await res.text();

//         let json;
//         try {
//           json = rawText ? JSON.parse(rawText) : {};
//         } catch {
//           throw new Error(`Server returned an unexpected response (status ${res.status}).`);
//         }

//         if (!res.ok) {
//           throw new Error(json.message || `Failed to fetch case studies (status ${res.status})`);
//         }

//         setCaseStudies(json.data || []);
//       } catch (err) {
//         console.error("fetchCaseStudies error:", err);
//         setError(err.message || "Could not load case studies. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCaseStudies();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Case Studies | ZWOLF Consultancy</title>
//         <meta
//           name="description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow with custom websites and web applications."
//         />
//         <meta
//           name="keywords"
//           content="web development case studies, ZWOLF Consultancy, website portfolio, custom web app projects"
//         />
//         <link rel="canonical" href="https://www.zwolfconsultancy.com/case-study" />

//         {/* Open Graph */}
//         <meta property="og:title" content="Case Studies | ZWOLF Consultancy" />
//         <meta
//           property="og:description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.zwolfconsultancy.com/case-study" />
//         <meta
//           property="og:image"
//           content="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=630&fit=crop"
//         />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Case Studies | ZWOLF Consultancy" />
//         <meta
//           name="twitter:description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow."
//         />
//       </Helmet>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d]">
//             Case Studies
//           </h1>
//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             Explore how we've helped businesses grow with custom web development solutions.
//           </p>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="flex flex-col items-center justify-center py-24">
//             <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />
//             <p className="text-sm text-gray-500">Loading case studies...</p>
//           </div>
//         )}

//         {/* Error State */}
//         {!loading && error && (
//           <div className="max-w-lg mx-auto bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md text-center">
//             {error}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && caseStudies.length === 0 && (
//           <div className="text-center py-24">
//             <p className="text-gray-500">No case studies published yet. Check back soon!</p>
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && !error && caseStudies.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {caseStudies.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/case-study/${item.slug}`}
//                 className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
//               >
//                 <div className="h-44 w-full overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     loading="lazy"
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="p-5 flex flex-col flex-grow">
//                   {item.createdAt && (
//                     <span className="text-xs font-semibold text-[#5aa6f8] mb-1 uppercase tracking-wide">
//                       {new Date(item.createdAt).toLocaleDateString("en-IN", {
//                         year: "numeric",
//                         month: "short",
//                       })}
//                     </span>
//                   )}

//                   <h3 className="font-semibold text-lg text-[#1e1e2d] mb-2">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
//                     {item.description}
//                   </p>

//                   <span className="text-sm font-medium text-[#5aa6f8] hover:underline">
//                     Read Case Study →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default CaseStudy;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { Loader2 } from "lucide-react";
// import { stripHtml } from "./Striphtml"; // path apne project ke hisaab se adjust karo

// // const API_URL = "https://www.zwolfconsultancy.com/api/case-studies";
// const API_URL = "http://localhost:5002/api/case-studies";

// const CaseStudy = () => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");


//   useEffect(() => {
//     const fetchCaseStudies = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await fetch(API_URL);
//         const rawText = await res.text();

//         let json;
//         try {
//           json = rawText ? JSON.parse(rawText) : {};

//         } catch {
//           throw new Error(`Server returned an unexpected response (status ${res.status}).`);
//         }

//         if (!res.ok) {
//           throw new Error(json.message || `Failed to fetch case studies (status ${res.status})`);
//         }

//         setCaseStudies(json.data || []);
//       } catch (err) {
//         console.error("fetchCaseStudies error:", err);
//         setError(err.message || "Could not load case studies. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCaseStudies();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Case Studies | ZWOLF Consultancy</title>
//         <meta
//           name="description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow with custom websites and web applications."
//         />
//         <meta
//           name="keywords"
//           content="web development case studies, ZWOLF Consultancy, website portfolio, custom web app projects"
//         />
//         <link rel="canonical" href="https://www.zwolfconsultancy.com/case-study" />

//         {/* Open Graph */}
//         <meta property="og:title" content="Case Studies | ZWOLF Consultancy" />
//         <meta
//           property="og:description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.zwolfconsultancy.com/case-study" />
//         <meta
//           property="og:image"
//           content="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=630&fit=crop"
//         />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Case Studies | ZWOLF Consultancy" />
//         <meta
//           name="twitter:description"
//           content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow."
//         />
//       </Helmet>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d]">
//             Case Studies
//           </h1>
//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             Explore how we've helped businesses grow with custom web development solutions.
//           </p>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="flex flex-col items-center justify-center py-24">
//             <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />
//             <p className="text-sm text-gray-500">Loading case studies...</p>
//           </div>
//         )}

//         {/* Error State */}
//         {!loading && error && (
//           <div className="max-w-lg mx-auto bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md text-center">
//             {error}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && caseStudies.length === 0 && (
//           <div className="text-center py-24">
//             <p className="text-gray-500">No case studies published yet. Check back soon!</p>
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && !error && caseStudies.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//          {caseStudies.map((item) => {
//   console.log("IMAGE:", item.image);

//   return (
//     <Link
//       key={item._id}
//       to={`/case-study/${item.slug}`}
//       className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
//     >
//       <div className="h-44 w-full overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.title || "Case Study"}
//           loading="lazy"
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="p-5 flex flex-col flex-grow">
//         {item.createdAt && (
//           <span className="text-xs font-semibold text-[#5aa6f8] mb-1 uppercase tracking-wide">
//             {new Date(item.createdAt).toLocaleDateString("en-IN", {
//               year: "numeric",
//               month: "short",
//             })}
//           </span>
//         )}

//         <h3 className="font-semibold text-lg text-[#1e1e2d] mb-2">
//           {item.title}
//         </h3>

//         <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
//           {stripHtml(item.description)}
//         </p>

//         <span className="text-sm font-medium text-[#5aa6f8] hover:underline">
//           Read Case Study →
//         </span>
//       </div>
//     </Link>
//   );
// })}
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default CaseStudy;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";
import { stripHtml } from "./Striphtml";

// const API_URL = "http://localhost:5002/api/case-studies";
const API_URL = "https://zwolfconsultancy.com/api/case-studies";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/800x450?text=Case+Study";

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(API_URL);
        const rawText = await res.text();

        let json = {};

        try {
          json = rawText ? JSON.parse(rawText) : {};
        } catch {
          throw new Error(
            `Server returned an unexpected response (status ${res.status}).`
          );
        }

        if (!res.ok) {
          throw new Error(
            json.message ||
            `Failed to fetch case studies (status ${res.status})`
          );
        }

        console.log("========== CASE STUDIES API ==========");
        console.log("API DATA:", json.data);

        if (Array.isArray(json.data)) {
          json.data.forEach((item, index) => {
            console.log(`Case Study ${index + 1}:`, {
              id: item._id,
              title: item.title,
              images: item.images,
              firstImage: item.images?.[0]?.url || null,
            });
          });
        }

        setCaseStudies(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error("fetchCaseStudies error:", err);

        setError(
          err.message || "Could not load case studies. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Case Studies | ZWOLF Consultancy</title>

        <meta
          name="description"
          content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow with custom websites and web applications."
        />

        <meta
          name="keywords"
          content="web development case studies, ZWOLF Consultancy, website portfolio, custom web app projects"
        />

        <link
          rel="canonical"
          href="https://www.zwolfconsultancy.com/case-study"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Case Studies | ZWOLF Consultancy"
        />

        <meta
          property="og:description"
          content="Explore how ZWOLF Consultancy has helped businesses grow with custom web development solutions."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.zwolfconsultancy.com/case-study"
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=630&fit=crop"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Case Studies | ZWOLF Consultancy"
        />

        <meta
          name="twitter:description"
          content="Explore our web development case studies and see how ZWOLF Consultancy has helped businesses grow."
        />

        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=630&fit=crop"
        />
      </Helmet>

      {/* ================= PAGE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d]">
            Case Studies
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore how we've helped businesses grow with custom web
            development solutions.
          </p>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />

            <p className="text-sm text-gray-500">
              Loading case studies...
            </p>
          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="max-w-lg mx-auto bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md text-center">
            {error}
          </div>
        )}

        {/* ================= EMPTY ================= */}
        {!loading && !error && caseStudies.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-500">
              No case studies published yet. Check back soon!
            </p>
          </div>
        )}

        {/* ================= GRID ================= */}
        {!loading && !error && caseStudies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((item) => {
              /*
                Database structure:

                images: [
                  {
                    url: "...",
                    fileId: "...",
                    _id: "..."
                  }
                ]
              */

              // const firstImage = item.images?.[0]?.url || null;
              const firstImage =
                item.image ||
                item.images?.find((img) => img?.url)?.url ||
                FALLBACK_IMAGE;

              console.log("================================");
              console.log("TITLE:", item.title);
              console.log("IMAGES:", item.images);
              console.log("FIRST IMAGE:", firstImage);
              console.log("================================");

              return (
                <Link
                  key={item._id}
                  to={`/case-study/${item.slug}`}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  {/* ================= IMAGE ================= */}
                  <div className="h-44 w-full overflow-hidden bg-gray-100">
                    {firstImage ? (
                      <img
                        src={firstImage || FALLBACK_IMAGE}
                        alt={item.title || "Case Study"}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error(
                            "Image failed to load:",
                            firstImage
                          );

                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        No Image Available
                      </div>
                    )}
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Date */}
                    {item.createdAt && (
                      <span className="text-xs font-semibold text-[#5aa6f8] mb-1 uppercase tracking-wide">
                        {new Date(item.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "short",
                          }
                        )}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-[#1e1e2d] mb-2">
                      {item.title || "Untitled Case Study"}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                      {stripHtml(item.description || "")}
                    </p>

                    {/* Read More */}
                    <span className="text-sm font-medium text-[#5aa6f8] hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default CaseStudy;