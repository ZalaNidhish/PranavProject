import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);


const ShinyCard = ({ title, text }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty("--x", `${x}%`);
    cardRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative card w-[80vw] md:w-[40vw] md:h-[45vh] bg-neutral-800 md:bg-neutral-950 p-5 rounded-lg shadow-lg flex flex-col items-center justify-center gap-6 overflow-hidden"
      style={{
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* Shine overlay */}
      <div
        className="absolute hidden md:flex inset-0 pointer-events-none cursor-pointer"
        style={{
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.12), transparent 70%)",
        }}
      />
      <h3 className="relative text-xl font-bold text-white">{title}</h3>
      <p className="relative text-neutral-200">{text}</p>
    </div>
  );
};

const Ourservices = () => {

  useGSAP(()=>{
    gsap.from('.Services', {
      y: 150,
      opacity: 1,
      duration: 0.6,
      delay: 0,
      scrollTrigger: {
        trigger: ".Services",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
     })
     
  })

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center flex-col gap-0 md:gap-10 p-5">
      <h1 className="text-1xl font-bold text-center text-white py-2 px-4 ring-neutral-800 rounded-2xl ring-2">
        Our Services
      </h1>
      <div className="Services flex flex-col md:flex-row items-center justify-center gap-10 mt-10 overflow-hidden ">
        <ShinyCard
          title="Fueling Your Growth with AI-Powered Leads"
          text="At Pixel Plus Media, we don’t just run ads — we engineer predictable
          growth systems. Using AI-driven targeting and proven ad strategies,
          we connect your business with homeowners who are actively looking
          for your services."
        />
        <ShinyCard
          title="Leads & Appointments That Convert"
          text="Whether you’re in epoxy flooring, HVAC, or garage doors, we design
          tailored campaigns that deliver high-quality leads straight to your
          phone or inbox. No more guessing, no more waiting on referrals —
          just consistent opportunities to grow."
        />
      </div>
    </div>
  );
};

export default Ourservices;
