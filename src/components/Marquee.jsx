import React from 'react'

const Marquee = () => {
  return (
    <div className='h-[20vh] w-full flex items-center justify-center bg-black text-2xl font-semibold relative'>
        <div className='absolute h-30 w-[60vw] bg-gradient-to-r from-black via-black/0 to-black z-3 overflow-hidden'></div>
        <div className="scroller flex w-[60vw] h-30 text-white overflow-hidden">
          <div className="scroller-in mr-10 flex items-center justify-center gap-10 h-full">
            <h2>TOPTRACER</h2>
            <h2>LESSONS</h2>
            <h2>ADVENTURE</h2>
            <h2>CAFE</h2>
            <h2>EVENTS</h2>
          </div>
          <div className="scroller-in flex items-center justify-center gap-10 h-full">
            <h2>TOPTRACER</h2>
            <h2>LESSONS</h2>
            <h2>ADVENTURE</h2>
            <h2>CAFE</h2>
            <h2>EVENTS</h2>
          </div>
        </div>
    </div>
  )
}

export default Marquee
