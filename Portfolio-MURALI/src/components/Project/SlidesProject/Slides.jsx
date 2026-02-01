import React from 'react';
import Slides1 from './Slides1';
import Slides2 from './Slides2';
import Slides3 from './Slides3';
import Slides4 from './Slides4';
import "./Slides.css";
import "swiper/css";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules"




export default function Slides() {
  return (
    <div className='slider-maincontainer'>
      <Swiper
     modules={[Autoplay]}
  // slidesPerView={3}
  // spaceBetween={0}
  breakpoints={{
    
    769: {                   // tablet
      slidesPerView: 3,
      spaceBetween: 0
    },

    1025: {                  // desktop
      slidesPerView: 3,
      spaceBetween: 0
    }
  }}
  loop={true}
  speed={800}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  watchSlidesProgress={true}
  observer={true}
  observeParents={true}
  
       >
        <SwiperSlide  className="slide-one">
          <div className='slider-swip-wrap'> 
            <Slides1/>
            </div>
        </SwiperSlide>
        <SwiperSlide  className="slide-one">
          <div className='slider-swip-wrap'><Slides2/></div>
        </SwiperSlide>
        <SwiperSlide  className="slide-one">
       <div className='slider-swip-wrap'>   <Slides3/></div>
        </SwiperSlide>
        <SwiperSlide  className="slide-one">
         <div className='slider-swip-wrap'><Slides4/></div> 
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
