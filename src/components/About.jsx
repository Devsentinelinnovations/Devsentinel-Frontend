import React from 'react'
import { aboutImg } from '../assets'

const About = () => {
  return (
    <section className='section'>
        <div className='content'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-1 items-center justify-center'>
                <div className='w-md md:w-lg h-auto'>
                    <img src={aboutImg} alt="Class Session" className='w-full h-auto'/>
                </div>
                </div>
                <div className='flex flex-1 justify-start items-start flex-col'>
                    <h2 className='font-lexend font-bold text-[32px] md:text-[40px] text-textBlue mb-3'>About</h2>
                    <p className='font-lexend font-normal text-lg md:text-2xl text-textGrey mb-2'>At Dev Sentinels, we are dedicated to providing 
                        high-quality education that prepares you for a 
                        successful career in technology. Our experienced 
                        instructors and hands-on projects ensure a 
                        comprehensive learning experience</p>
                    <a href="#" className='text-blue-500 underline font-lexend font-medium'>Learn more about us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About