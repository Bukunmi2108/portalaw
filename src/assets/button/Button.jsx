import React from 'react'

const Button = ({text, href}) => {
  return (
    <a href={href} className='p-4 text-center font-serif text-white
     bg-[#053B4A] hover:opacity-90'>
        {text}
    </a>
  )
}

export default Button