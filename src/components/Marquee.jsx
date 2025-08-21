import React from 'react'
import zapier from '../assets/zapier.png'
import twilio from '../assets/twilio.png'
import HIGHLEVEL from '../assets/HIGHLEVEL.png'
import IILEVEN_LABS from '../assets/IILEVEN_LABS.jpg'

const Marquee = () => {
  return (
    <div className='h-[20vh] w-full flex items-center justify-center bg-black font-semibold relative'>
        <div className='absolute h-30 w-[60vw] bg-gradient-to-r from-black via-black/0 to-black z-3 overflow-hidden'></div>
        <div className="scroller flex w-[60vw] h-30 text-white overflow-hidden">
          <div className="scroller-in mr-10 flex items-center justify-center gap-10 h-full">
            <div className="img"><img src={zapier} alt="" /></div>
            <div className="img"><img src={twilio} alt="" /></div>
            <div className="img"><img src={HIGHLEVEL} alt="" /></div>
            <div className="img"><img src={IILEVEN_LABS} alt="" /></div>
          </div>
          <div className="scroller-in flex items-center justify-center gap-10 h-full">
            <div className="img"><img src={zapier} alt="" /></div>
            <div className="img"><img src={twilio} alt="" /></div>
            <div className="img"><img src={HIGHLEVEL} alt="" /></div>
            <div className="img"><img src={IILEVEN_LABS} alt="" /></div>
          </div>
        </div>
    </div>
  )
}

export default Marquee
