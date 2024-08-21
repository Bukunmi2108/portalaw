import React from 'react'
import { Button } from '../../assets'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-100 text-black p-4 flex flex-col md:flex-row gap-4 items-center justify-center'>
      <div className='bg-white p-8 rounded text-center flex flex-col gap-4 w-full'>
        <div>
          <p>
            300 - 225 West 8th Avenue
          </p>
          <p>
          Vancouver, BC  V5Y 1N3
          </p>
        </div>
        <div className='flex flex-col'>
          <a className='underline underline-offset-4' href="tel:+2349137099774">
            09137099774
          </a>
          <a className='underline underline-offset-4' href="mailto:hello@portalaw.ca">
          hello@portalaw.ca
          </a>
        </div>
        <Button
          text={'Book a Meeting'}
        />
      </div>
      <div className='bg-white p-8 rounded text-center flex flex-col gap-4 w-full'>
        <h3 className='font-bold text-xl'>PortaNews</h3>
        <p>
          Subscribe for legal tips
          delivered to your inbox
        </p>
        <Button
          text={"Subscribe"}
          href={"#"}
        />
      </div>
      </div>
      <div className='flex p-8 items-center justify-center text-gray-600'>Copyright c. .<span className='text-red-500'>Bukunmi Akinyemi</span></div>
    </div>
  )
}

export default Footer