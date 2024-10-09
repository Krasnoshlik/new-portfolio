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
    <section className='max-w-6xl m-auto h-full flex flex-col justify-center'>
      <div>
        <h2 className=' text-3xl mb-4 font-bold'>My {projects.length + 1} projects</h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={5}
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
    </section>
  );
}


