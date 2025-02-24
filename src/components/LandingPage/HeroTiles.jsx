import React from 'react'
import { heroIcon1, heroIcon2, heroIcon3 } from '../../assets'
const HeroTiles = () => {
  return (
    <div >
        <div className='flex absolute top-[300px] right-[370px] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[210px]'>
                        <img src={heroIcon1} alt="zoom logo" className='h-6 w-6' />
                        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Experience interactive learning through live zoom sessions</p>
                    </div>
                    <div className='flex absolute top-[340px] right-[20px] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[190px]'>
                        <img src={heroIcon2} alt="zoom logo" className='h-6 w-6' />
                        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Access ebooks, tutorials, and course materials</p>
                    </div>
                    <div className='flex absolute top-[450px] right-[390px] gap-2 bg-white/80 rounded-lg py-2 px-2 max-w-[170px] z-10'>
                        <img src={heroIcon3} alt="zoom logo" className='h-6 w-6' />
                        <p className='font-lexend text-[10px] text-black font-medium leading-3'>Choose from software development, cyber security, data analytics, and more</p>
                    </div>
    </div>
  )
}

export default HeroTiles