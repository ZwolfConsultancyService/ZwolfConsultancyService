import React from 'react'
import { Helmet } from "react-helmet-async";
import ContactForm from './ContactForm'
import ContactInfoCards from './ContactInfoCards'
import HeroContact from './HeroContact'

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Zwolf Consultancy | Website & SEO Company in Delhi</title>
        <meta 
          name="description" 
          content="Get in touch with Zwolf Consultancy, a leading Website Development and SEO Company in Delhi. Contact us for professional websites, SEO services, and business growth." 
        />
        <meta 
          name="keywords" 
          content="Contact Zwolf Consultancy, SEO Company Delhi, Website Development Delhi, Digital company Delhi, Web Design Company Contact, SEO Services Contact Delhi" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zwolf Consultancy" />
        <link rel="canonical" href="https://zwolfconsultancy.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zwolfconsultancy.com/contact" />
        <meta property="og:title" content="Contact Zwolf Consultancy | Website & SEO Company in Delhi" />
        <meta property="og:description" content="Get in touch with Zwolf Consultancy, a leading Website Development and SEO Company in Delhi. Contact us for professional websites, SEO services, and business growth." />
        <meta property="og:image" content="https://zwolfconsultancy.com/contact-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zwolfconsultancy.com/contact" />
        <meta property="twitter:title" content="Contact Zwolf Consultancy | Website & SEO Company in Delhi" />
        <meta property="twitter:description" content="Get in touch with Zwolf Consultancy, a leading Website Development and SEO Company in Delhi. Contact us for professional websites, SEO services, and business growth." />
        <meta property="twitter:image" content="https://zwolfconsultancy.com/contact-og-image.jpg" />

        {/* Structured Data - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Zwolf Consultancy",
            "description": "Get in touch with Zwolf Consultancy for Website Development and SEO Services in Delhi",
            "url": "https://zwolfconsultancy.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zwolf Consultancy",
              "url": "https://zwolfconsultancy.com",
              "logo": "https://zwolfconsultancy.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/zwolfconsultancy",
                "https://www.linkedin.com/company/zwolfconsultancy",
                "https://twitter.com/zwolfconsultancy"
              ]
            }
          })}
        </script>
      </Helmet>

      <div className='mt-2'>
        <HeroContact />
        <ContactInfoCards />
        <ContactForm />

        {/* Google Maps Section */}
        <div className='w-full mt-8 px-4 md:px-10 lg:px-20 pb-12'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Find Us Here</h2>
          <div className='w-full rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.514404203166!2d77.2759541497963!3d28.498254851596315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a661351b3d47225%3A0xe042acdef89d2e48!2sZwolf%20Consultancy!5e0!3m2!1sen!2sin!4v1772169208295!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zwolf Consultancy Location"
            ></iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact