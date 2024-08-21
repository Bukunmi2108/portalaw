import React from 'react'
import { Section } from '../../components'
import { Footer } from '../../components'

const Whoweare = () => {
  return (
    <>
      <Section
      text="Who we help"
      />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center text-center w-full bg-amber-200 text-xl hover:bg-amber-100 py-16 px-8'>
          <h3 className='font-bold'>Business & Nonprofits</h3>
          <p>PortaLaw provides custom-tailored advice and solutions for your business or nonprofit.</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-full bg-blue-200 text-xl hover:bg-blue-100 py-16 px-8'>
          <h3 className='font-bold'>Employees & Contractors</h3>
          <p>We represent management employees, executives and contractors in legal disputes arising from the beginning to the very end of the employment relationship.</p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Whoweare