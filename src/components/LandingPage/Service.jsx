import React from 'react'
import { serviceImg1, serviceImg2, serviceImg3 } from '../../assets'
import { services } from '../../constant'

const Service = () => {
  return (
    <section className="section bg-primary py-12 text-white">
      <div className="relative content flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="font-lexend font-bold text-[32px] md:text-[40px] mb-3">Services</h2>
          <p className="font-lexend max-w-[520px] text-lg font-normal">
            Discover our most sought-after services carefully curated to meet the demands of today’s clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 justify-items-center mb-5">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
            <div className="h-36 w-36 md:h-60 md:w-60 flex items-center justify-center rounded-full border-6 border-dashed border-yellow-400 p-4 mb-4">
              <img src={service.img} alt="Mobile App Development" className="h-full object-contain" />
            </div>
            <div className='mt-4 bg-blue-400 px-6 py-4 text-center rounded-md'>
            <p className="font-lexend  text-lg leading-6 font-normal max-w-[150px] ">{service.name}</p>
            </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[-20px] right-[150px] ">
          <a href="#" className="text-sm text-white underline">
            View services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Service