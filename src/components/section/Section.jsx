import React from 'react'

const Section = ({text}) => {
  return (
    <div className='pt-32 bg-[#053B4A] flex items-center justify-center text-center pb-12 text-4xl md:text-6xl font-bold text-amber-100'>
      {text}
    </div>
  )
}

export default Section