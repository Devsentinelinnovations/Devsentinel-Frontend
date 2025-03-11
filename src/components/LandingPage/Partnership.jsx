import React from 'react'
import { partners } from '../../constant'


const Partnership = () => {
  return (
    <section className="bg-primary py-8 lg:mb-16">
    <div className=" content">
        <div className='flex justify-evenly items-center flex-wrap'>
        {partners.map((partner) => (
        <div key={partner.id} className="flex justify-center items-center w-[100px] h-[30px] md:w-[120px] md:h-[40px]">
          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
        </div>
      ))}
        </div>
     
    </div>
  </section>
  )
}

export default Partnership