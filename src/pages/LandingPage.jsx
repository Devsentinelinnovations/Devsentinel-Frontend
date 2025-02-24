import React from 'react'
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';
import Partnership from '../components/LandingPage/Partnership';
import About from '../components/LandingPage/About';
import Service from '../components/LandingPage/Service';
import Testimonial from '../components/LandingPage/Testimonial';
import Blog from '../components/LandingPage/Blog';
import Faq from '../components/LandingPage/Faq';
import Footer from '../components/LandingPage/Footer';


function LandingPage() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Partnership/> 
    <About/>
    <Service/>
    <Testimonial/>
    <Blog/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default LandingPage