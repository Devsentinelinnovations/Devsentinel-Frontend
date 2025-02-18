import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partnership from "./components/Partnership";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Service from "./components/Service";
import Blog from "./components/Blog";

function App() {
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
    </div>
  );
}

export default App;
