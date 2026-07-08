import React from "react";
import { Link } from "react-router-dom";
import { caseStudyData } from "./caseStudyData";

const CaseStudy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e2d]">
          Case Studies
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore how we've helped businesses grow with custom web development solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudyData.map((item) => (
          <Link
            key={item.id}
            to={`/case-study/${item.slug}`}
            className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            <div className="h-44 w-full overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-[#5aa6f8] mb-1 uppercase tracking-wide">
                {item.industry} • {item.year}
              </span>

              <h3 className="font-semibold text-lg text-[#1e1e2d] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {item.summary}
              </p>

              <span className="text-sm font-medium text-[#5aa6f8] hover:underline">
                Read Case Study →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;