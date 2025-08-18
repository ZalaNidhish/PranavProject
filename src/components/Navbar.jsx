import React from 'react'
import logo from '../assets/logo.jpg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(()=>{
    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.5
     })
     

  })


  return (
    <div className='navbar absolute w-screen h-30 flex items-center justify-center'>
      <div className='rounded-2xl border-1 border-gray-500 text-white px-8 py-4 flex gap-8 bg-[rgba(255,255,255,0.1)]'>
        <h1 className='text-[14px] p-1 h-10 w-10'><img src={logo} alt="lOGO" className='h-full w-full object-contain' /></h1>
        <h1 className='text-[14px] p-1 h-10 flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Home</h1>
        <h1 className='text-[14px] p-1 h-10 flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Testimonials</h1>
        <h1 className='text-[14px] p-1 h-10 flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Our Services</h1>
        <h1 className='text-[14px] p-1 h-10 flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>FAQs</h1>
        <h1 className='text-[14px] p-1 h-10 flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>AI Sales System</h1>
        <h1 className='text-[14px] bg-black text-red-500 py-1 px-2 h-10 flex items-center rounded-lg font-semibold cursor-pointer hover:scale-90 duration-150'>Schedule a call</h1>
      </div>
    </div>
  )
}

export default Navbar
