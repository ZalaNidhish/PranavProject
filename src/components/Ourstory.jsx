import React from "react";
import logo from "../assets/logo.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Ourstory = () => {
  useGSAP(() => {
    gsap.from(".employee", {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".employee",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".OurStoryText", {
      opacity: 0,
      y: 100,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".OurStoryText",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full text-white md:p-6 gap-0 md:gap-20 bg-black">
      <div className="h-screen w-6/7 md:w-3/5 flex flex-col justify-center space-y-10 ">
        <span className="overflow-hidden">
          <h2 className="OurStoryText text-neutral-400">
            At PIXEL PLUS MEDIA, we specialise in generating targeted and
            qualified leads and appointments based on your needs.
          </h2>
        </span>
        <span className="overflow-hidden">
          <h2 className="text-xl font-bold OurStoryText">Our Story</h2>
        </span>
        <span className="overflow-hidden">
          <p className="OurStoryText text-neutral-400">
            Pixel Plus Media was born from a simple idea: service businesses
            shouldn’t have to rely on luck for growth. We saw too many great
            companies stuck waiting on referrals, so we built AI-powered systems
            that deliver consistent leads and appointments. What started with
            helping a few local businesses has grown into a proven model across
            the U.S., giving owners a predictable way to scale without stress.
            <br />
            <br />
            <span className="font-bold text-white">
              Our mission is clear — turn growth into a system, not a gamble.
            </span>
          </p>
        </span>
        <span className="overflow-hidden text-center md:text-start">
          <Link to="/calendly">
          <button className="OurStoryText bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer w-50">
            Schedule a Call
          </button>
          </Link>
        </span>
      </div>
      <div className="h-[20vh] md:h-screen md:w-1/5 w-3/5 ">
        <img
          src={logo}
          alt=""
          className="employee h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Ourstory;
