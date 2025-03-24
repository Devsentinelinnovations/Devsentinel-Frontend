import React from 'react'
import Button from './Button'
import { heroIcon1, heroIcon2, heroIcon3, heroImg } from '../../assets'
import HeroTiles from './HeroTiles'

const Hero = () => {
  return (
    <section className='section !pb-4'>
        <div className='content'>
            <div className='flex mb-5'>
                <div className='pt-5'>
                    <h1 className='text-[60px] mb-5 font-lexend font-bold leading-16 max-w-[680px] text-textBlue'>Unlock Your Potential with Dev Sentiel Innovations</h1>
                    <p className='font-lexend font-normal text-[18px] leading-6 text-textGrey mb-10 max-w-[550px]'>Empowering Businesses and Individual with Cutting-Edge
                    Tech Solution and Training. Join live classes, engage in
                    real-world projects, and discover your career pathe in tech..</p>
                     <Button className=" py-3 px-10 ml-4">
                        Get Started
                     </Button>
                </div>
                <div className='relative'>
                    <div className='flex justify-center items-center border-5 border-primary border-dashed w-[400px] h-[400px] p-2 rounded-full'>
                        <div className=' bg-primary w-[350px] h-[350px] rounded-full'/>
                    </div>
                    <div className='absolute top-[-70px] left-[40px] w-[400px] h-auto'>
                        <img src={heroImg} alt="a man with laptop" className='w-full h-auto' />
                    </div>
                </div>
                <HeroTiles/>
            </div>
        </div>
    </section>
  )
}

export default Hero