import React from 'react'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <footer className="section bg-blue-600 text-white">
    <div className="content max-w-[1200px] pt-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <img src={logo} alt="Dev Sentinel Logo" className="w-32 mb-4" />
          <p className="font-lexend text-base opacity-80 max-w-[200px] leading-relaxed">
            Empowering Businesses and Individuals with Cutting-Edge Tech Solutions and Training.
          </p>
        </div>
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
  </footer>
);
};

export default Footer