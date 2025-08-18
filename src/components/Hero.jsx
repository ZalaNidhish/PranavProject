import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title span", {
      y: -100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 1,
    });
    gsap.from(".welcome", {
      opacity: 0,
      scale:0,
      stagger: 0.05,
      duration: 0.6,
      delay: 1,
    });
    gsap.from(".para", {
      y: -50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 3,
    });
    gsap.from(".button", {
      y: -100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 3,
    });
  });

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-center text-white bg-gradient-to-b from-red-500 via-red-950 to-black">
      <div className="h-[80vh] flex flex-col pt-20 items-center justify-center text-center space-y-6">
        <h3 className="welcome border-gray-500 border-1 p-2 rounded-2xl">
          Welcome to PIXEL PLUS MEDIA
        </h3>
        <h1 className="hero-title text-4xl w-[80vw] font-bold text-white leading-14">
          {/* Guaranteed 75-100 Solar Appointments In the Next 90 Days With our AI Hybrid Appointment System */}
          <span className="text-red-500">Guaranteed</span>
          <span> </span>
          <span>75-100</span>
          <span> </span>
          <span>Solar</span>
          <span> </span>
          <span>Appointments</span>
          <span> </span>
          <span className="text-red-500">In</span>
          <span> </span>
          <span className="text-red-500">the</span>
          <span> </span>
          <span className="text-red-500">Next</span>
          <span> </span>
          <span className="text-red-500">90</span>
          <span> </span>
          <span className="text-red-500">Days</span>
          <span> </span>
          <span className="text-red-500">With</span>
          <span> </span>
          <span className="text-red-500">our</span>
          <span> </span>
          <span>AI</span>
          <span> </span>
          <span>Hybrid</span>
          <span> </span>
          <span>Appointment</span>
          <span> </span>
          <span>System</span>
        </h1>
        <p className="para text-[16px] text-gray-400 max-w-2xl">
          An amalgamated approach where we use AI Agents, Call centre, FB Ads,
          Human Agents & an AI Backed CRM.
        </p>
        <button className="button bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer">
          Book a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;
