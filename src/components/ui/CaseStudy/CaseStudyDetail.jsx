import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";

const API_URL = "https://www.zwolfconsultancy.com/api/case-studies";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_URL}/${slug}`);
        const rawText = await res.text();

        let json;
        try {
          json = rawText ? JSON.parse(rawText) : {};
        } catch {
          throw new Error(`Server returned an unexpected response (status ${res.status}).`);
        }

        if (!res.ok || !json.success) {
          throw new Error(json.message || `Failed to fetch case study (status ${res.status})`);
        }

        setCaseStudy(json.data);
      } catch (err) {
        console.error("fetchCaseStudy error:", err);
        setError(err.message || "Could not load this case study.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center justify-center py-24">
        <Loader2 className="h-8 w-8 text-[#5aa6f8] animate-spin mb-3" />
        <p className="text-sm text-gray-500">Loading case study...</p>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16 text-center">
        <p className="text-red-600 mb-4">{error || "Case study not found."}</p>
        <Link to="/case-study" className="text-[#5aa6f8] font-medium hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  const pageUrl = `https://www.zwolfconsultancy.com/case-study/${caseStudy.slug}`;

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} | ZWOLF Consultancy Case Study</title>
        <meta name="description" content={caseStudy.description} />
        <meta
          name="keywords"
          content={`${caseStudy.title}, web development case study, ZWOLF Consultancy`}
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={caseStudy.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={caseStudy.title} />
        <meta name="twitter:description" content={caseStudy.description} />
        <meta name="twitter:image" content={caseStudy.image} />

        {/* Structured Data - JSON-LD for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: caseStudy.title,
            description: caseStudy.description,
            image: caseStudy.image,
            author: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },
            publisher: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },
            datePublished: caseStudy.createdAt,
          })}
        </script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/case-study"
          className="inline-flex items-center text-sm text-[#5aa6f8] font-medium hover:underline mb-6"
        >
          ← Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-8">
          {caseStudy.createdAt && (
            <span className="text-xs font-semibold text-[#5aa6f8] uppercase tracking-wide">
              {new Date(caseStudy.createdAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d] mt-2 mb-3">
            {caseStudy.title}
          </h1>
        </div>

        {/* Hero image */}
        <div className="h-64 sm:h-96 w-full rounded-xl mb-10 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {caseStudy.description}
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#f7f8fc] rounded-xl p-8 text-center">
          <h3 className="text-lg font-semibold text-[#1e1e2d] mb-2">
            Want results like this for your website?
          </h3>
          <Link
            to="/contacts"
            className="inline-flex items-center justify-center bg-[#5aa6f8] text-white font-semibold text-sm rounded-full px-6 py-2.5 hover:bg-[#1467c0] transition-all duration-200 mt-3"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;