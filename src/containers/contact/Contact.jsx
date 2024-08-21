import React from 'react'
import { Section } from '../../components'
import { Footer } from '../../components'


const Contact = () => {
  return (
    <>
      <Section 
        text="Contact"
      />
      <div className='flex flex-col md:flex-row p-4 items-center md:items-start justify-center'>
        <div className='flex flex-col items-center justify-center p-4 gap-8'>
          <h3 className='text-center text-4xl'>Ready to book a meeting?</h3>
          <div className='flex flex-row gap-4 '>
            <a className='bg-[#053B4A] text-white p-6' href="mailto:bkakinyemi21@gmail.com">I'm already a client</a>
            <a className='bg-[#053B4A] text-white p-6 text-center' href="mailto:bkakinyemi21@gmail.com">I'm new to PortaLaw</a>
          </div>
          <p>Not sure what you need? <a className='underline' href="tel:09137099774">Ask us to contact you.</a></p>
        </div>

        <div className='flex flex-col items-center justify-center p-8'>
          <h3 className='font-bold font-serif text-xl'>
            Mailing Address
          </h3>
          <p className='text-center'>Suite 300, 225 West 8th Avenue
            Vancouver, BC V5Y 1N3 Canada</p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact