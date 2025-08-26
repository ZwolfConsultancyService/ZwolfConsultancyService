import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Masonry from "react-masonry-css";

const OurPortfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    "https://storage.googleapis.com/a1aa/image/e878fed7-8adb-4cb8-0e4f-cae39e98d166.jpg",
    "https://storage.googleapis.com/a1aa/image/3c622e2e-15f6-4c22-8847-a6512f1f43e6.jpg",
    "https://storage.googleapis.com/a1aa/image/cc6035b6-9507-4cf0-81a4-aa5283dfdfcd.jpg",
    "https://storage.googleapis.com/a1aa/image/299eb0d1-2f71-4ada-b922-051b525415dd.jpg",
    "https://storage.googleapis.com/a1aa/image/0b3a98dc-dd4f-4c34-4d4f-980650e117a0.jpg",
    "https://storage.googleapis.com/a1aa/image/71b1b766-7827-449f-fd89-4bfba489afa3.jpg",
    "https://storage.googleapis.com/a1aa/image/f9e490ce-3a27-4a0e-5d3b-d6bd11d07907.jpg",
    "https://storage.googleapis.com/a1aa/image/889b824e-60f7-4855-cb4b-19164dd41fd1.jpg",
    "https://storage.googleapis.com/a1aa/image/bd31ea4b-a776-46e9-5f5a-4d72f288665e.jpg",
    "https://storage.googleapis.com/a1aa/image/5186ad37-1a6b-44ac-ed72-952b8e470db0.jpg",
    "https://storage.googleapis.com/a1aa/image/43d0add1-7541-43c1-415b-7ef977a4dc37.jpg",
    "https://storage.googleapis.com/a1aa/image/cb234b63-495d-49e2-e550-5d69ba4908c1.jpg",
    "https://storage.googleapis.com/a1aa/image/6b139baf-b33b-4e3a-dfda-e65497b6e176.jpg",
    "https://storage.googleapis.com/a1aa/image/2bddb4c3-ba67-4ddb-c16e-7ecef713f3b3.jpg",
    "https://storage.googleapis.com/a1aa/image/1c3d28eb-d1c5-40d1-8c2f-737441c7802e.jpg",
    "https://storage.googleapis.com/a1aa/image/37e37ca9-20cb-4f36-0717-e93654981786.jpg",
    "https://storage.googleapis.com/a1aa/image/714d7a6f-4f4c-48a6-806f-381a2103b0d0.jpg",
    "https://storage.googleapis.com/a1aa/image/b9470973-ce8f-4cd8-456a-9d8a582a8c7e.jpg",
    "https://storage.googleapis.com/a1aa/image/d8d6538f-b835-4f5d-1070-49e4ce774d0b.jpg",
    "https://storage.googleapis.com/a1aa/image/c587909d-3d86-407a-a07b-bead1252a1d1.jpg",
  ];


  const visibleImages =
    isMobile && !showAll ? images.slice(0, 6) : images;

  // breakpoints / columns for masonry
  const breakpointColumnsObj = {
    default: 5,
    1024: 4,
    768: 2,
  };

  return (
    <section className="bg-[#f9fafb] py-12 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 font-semibold md:font-bold text-3xl md:text-4xl xl:text-5xl mb-8">
          Our Portfolio
        </h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="masonry-column"
        >
          {visibleImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              data-aos="fade-up"
              alt="Portfolio"
              className="w-full mb-2 object-cover rounded transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            />
          ))}
        </Masonry>

        {isMobile && !showAll && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 rounded-md bg-gray-800 text-white"
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurPortfolio;
