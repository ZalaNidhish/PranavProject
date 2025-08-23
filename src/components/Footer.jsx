import React from "react";
import logo from "../assets/mylogocrop.jpg";

import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkdin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <div className="w-full text-white bg-neutral-800 md:p-10 p-4 flex flex-col gap-5 font-semibold">
      <div className="flex items-center justify-evenly gap-6"> 
        <div className="h-full">
          <p className="flex">
            <span className="w-fit cursor-pointer"><img src={instagram} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit cursor-pointer"><img src={facebook} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit cursor-pointer"><img src={linkdin} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
          </p>
        </div>
      </div>
      <div className="w-full text-center text-neutral-600 font-semibold">
        Crafted with spice & code by <span className="text-red-800">Nidhish </span>
        | Copyright and Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
