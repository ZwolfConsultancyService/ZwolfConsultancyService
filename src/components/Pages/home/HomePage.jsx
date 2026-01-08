import React from 'react'
import Hero from '../../ui/hero/Hero';
import About from '../../ui/about/About';
import Services from '../../ui/service/Services';
import WhyChooseUs from '../../ui/whochoose/WhyChooseUs';
import LatestBlog from '../../ui/blog/LatestBlog';
import TestimonialSlider from '../../ui/testimonial/TestimonialSlider';
import EsteemedClients from '../../ui/portfolio/EsteemedClients';
import OurPortfolio from '../../ui/portfolio/OurPortfolio';

const HomePage = () => {
  return (
    <div>
	<Hero />
  <About />
  <Services />
  <EsteemedClients />
  <WhyChooseUs />
  {/* <OurPortfolio /> */}
  <TestimonialSlider />
  <LatestBlog />
    </div>
  )
}

export default HomePage