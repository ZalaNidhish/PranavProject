import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


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
      className="relative w-[80vw] md:w-[50vw] md:h-[60vh] bg-neutral-800 md:bg-neutral-950 p-5 rounded-lg shadow-lg flex flex-col items-center justify-center gap-6 overflow-hidden"
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
      <h3 className="relative text-xl font-bold text-white">Ready to scale your brand to new heights?</h3>
      <p className="relative text-neutral-200">If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
      <Link to="/calendly">
          <button className="bg-red-600 text-white flex gap-3 items-center justify-center py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer">
            <p>
              Book a Free Consultation
            </p>
          </button>
        </Link>
    </div>
  );
};

const Ourservices = () => {
  return (
    <div className="h-[60vh] md:h-screen w-screen bg-black flex items-center justify-center flex-col gap-0 md:gap-10 p-5">
    <h1 className="text-1xl font-bold text-center text-white py-2 px-4 ring-neutral-800 rounded-2xl ring-2">
        Ready to join
      </h1>
      <div className="Services flex items-center justify-center gap-10 mt-10 overflow-hidden ">
        <ShinyCard />
      </div>
    </div>
  );
};

export default Ourservices;
