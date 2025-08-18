import React from 'react'

const Marquee = () => {
  return (
    <div className='h-[20vh] w-full flex items-center justify-center overflow-hidden bg-black text-2xl font-semibold'>
       <div class="scroller flex w-[60vw] h-30 text-white bg-gradient-to-r from-[rgba(0,0,0,0.1)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.1)] overflow-hidden">
          <div class="scroller-in mr-10 flex items-center justify-center gap-10 h-full bg-transparent">
            <h2>TOPTRACER</h2>
            <h2>LESSONS</h2>
            <h2>ADVENTURE</h2>
            <h2>CAFE</h2>
            <h2>EVENTS</h2>
          </div>
          <div class="scroller-in flex items-center justify-center gap-10 h-full">
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
