import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from '../constant'

const Testimonial = () => {
  return (
    <section className="section bg-lightBlue py-12 text-darkBlue">
      <div className="relative content text-center">
        <h2 className="font-lexend font-bold text-[32px] md:text-[40px] mb-3">
          Student’s Testimonials
        </h2>
        <p className="font-lexend max-w-[600px] mx-auto text-lg font-normal">
          Here’s what our students have to say about their transformative
          learning experience. Real stories, real growth. Discover firsthand
          the impact our courses have had on their lives.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="w-[320px] p-6 shadow-lg rounded-lg border-4 border-dashed border-blue-400">
                <p className="italic text-lg text-gray-700">{testimonial.quote}</p>
                <h3 className="mt-4 font-bold text-darkBlue">{testimonial.name}</h3>
                <p className="text-sm text-blue-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View Testimonials Link */}
        <div className="absolute bottom-[-20px] right-[150px] ">
          <a href="#" className="text-blue-500 underline text-sm">
            View Testimonials
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonial