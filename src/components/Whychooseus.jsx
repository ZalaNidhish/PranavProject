import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

let Array = [
    {
        // img:img1,
        title: 'Guaranteed ROI',
        content: 'Concerned about the uncertainty of results? We are confident in our ability to deliver. Thats why we offer a results-driven guarantee, ensuring that you achieve the desired outcomes. We have helped over 200+ Clients'
    },
    {
        // img:img2,
        title: 'Exclusive Qualified Leads',
        content: 'Tired of competing with other solar reps for leads? With us, you will enjoy exclusive leads that are tailored to your target audience, ensuring you have the first opportunity to engage with high-quality prospects.'
    },
    {
        // img:img3,
        title: 'Seamless Onboarding',
        content: 'Concerned about a lengthy and complex onboarding process? Our dedicated onboarding team ensures a seamless experience, guiding you through the process and getting you up and running quickly.'
    },
    {
        // img:img4,
        title: 'Long-Term Partnership',
        content: 'We value long-term relationships and aim to be your trusted partner in the solar business. We are committed to your ongoing success and will continue to support and guide you as your business grows.'
    },
    {
        // img:img5,
        title: '24 hrs Support',
        content: 'We provide exceptional support throughout your journey with us. Our team is dedicated to your success and is always available to answer your questions and provide guidance from Mon to Fri.'
    },
]

const Whychooseus = () => {

useGSAP(() => {
    gsap.from(".cards", {
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cards",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });
  });




  return (
    <div className="w-screen bg-black flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-1xl font-bold text-center text-white py-2 px-4 ring-neutral-800 rounded-2xl ring-2 inline">
        Why Choose Us
      </h1>
      <h1 className="text-5xl font-semibold text-white">
        Why Choose Our Epoxy flooring leads?
      </h1>
      <p className="text-1xl text-neutral-400 text-center px-4 py-2 max-w-4xl font-semibold">
        Through sharp insight, we’ve uncovered a game-changing truth: the
        biggest marketing leaders don’t waste time on outdated door-to-door
        methods. They dominate by leveraging the online space to generate
        high-quality leads. Yet, many businesses struggle to see real results.
        That’s where we step in—<span className="text-white">turning challenges into success.</span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {Array.map((item, index) => (
            <div key={index} className="cards  bg-neutral-950 hover:bg-neutral-900 cursor-pointer p-6 rounded-lg shadow-md w-80 h-70 flex flex-col items-center justify-center gap-4">
              {/* <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-md mb-2" /> */}
              <h2 className="text-xl font-semibold mb-1 text-white">{item.title}</h2>
              <p className="text-neutral-300">{item.content}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
