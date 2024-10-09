import React from "react";

export default function Main() {
  return (
    <section className=" w-full h-full flex flex-col justify-center items-center image-for-bg-first">
      <div className=" p-4 flex flex-col items-start gap-4 rounded-lg">
        <div className=" flex gap-2 items-center">
          <span className=" block bg-white w-[20px] h-[2px]"></span>{" "}
          <h3 className=" text-[#EAC286]">HELLO WORLD</h3>
        </div>
        <h1 className=" text-6xl text-left">
          My name Dimitar, <br /> I am React/Next.js developer.
        </h1>
        <p>
          Based in <span className=" text-[#B17457]">Plovdiv, Bulgaria</span>
        </p>

        <button className="relative overflow-hidden border p-2 rounded-md border-[#B17457] font-medium transition-colors duration-300 group">
          <span className="relative z-20">Contact me</span>
          <span className="absolute inset-0 bg-[#B17457] w-0 h-full transition-all duration-500 group-hover:w-full ease-in-out z-10"></span>
        </button>
      </div>
    </section>
  );
}
