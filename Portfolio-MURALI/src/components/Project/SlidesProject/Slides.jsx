import React from 'react';
import Slides1 from './Slides1';
import Slides2 from './Slides2';
import Slides3 from './Slides3';
import Slides4 from './Slides4';
import "./Slides.css";
import "swiper/css";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';




export default function Slides() {
  return (
    <div className='slider-maincontainer'>
      <Swiper
       spaceBetween={-280}
       slidesPerView={2}
      autoplay={{delay:1000}}
      loop={true}
       >
        <SwiperSlide>
          <Slides1/>
        </SwiperSlide>
        <SwiperSlide>
          <Slides2/>
        </SwiperSlide>
        <SwiperSlide>
          <Slides3/>
        </SwiperSlide>
        <SwiperSlide>
          <Slides4/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
