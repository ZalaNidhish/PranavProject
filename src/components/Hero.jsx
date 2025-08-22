import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title span", {
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      delay: 0.8,
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
      delay: 2,
    });
    gsap.from(".button", {
      y: -100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 2,
    });
  });

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] md:h-[100vh] text-center text-white bg-gradient-to-b from-red-500 to-black">
      <div className="h-[80vh] flex flex-col pt-20 items-center justify-center text-center space-y-6 gap-4">
        <h3 className="welcome border-gray-500/60 md:border-gray-500/30 border-2 p-2 rounded-2xl">
          Welcome to PIXEL PLUS MEDIA
        </h3>
        <h1 className="hero-title text-3xl md:text-4xl w-[80vw] font-bold text-white leading-10 md:leading-14">
          <span className="text-red-500">Guaranteed</span>
          <span> </span>
          <span>20-40</span>
          <span> </span>
          <span>Epoxy</span>
          <span> </span>
          <span>Flooring</span>
          <span> </span>
          <span className="text-red-500">Leads</span>
          <span> </span>
          <span className="text-red-500">Every</span>
          <span> </span>
          <span className="text-red-500">Month</span>
          <span> </span>
          <span className="text-red-500">With</span>
          <span> </span>
          <span className="text-red-500">our</span>
          <span> </span>
          <span>AI</span>
          <span>-</span>
          <span>Powered</span>
          <span> </span>
          <span>System</span>
        </h1>
        <p className="para text-[16px] text-neutral-400 w-3/4">
          Pixel Plus Media helps epoxy flooring businesses consistently book high-ticket projects without wasting time or money on outdated marketing.

        </p>
        <Link to="/calendly">
        <button className="button bg-red-600 text-white flex gap-3 items-center justify-center py-2 px-4 rounded-2xl hover:bg-red-700 cursor-pointer mt-10">
          <p>
            Book a Free Consultation
          </p>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
