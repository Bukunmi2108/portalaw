import React from 'react'

import { Footer } from '../../components'

const Home = () => {
  return (<>
    <h1 className='pt-32 pb-12 px-4 font-bold text-3xl text-center'>
      We are employment and human rights lawyers solving your problems at work.
    </h1>
    <div className='flex flex-col md:flex-row items-center'>
      <div className='flex items-center justify-center text-center w-full bg-green-200 h-48 font-bold text-xl hover:bg-green-100'>Business + Nonprofits</div>
      <div className='flex items-center justify-center text-center w-full bg-blue-200 h-48 font-bold text-xl hover:bg-blue-100'>Employees + Contractors</div>
      <div className='flex items-center justify-center text-center w-full bg-pink-200 h-48 font-bold text-xl hover:bg-pink-100'>Resources</div>
    </div>
    <Footer />
  </>)
}

export default Home