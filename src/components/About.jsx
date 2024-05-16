import React from 'react'
import { ABOUT_TEXT } from '../constants/index';
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About
      <span className='text-neutral-500'> Me</span> </h2>
      <div>
        <p className='my-2 maxw-xl text-center text-xl'>{ABOUT_TEXT}</p>
      </div>
    </div>
  )
}

export default About
