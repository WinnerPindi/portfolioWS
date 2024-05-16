import React from 'react';
import { HERO_CONTENT } from '../constants/index';


const Hero = () => {
  return (
    <div className='p-20 border-b border-neutral-900 pb-4 lg:mb-35 flex flex-col items-center'>
      <div className='flex justify-center'>
        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center'>Hello,I'm Winner Pindi</h1>
      </div>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center'>
        A Front End Developer
      </span>
      <p className='my-2 max-w-xl py-6 font-light tracking-tightter text-xl text-center'>{HERO_CONTENT}</p>
    </div>
  )
}
export default Hero;