import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {

useGSAP(()=>{   
    gsap.from('.hero-title span', {
        y: -100,
        opacity: 0,
        stagger:0.05,
        duration: 0.6,
        delay:1      
    })
    gsap.from('.para', {
        y: -50,
        opacity: 0,
        stagger:0.05,
        duration: 0.6,
        delay:3
    })
    gsap.from('.button', {
        y: -100,
        opacity: 0,
        stagger:0.05,
        duration: 0.6,
        delay:3
    })
})

return (
    <div className='flex flex-col items-center justify-center h-[70vh] text-center text-white space-y-10 '>
        <h1 className='hero-title text-5xl font-bold text-white leading-14'>
            {/* T r a n s f o r m   Y o u r   S p a c e s   w i t h */}
            <span>T</span>
            <span>r</span>
            <span>a</span>
            <span>n</span>
            <span>s</span>
            <span>f</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span> </span>
            <span>Y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span> </span>
            <span>S</span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
            <span> </span>
            <span>w</span>
            <span>i</span>
            <span>t</span>
            <span>h</span>
            <br />
            {/* P i x e l P l u s   M e d i a */}
            <span>P</span>
            <span>i</span>
            <span>x</span>
            <span>e</span>
            <span>l</span>
            <span>P</span>
            <span>l</span>
            <span>u</span>
            <span>s</span>
            <span> </span>
            <span>M</span>
            <span>e</span>
            <span>d</span>
            <span>i</span>
            <span>a</span>
            <span>.</span>
        </h1>
        <p className='para text-lg text-gray-200 max-w-2xl'>
            Elevate your brand with stunning, durable epoxy flooring solutions and expert digital marketing to showcase your projects.
        </p>
        <button className='button bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer'>
            Book a Free Consultation
        </button>
    </div>
)
}

export default Hero
