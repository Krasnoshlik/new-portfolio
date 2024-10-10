"use client"
import 'swiper/css';   
import 'swiper/css/pagination';
import React from 'react';
import { projects } from '../../../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Projects() {
  return (
    <section className='max-w-6xl m-auto px-3 h-full flex flex-col justify-center'>
      <div className=' z-20'>
        <h2 className=' text-3xl mb-4 font-bold'>My {projects.length + 1} projects</h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          direction='horizontal'
          pagination={{ clickable: true }}
          className="second-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" relative self-center">
      <div className=" z-0 -right-[790px] -top-[1050px] absolute border border-gray-700 w-[1600px] h-[1600px] rounded-full flex items-center justify-center">
        <div className=" border border-gray-700 w-[1400px] h-[1400px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[1200px] h-[1200px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[1000px] h-[1000px] rounded-full flex items-center justify-center">
          <div className=" border border-gray-700 w-[800px] h-[800px] rounded-full flex items-center justify-center">

          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}


