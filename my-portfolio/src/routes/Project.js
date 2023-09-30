import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <PricingCard />
    </div>
  )
}

export default Project
