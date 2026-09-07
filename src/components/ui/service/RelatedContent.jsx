import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaBriefcase,
} from "react-icons/fa";

// =====================================================
// API CONFIG
// =====================================================

const RAW_API_URL =
  import.meta.env.VITE_API_BASE_URL || "";

const API_URL = RAW_API_URL.replace(/\/$/, "");

// =====================================================
// SERVICE -> CATEGORY MAPPING
// =====================================================

const SERVICE_CATEGORY_MAP = {
  "website-development-company":
    "website-development",

  "mobile-app-development-company":
    "mobile-app-development",

  "graphic-designing-company":
    "graphic-designing",

  "digital-marketing-company":
    "digital-marketing",

  "business-consultation-company":
    "business-consultation",

  "cloud-hosting-services-company":
    "cloud-hosting-services",

  "lead-generation-company":
    "lead-generation",

  "software-development-company":
    "software-development",

  "seo-services-company":
    "seo-services",
};

// =====================================================
// CREATE SLUG
// =====================================================
// BlogDetail bhi title ko isi tarah slug mein convert karta hai.
// Isliye Related Blog ka URL BlogDetail ke URL se match karega.

const createSlug = (title) => {
  return String(title || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// =====================================================
// GET SERVICE CATEGORY
// =====================================================

const getServiceCategory = (service) => {
  if (!service) return "";

  // 1. Explicit mapping
  if (
    service.slug &&
    SERVICE_CATEGORY_MAP[service.slug]
  ) {
    return SERVICE_CATEGORY_MAP[service.slug];
  }

  // 2. categorySlug
  if (service.categorySlug) {
    return String(service.categorySlug)
      .trim()
      .toLowerCase();
  }

  // 3. categoryId
  if (service.categoryId) {
    return String(service.categoryId)
      .trim()
      .toLowerCase();
  }

  // 4. Slug itself
  if (service.slug) {
    return String(service.slug)
      .replace(/-company$/, "")
      .trim()
      .toLowerCase();
  }

  return "";
};

// =====================================================
// CATEGORY MATCHING
// =====================================================

const hasMatchingCategory = (
  item,
  category
) => {
  if (!item || !category) return false;

  if (!Array.isArray(item.categories)) {
    return false;
  }

  const targetCategory =
    String(category)
      .trim()
      .toLowerCase();

  return item.categories.some(
    (itemCategory) => {

      // New structure:
      // ["website-development"]

      if (
        typeof itemCategory === "string"
      ) {
        return (
          itemCategory
            .trim()
            .toLowerCase() ===
          targetCategory
        );
      }

      // Old structure:
      // [{ slug: "website-development" }]

      if (
        itemCategory &&
        typeof itemCategory === "object"
      ) {
        const value =
          itemCategory.slug ||
          itemCategory.id ||
          itemCategory._id;

        return (
          String(value)
            .trim()
            .toLowerCase() ===
          targetCategory
        );
      }

      return false;
    }
  );
};

// =====================================================
// SAFE JSON FETCH
// =====================================================

const fetchJSON = async (
  url,
  signal
) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  const contentType =
    response.headers.get(
      "content-type"
    ) || "";

  if (
    !contentType.includes(
      "application/json"
    )
  ) {
    const text =
      await response.text();

    console.error(
      "Expected JSON but received:",
      {
        url,
        status: response.status,
        contentType,
        response: text.slice(0, 300),
      }
    );

    throw new Error(
      `API did not return JSON. Check API URL: ${url}`
    );
  }

  const result =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ||
        `Request failed with status ${response.status}`
    );
  }

  return result;
};

// =====================================================
// MAIN COMPONENT
// =====================================================

const RelatedContent = ({
  service,
  maxBlogs = 3,
  maxCaseStudies = 3,
}) => {
  const [blogs, setBlogs] =
    useState([]);

  const [caseStudies, setCaseStudies] =
    useState([]);

  const [loadingBlogs, setLoadingBlogs] =
    useState(true);

  const [
    loadingCaseStudies,
    setLoadingCaseStudies,
  ] = useState(true);

  const [errorBlogs, setErrorBlogs] =
    useState(false);

  const [
    errorCaseStudies,
    setErrorCaseStudies,
  ] = useState(false);

  // ===================================================
  // CURRENT SERVICE CATEGORY
  // ===================================================

  const category = useMemo(
    () =>
      getServiceCategory(service),
    [service]
  );

  // ===================================================
  // FETCH RELATED CONTENT
  // ===================================================

  useEffect(() => {
    if (!category) {
      setBlogs([]);
      setCaseStudies([]);
      setLoadingBlogs(false);
      setLoadingCaseStudies(false);
      return;
    }

    const controller =
      new AbortController();

    const fetchRelatedContent =
      async () => {
        setLoadingBlogs(true);
        setLoadingCaseStudies(true);

        setErrorBlogs(false);
        setErrorCaseStudies(false);

        // =============================================
        // BLOG API
        // =============================================

        const blogsURL =
          `${API_URL}/api/blogs/fetch` +
          `?categories=${encodeURIComponent(
            category
          )}` +
          `&limit=${maxBlogs}`;

        // =============================================
        // CASE STUDY API
        // =============================================

        const caseStudiesURL =
          `${API_URL}/api/case-studies` +
          `?categories=${encodeURIComponent(
            category
          )}` +
          `&limit=${maxCaseStudies}`;

        console.log(
          "================================"
        );

        console.log(
          "Related Content"
        );

        console.log(
          "Service:",
          service?.title
        );

        console.log(
          "Service Slug:",
          service?.slug
        );

        console.log(
          "Category:",
          category
        );

        console.log(
          "Blogs URL:",
          blogsURL
        );

        console.log(
          "Case Studies URL:",
          caseStudiesURL
        );

        console.log(
          "================================"
        );

        // =============================================
        // FETCH BOTH IN PARALLEL
        // =============================================

        const [
          blogResult,
          caseStudyResult,
        ] = await Promise.allSettled([
          fetchJSON(
            blogsURL,
            controller.signal
          ),

          fetchJSON(
            caseStudiesURL,
            controller.signal
          ),
        ]);

        // =============================================
        // BLOG RESULT
        // =============================================

        if (
          blogResult.status ===
          "fulfilled"
        ) {
          const blogData =
            Array.isArray(
              blogResult.value?.data
            )
              ? blogResult.value.data
              : [];

          // Extra category safety
          const filteredBlogs =
            blogData.filter(
              (blog) =>
                hasMatchingCategory(
                  blog,
                  category
                )
            );

          setBlogs(
            filteredBlogs.slice(
              0,
              maxBlogs
            )
          );
        } else if (
          blogResult.reason?.name !==
          "AbortError"
        ) {
          console.error(
            "Related blogs error:",
            blogResult.reason
          );

          setErrorBlogs(true);
          setBlogs([]);
        }

        setLoadingBlogs(false);

        // =============================================
        // CASE STUDY RESULT
        // =============================================

        if (
          caseStudyResult.status ===
          "fulfilled"
        ) {
          const caseStudyData =
            Array.isArray(
              caseStudyResult.value?.data
            )
              ? caseStudyResult.value.data
              : [];

          const filteredCaseStudies =
            caseStudyData.filter(
              (caseStudy) =>
                hasMatchingCategory(
                  caseStudy,
                  category
                )
            );

          setCaseStudies(
            filteredCaseStudies.slice(
              0,
              maxCaseStudies
            )
          );
        } else if (
          caseStudyResult.reason?.name !==
          "AbortError"
        ) {
          console.error(
            "Related case studies error:",
            caseStudyResult.reason
          );

          setErrorCaseStudies(true);
          setCaseStudies([]);
        }

        setLoadingCaseStudies(false);
      };

    fetchRelatedContent();

    return () => {
      controller.abort();
    };
  }, [
    category,
    maxBlogs,
    maxCaseStudies,
    service?.slug,
  ]);

  // ===================================================
  // NO CONTENT
  // ===================================================

  if (
    !loadingBlogs &&
    !loadingCaseStudies &&
    blogs.length === 0 &&
    caseStudies.length === 0
  ) {
    return null;
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===========================================
            HEADER
        =========================================== */}

        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <span className="inline-block text-sm font-semibold text-[#5aa6f8] bg-blue-50 px-4 py-2 rounded-full mb-3">
            Related Resources
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Related{" "}
            {service?.title ||
              "Service"}{" "}
            Resources
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore case studies and blogs
            specifically related to{" "}
            <span className="font-semibold">
              {service?.title ||
                "this service"}
            </span>
            .
          </p>
        </div>

        {/* ===========================================
            CASE STUDIES
        =========================================== */}

        {(loadingCaseStudies ||
          caseStudies.length > 0) && (
          <div className="mb-16">

            <div className="flex items-center justify-between mb-6">

              <div className="flex items-center gap-3">

                <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Related Case Studies
                  </h3>

                  <p className="text-sm text-gray-500">
                    Projects related to this
                    service
                  </p>
                </div>

              </div>

              <Link
                to="/case-studies"
                className="hidden sm:flex items-center gap-2 text-[#5aa6f8] font-medium hover:gap-3 transition-all"
              >
                View All
                <FaArrowRight className="text-sm" />
              </Link>

            </div>

            {loadingCaseStudies ? (
              <LoadingCards />
            ) : caseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {caseStudies.map(
                  (caseStudy) => (
                    <CaseStudyCard
                      key={
                        caseStudy._id ||
                        caseStudy.id
                      }
                      caseStudy={
                        caseStudy
                      }
                    />
                  )
                )}

              </div>
            ) : null}

            {!loadingCaseStudies &&
              caseStudies.length > 0 && (
                <div className="mt-6 sm:hidden text-center">

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-[#5aa6f8] font-medium"
                  >
                    View All Case Studies
                    <FaArrowRight className="text-sm" />
                  </Link>

                </div>
              )}

          </div>
        )}

        {/* ===========================================
            BLOGS
        =========================================== */}

        {(loadingBlogs ||
          blogs.length > 0) && (
          <div>

            <div className="flex items-center justify-between mb-6">

              <div className="flex items-center gap-3">

                <div className="bg-[#5aa6f8] text-white p-3 rounded-xl">
                  <FaBookOpen />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Related Blogs
                  </h3>

                  <p className="text-sm text-gray-500">
                    Articles related to this
                    service
                  </p>
                </div>

              </div>

              <Link
                to="/blogs"
                className="hidden sm:flex items-center gap-2 text-[#5aa6f8] font-medium hover:gap-3 transition-all"
              >
                View All
                <FaArrowRight className="text-sm" />
              </Link>

            </div>

            {loadingBlogs ? (
              <LoadingCards />
            ) : blogs.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs.map((blog) => (
                  <BlogCard
                    key={
                      blog._id ||
                      blog.id
                    }
                    blog={blog}
                  />
                ))}

              </div>
            ) : null}

            {!loadingBlogs &&
              blogs.length > 0 && (
                <div className="mt-6 sm:hidden text-center">

                  <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-[#5aa6f8] font-medium"
                  >
                    View All Blogs
                    <FaArrowRight className="text-sm" />
                  </Link>

                </div>
              )}

          </div>
        )}

      </div>
    </section>
  );
};

// =====================================================
// BLOG CARD
// =====================================================

const BlogCard = ({ blog }) => {
  const image =
    blog?.images?.[0]?.url ||
    blog?.image ||
    "";

  // ===================================================
  // IMPORTANT
  // ===================================================
  // Backend ke existing blogs mein slug nahi hai.
  // Isliye title se slug generate kar rahe hain.
  //
  // "test updatr blogs"
  //        ↓
  // "test-updatr-blogs"
  // ===================================================

  const blogSlug =
    blog?.slug ||
    createSlug(blog?.title);

  console.log(
    "BLOG OBJECT:",
    blog
  );

  console.log(
    "BLOG SLUG:",
    blogSlug
  );

  return (
    <Link
      to={`/blogs/${blogSlug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
    >

      {/* Image */}

    

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center gap-2 mb-3 flex-wrap">

          <span className="text-xs font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full">
            Blog
          </span>

          {blog?.author && (
            <span className="text-xs text-gray-400">
              By {blog.author}
            </span>
          )}

        </div>

        <h4 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-[#5aa6f8] transition-colors">
          {blog?.title ||
            "Untitled Blog"}
        </h4>

        {blog?.excerpt && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-3">
            {stripHtml(
              blog.excerpt
            )}
          </p>
        )}

        <div className="mt-5 flex items-center gap-2 text-[#5aa6f8] text-sm font-medium">

          Read Article

          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

        </div>

      </div>
    </Link>
  );
};

// =====================================================
// CASE STUDY CARD
// =====================================================

const CaseStudyCard = ({
  caseStudy,
}) => {
  const image =
    caseStudy?.images?.[0]?.url ||
    caseStudy?.image ||
    "";

  const caseStudySlug =
    caseStudy?.slug ||
    caseStudy?._id ||
    caseStudy?.id;

  return (
    <Link
      to={`/case-study/${caseStudySlug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
    >

      {image ? (
        <div className="w-full h-52 overflow-hidden">

          <img
            src={image}
            alt={
              caseStudy?.title ||
              "Related case study"
            }
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

        </div>
      ) : (
        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">

          <FaBriefcase className="text-4xl text-gray-300" />

        </div>
      )}

      <div className="p-6">

        <span className="inline-block text-xs font-medium text-[#5aa6f8] bg-blue-50 px-3 py-1 rounded-full mb-3">
          Case Study
        </span>

        <h4 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-[#5aa6f8] transition-colors">
          {caseStudy?.title ||
            "Untitled Case Study"}
        </h4>

        {caseStudy?.description && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-3">
            {stripHtml(
              caseStudy.description
            )}
          </p>
        )}

        <div className="mt-5 flex items-center gap-2 text-[#5aa6f8] text-sm font-medium">

          View Case Study

          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

        </div>

      </div>
    </Link>
  );
};

// =====================================================
// LOADING CARDS
// =====================================================

const LoadingCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[1, 2, 3].map(
        (item) => (
          <div
            key={item}
            className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
          >

            <div className="h-52 bg-gray-200" />

            <div className="p-6">

              <div className="h-4 bg-gray-200 rounded w-20 mb-4" />

              <div className="h-6 bg-gray-200 rounded w-full mb-2" />

              <div className="h-6 bg-gray-200 rounded w-4/5 mb-4" />

              <div className="h-4 bg-gray-200 rounded w-full mb-2" />

              <div className="h-4 bg-gray-200 rounded w-3/4" />

            </div>
          </div>
        )
      )}

    </div>
  );
};

// =====================================================
// STRIP HTML
// =====================================================

const stripHtml = (
  html = ""
) => {
  if (
    typeof window ===
    "undefined"
  ) {
    return String(html)
      .replace(
        /<[^>]*>/g,
        " "
      )
      .replace(
        /\s+/g,
        " "
      )
      .trim();
  }

  const div =
    document.createElement(
      "div"
    );

  div.innerHTML = html;

  return (
    div.textContent ||
    div.innerText ||
    ""
  );
};

export default RelatedContent;
