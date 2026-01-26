 import React from 'react'
 import "./Slides.css"
import Slides1 from './Slides1'
import Slides2 from './Slides2'
import Slides3 from './Slides3'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

 
 export default function Slides() {
   return (
     <div className='slides-container'>
      <Swiper 
      modules={[Pagination,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{clickable:true}}
      autoplay={{delay:5000}}
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



      </Swiper>
     
     </div>
   )
 }
 