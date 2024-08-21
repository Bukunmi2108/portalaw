import React from 'react'
import { Logo } from '../../assets'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='mx-auto fixed w-full bg-orange-100 p-4 flex flex-col md:flex-row justify-between items-start md:items-center z-20'>
        <Logo />
        <ul className='hidden text-[#053B4A] font-bold text-center md:flex flex-col md:flex-row w-full md:w-fit my-4 md:m-0 gap-4 md:gap-0 transition-all'>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link to="/">Home</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link to="/whoweare">Who we are</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link to="/whowehelp">Who we help</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link to="/resources">Resources</Link>
          </li>
          <li className='px-4 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link className=' hidden md:flex bg-[#053B4A] p-4 text-white font-serif w-full md:w-fit text-center hover:opacity-90' href="#" to='/contact' >Book a Meeting</Link>
        {
          isOpen &&        <ul className='flex text-[#053B4A] font-bold text-center md:hidden flex-col md:flex-row w-full md:w-fit my-4 md:m-0 gap-4 md:gap-0 transition-all'>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link onClick={handleClick} to="/">Home</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link onClick={handleClick} to="/whoweare">Who we are</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link onClick={handleClick} to="/whowehelp">Who we help</Link>
          </li>
          <li className='px-4 md:border-r-2 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link onClick={handleClick} to="/resources">Resources</Link>
          </li>
          <li className='px-4 border-r-[#053B4A] hover:p-4 hover:bg-[#053B4A] hover:text-white md:hover:p-0 md:hover:px-4 md:hover:underline md:hover:text-black md:hover:bg-transparent transition duration-300'>
          <Link onClick={handleClick} to="/contact">Contact</Link>
          </li>
        </ul>
        }

        {
          isOpen &&             <Link className='flex md:hidden bg-[#053B4A] p-4 text-white font-serif w-full md:w-fit text-center hover:opacity-90 items-center justify-center' onClick={handleClick} to='/contact'>Book a Meeting</Link>
        }

        <button onClick={handleClick} className='absolute top-2 right-8 p-4 hover:border-2 border-white md:hidden'>
          {!isOpen? 
        <CiMenuBurger className='' style={{'fontSize': '32px'}} /> :
        <IoCloseOutline className='' style={{'fontSize': '36px'}} />}
        </button>
      </div>

      <Outlet />
    </>
  )
}

export default Navbar