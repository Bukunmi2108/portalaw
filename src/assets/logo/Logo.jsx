import React from 'react'
import logo from './logo.png'; 


const Logo = () => {
  return (
    <div>
        <img className='md:w-full w-48 md:h-full' src={logo} alt="Our Logo" />
    </div>
  )
}

export default Logo