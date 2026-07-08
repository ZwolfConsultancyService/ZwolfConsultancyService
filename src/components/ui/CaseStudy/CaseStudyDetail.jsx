import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { caseStudyData } from "./caseStudyData";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudyData.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-study" replace />;
  }

  const pageUrl = `https://yourdomain.com/case-study/${caseStudy.slug}`;

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} | ZWOLF Consultancy Case Study</title>
        <meta name="description" content={caseStudy.summary} />
        <meta
          name="keywords"
          content={`${caseStudy.industry}, ${caseStudy.client}, web development case study, ZWOLF Consultancy`}
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={caseStudy.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={caseStudy.title} />
        <meta name="twitter:description" content={caseStudy.summary} />
        <meta name="twitter:image" content={caseStudy.image} />

        {/* Structured Data - JSON-LD for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: caseStudy.title,
            description: caseStudy.summary,
            image: caseStudy.image,
            author: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },
            publisher: {
              "@type": "Organization",
              name: "ZWOLF Consultancy",
            },
            datePublished: caseStudy.year,
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
          <span className="text-xs font-semibold text-[#5aa6f8] uppercase tracking-wide">
            {caseStudy.industry} • {caseStudy.year}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d] mt-2 mb-3">
            {caseStudy.title}
          </h1>
          <p className="text-gray-600">{caseStudy.summary}</p>
        </div>

        {/* Hero image */}
        <div className="h-64 sm:h-96 w-full rounded-xl mb-10 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-5">
          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">Client</p>
            <p className="font-medium text-[#1e1e2d]">{caseStudy.client}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">Industry</p>
            <p className="font-medium text-[#1e1e2d]">{caseStudy.industry}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">Duration</p>
            <p className="font-medium text-[#1e1e2d]">{caseStudy.duration}</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
            The Challenge
          </h2>
          <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
            Our Solution
          </h2>
          <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
        </div>

        {/* Results */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-[#1e1e2d] mb-3">
            Results
          </h2>
          <ul className="space-y-2">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <span className="text-[#5aa6f8] font-bold mt-0.5">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
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