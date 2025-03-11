import React from 'react'
import Button from './Button'
import { heroImg } from '../assets'
import HeroTiles from './HeroTiles'

const Hero = () => {
  return (
    <section className='section !pb-[3px] lg:!pb-4'>
        <div className='content'>
            <div className='flex flex-col lg:flex-row justify-evenly mb-5'>
                <div className='pt-5 max-lg:mb-30'>
                    <h1 className='text-[40px] md:text-[60px] mb-5 font-lexend font-bold leading-13 md:leading-16 max-w-[680px] text-textBlue'>Unlock Your Potential with Dev Sentiel Innovations</h1>
                    <p className='font-lexend font-normal text-base md:text-lg leading-6 text-textGrey mb-10 max-w-[550px]'>Empowering Businesses and Individual with Cutting-Edge
                    Tech Solution and Training. Join live classes, engage in
                    real-world projects, and discover your career path in tech..</p>
                    
                    <Button children="Get Started" className=" py-3 px-10 lg:ml-4"/>
                </div>
                <div className='relative max-lg:mx-auto'>
                    <div className='flex justify-center items-center border-5 border-primary border-dashed w-[350px] h-[350px] md:w-[400px] md:h-[400px] p-2 rounded-full'>
                        <div className=' bg-primary w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full'/>
                    </div>
                    <div className='absolute top-[-70px] xl:top-[-70px] left-[10px] md:left-[30px] lg:left-[31px] w-[350px] md:w-[390px] lg:w-[425px] xl:w-[400px] h-auto'>
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