import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-red-500 via-red-950 to-black'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
