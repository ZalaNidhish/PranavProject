import React from "react";
import { InlineWidget } from "react-calendly";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Calendly = () => {

useGSAP(()=>{
    gsap.from(".scheduleText span", {
      stagger:0.1,
      opacity:0,
      duration: 0.1,
      delay: 0.2,
    });
    gsap.from(".bookingText span", {
      stagger:0.06,
      opacity:0,
      scale:0,
      duration: 0.5,
      delay: 0.5,
    });
})

return (
    <div className="w-screen flex flex-col items-center justify-center bg-gray-50 pt-6 md:pt-6 gap-6">
        <div className="w-full flex items-center justify-end px-5">
            <Link to={'/'}>
                    <h3 className="text-white bg-red-500 hover:bg-red-700 w-fit p-2 rounded-lg font-semibold">Home</h3>
            </Link>
        </div>
        <div className=" text-black flex flex-col items-center justify-center p-8 rounded-lg gap-10">
            <h1 className="scheduleText text-4xl font-bold ">
                <span>Schedule</span>
                <span> </span>
                <span>a</span>
                <span> </span>
                <span>call</span>
            </h1>
            <p className="w-3/4 text-neutral-900 bookingText">
                <span>Ready</span>
                <span> </span>
                <span>to</span>
                <span> </span>
                <span>scale</span>
                <span> </span>
                <span>your</span>
                <span> </span>
                <span>brand</span>
                <span> </span>
                <span>to</span>
                <span> </span>
                <span>new</span>
                <span> </span>
                <span>heights?</span>
                <span> </span>
                <span>Book</span>
                <span> </span>
                <span>a</span>
                <span> </span>
                <span>call</span>
                <span> </span>
                <span>and</span>
                <span> </span>
                <span>let’s</span>
                <span> </span>
                <span>discuss</span>
                <span> </span>
                <span>how</span>
                <span> </span>
                <span>we</span>
                <span> </span>
                <span>can</span>
                <span> </span>
                <span>bring</span>
                <span> </span>
                <span>your</span>
                <span> </span>
                <span>vision</span>
                <span> </span>
                <span>to</span>
                <span> </span>
                <span>life.</span>
            </p>
            <div className=" w-full h-full shadow-lg rounded-lg p-4 bg-white">
            <InlineWidget 
                url="https://calendly.com/pixelplusmedia/book-a-call-here"  // 🔹 replace with client’s link
            />
            </div>
        </div>
    </div>
);
};

export default Calendly;
