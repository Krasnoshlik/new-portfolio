"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types'; 
import { Mousewheel } from 'swiper/modules';
import Header from './components/ui/Header';
import Main from './components/layout/Main';
import Skills from './components/layout/Skills';
import Projects from './components/layout/Projects';
import Contact from './components/layout/Contact';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full h-svh">
       <ToastContainer />
      <Header onNavClick={handleSlideChange} activeIndex={activeIndex} />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <Main setActiveIndex={setActiveIndex} onContactMeClick={handleSlideChange}/>
        </SwiperSlide>

        <SwiperSlide>
          <Skills />
        </SwiperSlide>

        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        
        <SwiperSlide>
          <Contact />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
