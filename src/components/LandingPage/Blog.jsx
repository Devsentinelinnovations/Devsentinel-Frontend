import React from 'react';
import { blog1, blog2, blog3 } from '../../assets';


const Blog = () => {
  return (
    <section className='section bg-primary'>
      <div className='content'>
        <h2 className='font-lexend text-white text-center font-bold text-[40px] mb-3'>Blogs</h2>
        <div className='flex flex-col md:flex-row gap-36'>
          <div className='flex flex-col gap-1'>
            <div className='w-[350px] h-auto border-4 border-dashed border-white p-3 rounded-2xl mb-3'>
              <img src={blog1} alt="tech image" className='w-full h-auto rounded-xl'/>
            </div>
            <div className='flex flex-col gap-1 max-w-[350px]'>
            <p className='font-lexend font-bold text-lg bg-white p-3'>5 Tips for Effective Online Learning</p>
            <p className='font-montserrat font-normal text-[16px] bg-white p-3'>Transform your study habits and achieve your academic goals with these essential techniques.</p>
            </div>  
          </div>

          <div className='flex flex-col justify-between'>
            <div className='flex flex-col md:flex-row gap-2'>
            <div className='w-[250px] h-auto border-4 border-dashed border-white p-3 rounded-2xl'>
              <img src={blog2} alt="tech image" className='w-full h-auto rounded-xl'/>
            </div>
            <div className='flex flex-col gap-1 items-start justify-center max-w-[350px]'>
            <p className='font-lexend font-bold text-lg bg-white p-3 '>5 Tips for Effective Online Learning</p>
            <p className='font-montserrat font-normal text-[16px] bg-white p-3 max-w-[350px] leading-[18px]'>Explore emerging trends and technologies are reshaping the digital landscape, driving , and enhancing user experiences</p>
            </div>         
            </div>

            <div className='flex flex-col md:flex-row gap-2'>
            <div className='w-[250px] h-auto border-[4px] border-dashed border-white p-3 rounded-2xl'>
              <img src={blog3} alt="tech image" className='w-full h-auto rounded-xl'/>
            </div>
            <div className='flex flex-col gap-1 items-start justify-center max-w-[350px]'>
            <p className='font-lexend font-bold text-lg bg-white p-3'>5 Tips for Effective Online Learning</p>
            <p className='font-montserrat font-normal text-[16px] bg-white p-3 max-w-[350px] leading-[18px]'>Navigate the diverse world of technology with insights and strategies to align your skills, interests, and goals for a fulfilling career.</p>
            </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog