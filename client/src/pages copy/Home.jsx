import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonials from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AiTools/>
    <Testimonials/>
    <Plan/>
    <Footer/>
    </>
  )
}

export default Home