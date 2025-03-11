import React from 'react'
import { heroIcon1, heroIcon2, heroIcon3 } from '../assets'
const HeroTiles = () => {
  return (
    <div className='max-lg:hidden'>
      <div className='flex absolute lg:top-[45%] lg:right-[29%] xl:top-[50%] xl:right-[28%] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[210px]'>
        <img src={heroIcon1} alt="zoom logo" className='h-6 w-6' />
        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Experience interactive learning through live zoom sessions</p>
      </div>
      <div className='flex absolute lg:top-[340px] lg:right-[20px] xl:right-[10px] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[190px]'>
        <img src={heroIcon2} alt="zoom logo" className='h-6 w-6' />
        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Access ebooks, tutorials, and course materials</p>
      </div>
      <div className='flex absolute lg:top-[480px] lg:right-[280px] xl:top-[450px] xl:right-[340px] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[170px] z-10'>
        <img src={heroIcon3} alt="zoom logo" className='h-6 w-6' />
        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Choose from software development, cyber security, data analytics, and more</p>
      </div>
    </div>
  )
}

export default HeroTiles