import React from 'react'
import Hero from '../../ui/hero/Hero';
import About from '../../ui/about/About';
import Services from '../../ui/service/Services';
import WhyChooseUs from '../../ui/whochoose/WhyChooseUs';
import LatestBlog from '../../ui/blog/LatestBlog';
import TestimonialSlider from '../../ui/testimonial/TestimonialSlider';

const HomePage = () => {
  return (
    <div>
	<Hero />
  <About />
  <Services />
  <WhyChooseUs />
  <TestimonialSlider />
  <LatestBlog />
    </div>
  )
}

export default HomePage