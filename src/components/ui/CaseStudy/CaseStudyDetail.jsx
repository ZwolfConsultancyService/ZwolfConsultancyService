// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { Loader2 } from "lucide-react";

// const API_URL = "https://www.zwolfconsultancy.com/api/case-studies";

// const CaseStudyDetail = () => {
//   const { slug } = useParams();
//   const [caseStudy, setCaseStudy] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCaseStudy = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await fetch(`${API_URL}/${slug}`);
//         const rawText = await res.text();

//         let json;
//         try {
//           json = rawText ? JSON.parse(rawText) : {};
//         } catch {
//           throw new Error(`Server returned an unexpected response (status ${res.status}).`);
//         }

//         if (!res.ok || !json.success) {
//           throw new Error(json.message || `Failed to fetch case study (status ${res.status})`);
//         }

//         setCaseStudy(json.data);
//       } catch (err) {
//         console.error("fetchCaseStudy error:", err);
//         setError(err.message || "Could not load this case study.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCaseStudy();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center justify-center py-24">
//         <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />
//         <p className="text-sm text-gray-500">Loading case study...</p>
//       </div>
//     );
//   }

//   if (error || !caseStudy) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 text-center">
//         <p className="text-red-600 mb-4">{error || "Case study not found."}</p>
//         <Link to="/case-study" className="text-[#5aa6f8] font-medium hover:underline">
//           ← Back to Case Studies
//         </Link>
//       </div>
//     );
//   }

//   const pageUrl = `https://www.zwolfconsultancy.com/case-study/${caseStudy.slug}`;

//   return (
//     <>
//       <Helmet>
//         <title>{caseStudy.title} | ZWOLF Consultancy Case Study</title>
//         <meta name="description" content={caseStudy.description} />
//         <meta
//           name="keywords"
//           content={`${caseStudy.title}, web development case study, ZWOLF Consultancy`}
//         />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph */}
//         <meta property="og:title" content={caseStudy.title} />
//         <meta property="og:description" content={caseStudy.description} />
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={pageUrl} />
//         <meta property="og:image" content={caseStudy.image} />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={caseStudy.title} />
//         <meta name="twitter:description" content={caseStudy.description} />
//         <meta name="twitter:image" content={caseStudy.image} />

//         {/* Structured Data - JSON-LD for rich results */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Article",
//             headline: caseStudy.title,
//             description: caseStudy.description,
//             image: caseStudy.image,
//             author: {
//               "@type": "Organization",
//               name: "ZWOLF Consultancy",
//             },
//             publisher: {
//               "@type": "Organization",
//               name: "ZWOLF Consultancy",
//             },
//             datePublished: caseStudy.createdAt,
//           })}
//         </script>
//       </Helmet>

//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
//         {/* Back link */}
//         <Link
//           to="/case-study"
//           className="inline-flex items-center text-sm text-[#5aa6f8] font-medium hover:underline mb-6"
//         >
//           ← Back to Case Studies
//         </Link>

//         {/* Header */}
//         <div className="mb-8">
//           {caseStudy.createdAt && (
//             <span className="text-xs font-semibold text-[#5aa6f8] uppercase tracking-wide">
//               {new Date(caseStudy.createdAt).toLocaleDateString("en-IN", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//           )}
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d] mt-2 mb-3">
//             {caseStudy.title}
//           </h1>
//         </div>

//         {/* Hero image */}
//         <div className="h-64 sm:h-96 w-full rounded-xl mb-10 overflow-hidden">
//           <img
//             src={caseStudy.image}
//             alt={caseStudy.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-10">
//           <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
//             Overview
//           </h2>
//           <p className="text-gray-600 leading-relaxed whitespace-pre-line">
//             {caseStudy.description}
//           </p>
//         </div>

//         {/* CTA */}
//         <div className="bg-[#f7f8fc] rounded-xl p-8 text-center">
//           <h3 className="text-lg font-semibold text-[#1e1e2d] mb-2">
//             Want results like this for your website?
//           </h3>
//           <Link
//             to="/contacts"
//             className="inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-6 py-2.5 hover:bg-[#1467c0] transition-all duration-200 mt-3"
//           >
//             Get Free Consultation
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CaseStudyDetail;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";
import { stripHtml } from "./Striphtml";

const API_URL = "https://www.zwolfconsultancy.com/api/case-studies";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/1200x700?text=Case+Study";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${API_URL}/${slug}`);
        const rawText = await res.text();

        let json = {};

        try {
          json = rawText ? JSON.parse(rawText) : {};
        } catch {
          throw new Error(
            `Server returned an unexpected response (status ${res.status}).`
          );
        }

        if (!res.ok || !json.success) {
          throw new Error(
            json.message ||
              `Failed to fetch case study (status ${res.status})`
          );
        }

        console.log("========== CASE STUDY ==========");
        console.log("CASE STUDY:", json.data);
        console.log("TITLE:", json.data?.title);
        console.log("OLD IMAGE:", json.data?.image);
        console.log("NEW IMAGES:", json.data?.images);

        setCaseStudy(json.data);
      } catch (err) {
        console.error("fetchCaseStudy error:", err);

        setError(
          err.message || "Could not load this case study."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />

        <p className="text-sm text-gray-500">
          Loading case study...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error || !caseStudy) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 text-center">
        <p className="text-red-600 mb-4">
          {error || "Case study not found."}
        </p>

        <Link
          to="/case-study"
          className="text-[#5aa6f8] font-medium hover:underline"
        >
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  /* =====================================================
     CASE STUDY TITLE
  ===================================================== */

  const caseStudyTitle =
    caseStudy.title?.trim() || "Case Study";

  /* =====================================================
     DESCRIPTION
  ===================================================== */

  const plainDescription = stripHtml(
    caseStudy.description || ""
  );

  const metaDescription =
    plainDescription.slice(0, 160) ||
    `Read the ${caseStudyTitle} case study by ZWOLF Consultancy.`;

  /* =====================================================
     PAGE URL
  ===================================================== */

  const pageUrl =
    `https://www.zwolfconsultancy.com/case-study/${caseStudy.slug}`;

  /* =====================================================
     OLD + NEW IMAGES
  ===================================================== */

  const allImages = [
    /* OLD DATABASE IMAGE */

    ...(caseStudy.image
      ? [
          {
            url: caseStudy.image,
            fileId: caseStudy.imageFileId || null,
            source: "old-image",
          },
        ]
      : []),

    /* NEW DATABASE IMAGES ARRAY */

    ...(Array.isArray(caseStudy.images)
      ? caseStudy.images
          .filter((img) => img?.url)
          .map((img) => ({
            ...img,
            source: "images-array",
          }))
      : []),
  ];

  /* =====================================================
     REMOVE DUPLICATE IMAGES
  ===================================================== */

  const uniqueImages = Array.from(
    new Map(
      allImages.map((img) => [img.url, img])
    ).values()
  );

  /* =====================================================
     HERO IMAGE
  ===================================================== */

  const heroImage =
    uniqueImages[0]?.url || FALLBACK_IMAGE;

  console.log("========== FINAL DATA ==========");
  console.log("TITLE:", caseStudyTitle);
  console.log("ALL IMAGES:", allImages);
  console.log("UNIQUE IMAGES:", uniqueImages);
  console.log("HERO IMAGE:", heroImage);

  return (
    <>
      {/* =====================================================
          SEO / HELMET
      ===================================================== */}

      <Helmet>

        {/* Browser Title */}

        <title>
          {caseStudyTitle}
        </title>

        {/* Meta Description */}

        <meta
          name="description"
          content={metaDescription}
        />

        {/* Keywords */}

        <meta
          name="keywords"
          content={`${caseStudyTitle}, case study, web development case study, ZWOLF Consultancy`}
        />

        {/* Canonical */}

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* =================================================
            OPEN GRAPH
        ================================================= */}

        <meta
          property="og:title"
          content={caseStudyTitle}
        />

        <meta
          property="og:description"
          content={metaDescription}
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:image"
          content={heroImage}
        />

        <meta
          property="og:site_name"
          content="ZWOLF Consultancy"
        />

        {/* =================================================
            TWITTER
        ================================================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={caseStudyTitle}
        />

        <meta
          name="twitter:description"
          content={metaDescription}
        />

        <meta
          name="twitter:image"
          content={heroImage}
        />

        {/* =================================================
            JSON-LD
        ================================================= */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",

            headline: caseStudyTitle,

            description: metaDescription,

            image: uniqueImages.map(
              (img) => img.url
            ),

            author: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },

            publisher: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },

            datePublished: caseStudy.createdAt,

            dateModified: caseStudy.updatedAt,

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl,
            },
          })}
        </script>

      </Helmet>

      {/* =====================================================
          PAGE
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">

        {/* ================= BACK ================= */}

        <Link
          to="/case-study"
          className="inline-flex items-center text-sm text-[#5aa6f8] font-medium hover:underline mb-6"
        >
          ← Back to Case Studies
        </Link>

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          {caseStudy.createdAt && (
            <span className="text-xs font-semibold text-[#5aa6f8] uppercase tracking-wide">
              {new Date(
                caseStudy.createdAt
              ).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}

          {/* DATABASE TITLE */}

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d] mt-2 mb-3">
            {caseStudyTitle}
          </h1>

        </div>

        {/* =====================================================
            HERO IMAGE
        ===================================================== */}

        <div className="h-64 sm:h-96 w-full rounded-xl mb-8 overflow-hidden bg-gray-100">

          <img
            src={heroImage}
            alt={caseStudyTitle}
                onClick={() => setSelectedImage(heroImage)}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(
                "Hero image failed:",
                heroImage
              );

              e.currentTarget.onerror = null;
              e.currentTarget.src =
                FALLBACK_IMAGE;
            }}
          />

        </div>

        {/* =====================================================
            IMAGE GALLERY
        ===================================================== */}

        {uniqueImages.length > 1 && (
          <div className="mb-12">

           

            {/* Horizontal Scroll */}

            <div className="w-full overflow-x-auto overflow-y-hidden pb-4">

              <div className="flex flex-nowrap gap-5 w-max">

                {uniqueImages
                  .slice(1)
                  .map((img, index) => (

                    <div
                      key={
                        img._id ||
                        img.fileId ||
                        img.url ||
                        index
                      }
                      className="
                        flex-shrink-0
                        w-[280px]
                        sm:w-[340px]
                        md:w-[380px]
                        h-[200px]
                        sm:h-[230px]
                        md:h-[250px]
                        rounded-xl
                        overflow-hidden
                        bg-gray-100
                        border
                        border-gray-100
                        shadow-sm
                      "
                    >

                      <img
                        src={img.url}
                        alt={`${caseStudyTitle} - Image ${
                          index + 2
                        }`}
                        loading="lazy"
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-300
                        "
                        onClick={() => setSelectedImage(img.url)}
                        onError={(e) => {
                          console.error(
                            "Gallery image failed:",
                            img.url
                          );
                          
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            FALLBACK_IMAGE;
                        }}
                      />

                    </div>

                  ))}

              </div>

            </div>

            <p className="text-xs text-gray-400 mt-2">
              {uniqueImages.length} project image
              {uniqueImages.length !== 1
                ? "s"
                : ""}
            </p>

          </div>
        )}

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <div className="mb-10">

          <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
            Overview
          </h2>

          <div
            className="case-study-content text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                caseStudy.description || "",
            }}
          />

        </div>

        {/* =====================================================
            CONTENT CSS
        ===================================================== */}

        <style>{`

          .case-study-content h1 {
            font-size: 2rem;
            line-height: 1.25;
            font-weight: 700;
            color: #1e1e2d;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .case-study-content h2 {
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: 700;
            color: #1e1e2d;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .case-study-content h3 {
            font-size: 1.25rem;
            line-height: 1.35;
            font-weight: 600;
            color: #1e1e2d;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .case-study-content p {
            margin-bottom: 1rem;
          }

          .case-study-content strong,
          .case-study-content b {
            font-weight: 700;
            color: #1e1e2d;
          }

          .case-study-content em,
          .case-study-content i {
            font-style: italic;
          }

          .case-study-content u {
            text-decoration: underline;
          }

          .case-study-content s,
          .case-study-content strike {
            text-decoration: line-through;
          }

          .case-study-content a {
            color: #5aa6f8;
            text-decoration: underline;
            font-weight: 500;
          }

          .case-study-content a:hover {
            color: #1467c0;
          }

          .case-study-content ul {
            list-style: disc;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
          }

          .case-study-content ol {
            list-style: decimal;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
          }

          .case-study-content li {
            margin-bottom: 0.25rem;
          }

          .case-study-content blockquote {
            border-left: 4px solid #5aa6f8;
            padding-left: 1rem;
            font-style: italic;
            color: #4b5563;
            margin: 1rem 0;
          }

          .case-study-content code,
          .case-study-content pre {
            background: #f3f4f6;
            border-radius: 4px;
            font-family: monospace;
          }

          .case-study-content code {
            padding: 0.15rem 0.4rem;
            font-size: 0.9em;
          }

          .case-study-content pre {
            padding: 1rem;
            overflow-x: auto;
            margin-bottom: 1rem;
          }

          .case-study-content sub {
            vertical-align: sub;
            font-size: smaller;
          }

          .case-study-content sup {
            vertical-align: super;
            font-size: smaller;
          }

        `}</style>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="bg-[#f7f8fc] rounded-xl p-8 text-center">

          <h3 className="text-lg font-semibold text-[#1e1e2d] mb-2">
            Want results like this for your website?
          </h3>

          <Link
            to="/contacts"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#5aa6f8]
              text-white
              font-semibold
              text-sm
              rounded-full
              px-6
              py-2.5
              hover:bg-[#1467c0]
              transition-all
              duration-200
              mt-3
            "
          >
            Get Free Consultation
          </Link>

        </div>

      </section>
      {/* =====================================================
    IMAGE PREVIEW MODAL
===================================================== */}

{selectedImage && (
  <div
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    {/* Close Button */}
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="
        absolute
        top-5
        right-5
        z-10
        w-10
        h-10
        rounded-full
        bg-white/20
        hover:bg-white/30
        text-white
        text-2xl
        flex
        items-center
        justify-center
        transition
      "
      aria-label="Close image"
    >
      ×
    </button>

    {/* Full Image */}
    <img
      src={selectedImage}
      alt={caseStudyTitle}
      className="
        max-w-full
        max-h-[90vh]
        object-contain
        rounded-lg
        shadow-2xl
        cursor-zoom-out
      "
      onClick={(e) => e.stopPropagation()}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = FALLBACK_IMAGE;
      }}
    />
  </div>
)}
    </>
  );
};

export default CaseStudyDetail;