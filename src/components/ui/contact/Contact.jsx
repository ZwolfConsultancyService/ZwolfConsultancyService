// import React from 'react'
// import ContactForm from './ContactForm'
// import ContactInfoCards from './ContactInfoCards'
// import HeroContact from './HeroContact'


// const Contact = () => {
//   return (
//     <div className='mt-2'>
// 	<HeroContact />
// 	<ContactInfoCards />
//       <ContactForm />
//     </div>
//   )
// }

// export default Contact




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
      </div>
    </>
  )
}

export default Contact