import React from 'react'
import { Section } from '../../components'
import { Footer } from '../../components'

const Whoweare = () => {
  return (
    <>
      <Section
      text="Who we are"
      />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center text-center w-full bg-green-200 text-xl hover:bg-green-100 py-16 px-8'>
          <h3 className='font-bold'>Our Team</h3>
          <p>PortaLaw serves businesses, nonprofits, law firms and individual employees. Meet the individuals who make up PortaLaw.</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-full bg-blue-200 text-xl hover:bg-blue-100 py-16 px-8'>
          <h3 className='font-bold'>Our Blueprint</h3>
          <p>The PortaLaw Blueprint is a map of the most fundamental parts of PortaLaw.</p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Whoweare