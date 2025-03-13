import React from 'react'
import { logo, logo2} from '../../assets'

const Footer = () => {
  return (
    <footer className="section bg-blue-600 text-white">
    <div className="content max-w-[1200px] pt-[30px]">
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col justify-center items-center md:items-start max-md:mb-5  mr-0 md:mr-50'>
          <div className="w-[160px] h-auto">
            <img src={logo2} alt="Dev Sentinel Logo" className="w-full h-auto mb-4"/>
          </div>
          <p className="font-lexend text-base opacity-80 max-w-[230px] max-md:text-center leading-relaxed max-md:border-b max-md:pb-4">
            Empowering Businesses and Individuals with Cutting-Edge Tech Solutions and Training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-16 xl:gap-30 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#">Home</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer