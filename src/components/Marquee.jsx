import React from 'react'
import zapier from '../assets/zapier.png'
import twilio from '../assets/twilio.png'
import HIGHLEVEL from '../assets/HIGHLEVEL.png'
import IILEVEN_LABS from '../assets/IILEVEN_LABS.jpg'

const Marquee = () => {
  return (
    <div className='h-[20vh] w-full flex items-center justify-center bg-black font-semibold relative'>
        <div className='absolute h-full w-[80vw] bg-gradient-to-r from-black via-black/0 to-black z-3 overflow-hidden'></div>
        <div className="scroller flex w-[80vw] h-30 text-white overflow-hidden">
          <div className="scroller-in mr-10 flex items-center justify-center gap-10 h-full">
            {/* <div className="img"><img src={zapier} alt="" /></div> */}
            <div className="img"><img src={twilio} alt="" className='h-full w-full object-contain' /></div>
            <div className="img"><img src={HIGHLEVEL} alt=""  className='h-full w-full object-contain'/></div> 
            <div className="img"><img src={IILEVEN_LABS} alt="" className='h-full w-full object-contain' /></div>
          </div>
          <div className="scroller-in flex items-center justify-center gap-10 h-full">
            {/* <div className="img"><img src={zapier} alt="" /></div> */}
            <div className="img"><img src={twilio} alt="" className='h-full w-full object-contain'/></div>
            <div className="img"><img src={HIGHLEVEL} alt="" className='h-full w-full object-contain'/></div>
            <div className="img"><img src={IILEVEN_LABS} alt="" className='h-full w-full object-contain'/></div>
          </div>
        </div>
    </div>
  )
}

export default Marquee
