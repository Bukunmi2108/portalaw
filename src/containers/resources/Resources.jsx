import React from 'react'
import { Section } from '../../components'
import { Footer } from '../../components'

const Whoweare = () => {
  return (
    <>
      <Section
      text="Resources"
      />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center text-center w-full bg-pink-200 text-xl hover:bg-pink-100 py-16 px-8'>
          <h3 className='font-bold'>The Everyday Guide to Employment Law</h3>
          <p>Browse workplace legal information by subject matter</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-full bg-pink-200 text-xl hover:bg-pink-100 py-16 px-8'>
          <h3 className='font-bold'>Legal Updates</h3>
          <p>Case law and legislative updates you should know about</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-full bg-pink-200 text-xl hover:bg-pink-100 py-16 px-8'>
          <h3 className='font-bold'>Essential Employment Law Cases</h3>
          <p>Browse the most essential cases that make up the framework of employment and human rights law</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-full bg-pink-200 text-xl hover:bg-pink-100 py-16 px-8'>
          <h3 className='font-bold'>PortaClassroom</h3>
          <p>Browse helpful videos, online tutorials and webinar rebroadcasts</p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Whoweare