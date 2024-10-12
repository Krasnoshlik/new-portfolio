import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <section className=" w-full h-full flex flex-col sm:flex-row gap-4 px-2 justify-center items-center image-for-bg-first">
      <div className=" p-4 flex flex-col items-start gap-4 rounded-lg z-20">
        <div className=" flex gap-2 items-center">
          <span className=" block bg-white w-[20px] h-[2px]"></span>{" "}
          <h3 className=" text-[#EAC286]">HELLO WORLD</h3>
        </div>
        <h1 className=" text-3xl sm:text-6xl text-left">
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

      <Link href="/DimitarKrasnoshlikCV.pdf" download className=" z-20">
      <button className="relative overflow-hidden min-w-[110px] h-[110px] border p-2 rounded-full border-[#B17457] font-medium transition-colors duration-300 hover:shadow-[#B17457] group text-sm">
          <span className="relative z-20 w-min">Download CV</span>
          <span className="absolute inset-0 bg-[#B17457] w-0 h-full transition-all duration-500 group-hover:w-full ease-in-out z-10"></span>
        </button>
      </Link>

      <div className=" relative self-center">
      <div className=" z-0 -left-[450px] -top-[521px] sm:-left-[521px] sm:-top-[450px] absolute border border-gray-700 w-[900px] h-[900px] rounded-full flex items-center justify-center">
        <div className=" border border-gray-700 w-[700px] h-[700px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[500px] h-[500px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[300px] h-[300px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[100px] h-[100px] rounded-full flex items-center justify-center">

          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}
