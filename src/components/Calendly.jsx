import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center bg-gray-50 p-4 gap-6">
      <div className=" text-black flex flex-col items-center justify-center p-8 rounded-lg gap-10">
        <h1 className="text-4xl font-bold ">Schedule a Meeting</h1>
        <p className="w-3/4 text-neutral-900">
          Ready to scale your brand to new heights? Book a call and let’s
          discuss how we can bring your vision to life.
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
