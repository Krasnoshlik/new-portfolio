"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type projectType = {
  image: StaticImageData;
  tech: string[];
  name: string;
  dis: string;
  link: string;
}

export default function ProjectCard({ project }: { project: projectType }) {
  return (
    <motion.div
      className="border-[2px] border-p-gray w-[340px] h-[510px] flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex-shrink-0 border-b-2 border-p-gray h-[50%]">
        <Image src={project.image} alt="project image" className="object-cover w-full h-full" />
      </div>

      <div className="flex justify-between bg-black px-2 py-2 text-p-gray border-t-[1px] border-white">
        {project.tech.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <div className="flex-grow flex flex-col justify-between border-t-[2px] border-p-gray p-4">
        <div>
          <h4 className="font-medium text-white text-md m-0">{project.name}:</h4>
          <p className="text-p-gray text-sm">{project.dis}</p>
        </div>

        <div className="mt-auto">
          <Link
            className="relative overflow-hidden border py-2 px-7 border-[#B17457] font-medium transition-colors duration-300 group"
            href={project.link}
          >
            <span className="relative z-20">View website</span>
            <span className="absolute inset-0 bg-[#B17457] w-0 h-full transition-all duration-500 group-hover:w-full ease-in-out z-10"></span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
