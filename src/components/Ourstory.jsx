import React from 'react'
import employee from '../assets/employee.avif'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const Ourstory = () => {

  useGSAP(() => {
    gsap.from(".employee", {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".employee",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
    gsap.from(".OurStoryText", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".OurStoryText",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  });


  return (
    <div className='flex items-center justify-center h-screen w-full bg-black text-white p-6 gap-30'>
      <div className='h-screen w-3/5 flex flex-col justify-center space-y-10'>
        <span className='overflow-hidden'>
          <h2  className='OurStoryText'>
            At Growth Magnet Studio, we specialise in generating targeted and qualified leads and appointments based on your needs. 
        </h2>
        </span>
        <span className='overflow-hidden'>
          <h2 className='text-xl font-bold OurStoryText'>
            Our Story
        </h2>
        </span>
        <span className='overflow-hidden'>
          <p className='OurStoryText'>
            We started as solar reps, developing a proven strategy to book appointments that quickly gained popularity among other reps. Realising the importance of consistent leads for business growth, we expanded into helping companies set up ad campaigns and appointment systems. Over the last five years, we've worked with 500+ reps and businesses, delivering steady leads and driving success.
        </p>
        </span>
         <span className='overflow-hidden'>
          <button className="OurStoryText bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer w-50">
          Schedule a Call
        </button>
         </span>
      </div>
      <div className='h-screen w-1/5'>
        <img src={employee} alt="" className='employee h-full w-full object-contain'/>
      </div>
    </div>
  )
}

export default Ourstory
