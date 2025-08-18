import React from 'react'
import employee from '../assets/employee.avif'

const Ourstory = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-black text-white p-6 gap-30'>
      <div className='h-screen w-3/5 flex flex-col justify-center space-y-10'>
        <h2>
            At Growth Magnet Studio, we specialise in generating targeted and qualified leads and appointments based on your needs. 
        </h2>
        <h2 className='text-xl font-bold'>
            Our Story
        </h2>
        <p>
            We started as solar reps, developing a proven strategy to book appointments that quickly gained popularity among other reps. Realising the importance of consistent leads for business growth, we expanded into helping companies set up ad campaigns and appointment systems. Over the last five years, we've worked with 500+ reps and businesses, delivering steady leads and driving success.
        </p>
         <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer w-50">
          Schedule a Call
        </button>
      </div>
      <div className='h-screen w-1/5'>
        <img src={employee} alt="" className='h-full w-full object-contain'/>
      </div>
    </div>
  )
}

export default Ourstory
