import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Ourstory from './Ourstory'
import Marquee from './Marquee'


function Home() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <Hero />
      <Marquee />
      <Ourstory />
    </div>
  )
}

export default Home
