import React from 'react'
import ContactForm from './ContactForm'
import ContactInfoCards from './ContactInfoCards'
import HeroContact from './HeroContact'


const Contact = () => {
  return (
    <div className='mt-2'>
	<HeroContact />
	<ContactInfoCards />
      <ContactForm />
    </div>
  )
}

export default Contact