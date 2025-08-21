import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Ourstory from './Ourstory'
import Marquee from './Marquee'
import Ourservices from './Ourservices'
import Whychooseus from './Whychooseus'

function Home() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <Hero />
      {/* <Marquee /> */}
      <Ourstory />
      <Ourservices />
      <Whychooseus />
    </div>
  )
}

export default Home
