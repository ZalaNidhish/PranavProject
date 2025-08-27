import React from 'react'
import LOGO from '../assets/LOGO.jpg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { Link } from "react-router-dom";


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
    <div className='navbar absolute w-screen h-30 flex items-center justify-center '>
      <div className='rounded-2xl text-white px-6 py-3 flex gap-0 md:gap-8 bg-black w-[80vw] items-center justify-between'>
        <div className='h-14 w-14'><img src={LOGO} alt="lOGO" className='h-full w-full object-contain' /></div>
        <a href="#home">
        <h1 className='text-[14px] hidden p-1 md:flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Home</h1>
        </a>
        <a href="#ourstory">
        <h1 className='text-[14px] hidden p-1 md:flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Testimonials</h1>
        </a>
        <a href="#ourservices">
        <h1 className='text-[14px] hidden p-1 md:flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>Our Services</h1>
        </a>
        <a href="#whychooseus">
        <h1 className='text-[14px] hidden p-1 md:flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>FAQs</h1>
        </a>
        <a href="#aisalesystem">
        <h1 className='text-[14px] hidden p-1 md:flex items-center cursor-pointer hover:underline hover:scale ease-in-out duration-200'>AI Sales System</h1>
        </a>
        <Link to="/calendly">
        <h1 className='text-[14px] bg-red-500 text-white py-1 px-2 flex items-center rounded-lg font-semibold cursor-pointer hover:scale-90 duration-150'>Schedule a call</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
