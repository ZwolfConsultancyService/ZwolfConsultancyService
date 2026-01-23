import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Banson Doe",
    role: "Horizon Ventures",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    name: "Arita Banson",
    role: "Delta Innovation",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    name: "John Doe",
    role: "Acme Solutions",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review: "The service was excellent and exceeded my expectations!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    review: "Highly recommend them for their professionalism.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Project Manager",
    review: "Timely delivery and great communication throughout.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle navigation clicks
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-[#f7f8fc] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-[#5aa6f8] font-medium mb-2">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl  text-gray-900">
            Our customers love us.
          </h2>
        </div>

        <div className="relative">
          <Swiper
            key={isMobile ? "mobile" : "desktop"}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  style={{ height: 320, width: "100%" }}
                >
                  {/* Stars */}
                  <div className="flex mb-4 text-orange-500">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-500 mb-6 overflow-hidden">
                    {t.review}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows (hidden on mobile) */}
          {!isMobile && (
            <>
              <button
                ref={prevRef}
                onClick={handlePrev}
                aria-label="Previous"
                className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 border transition-colors"
              >
                <FaArrowLeft />
              </button>
              <button
                ref={nextRef}
                onClick={handleNext}
                aria-label="Next"
                className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 border transition-colors"
              >
                <FaArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
