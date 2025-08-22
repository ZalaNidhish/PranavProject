import React from 'react'
import { Link } from "react-router-dom";

const Readytojoin = () => {
  return (
    <div className='h-screen w-screen bg-black flex items-center justify-center flex-col gap-4 p-8'>
      <div className='flex flex-col items-center justify-evenly gap-4 text-center h-3/4 w-3/4 bg-neutral-950 rounded-2xl'>
        <h1 className='text-white text-3xl font-bold'>Ready to scale your brand to new heights?</h1>
        <p className='text-neutral-400 w-3/4'>If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
        <Link to="/calendly">
          <button className="bg-red-600 text-white flex gap-3 items-center justify-center py-2 px-4 rounded-2xl hover:bg-red-700 cursor-pointer">
            <p>
              Book a Free Consultation
            </p>
          </button>
        </Link>
    </div>
    </div>
  )
}

export default Readytojoin
