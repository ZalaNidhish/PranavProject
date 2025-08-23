import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Ourstory from './Ourstory'
import Marquee from './Marquee'
import Ourservices from './Ourservices'
import Whychooseus from './Whychooseus'
import Footer from './Footer'
import Readytojoin from './Readytojoin'

function Home() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      {/* <Marquee /> */}
      <div id='ourstory'>
      <Ourstory />
      </div>
      <div id='ourservices'>
      <Ourservices />
      </div>
      <div id='whychooseus'>
      <Whychooseus />
      </div>
      <div id='readytojoin'>
        <Readytojoin />
      </div>
      <Footer />
    </div>
  )
}

export default Home
