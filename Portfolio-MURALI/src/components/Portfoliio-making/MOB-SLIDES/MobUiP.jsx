import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import "./MOBHORI.css"
import "swiper/css";
import "swiper/css/pagination";

import content1 from "../../../assets/mob-ui/MOB-Horizontal1.jpg";
import content2 from "../../../assets/mob-ui/MOB-Horizontal2.jpg";
import content3 from "../../../assets/mob-ui/MOB-Horizontal3.jpg";
import content4 from "../../../assets/mob-ui/MOB-Horizontal4.jpg";
import content5 from "../../../assets/mob-ui/MOB-Horizontal5.jpg";

export default function MobUiP() {

    const swips = [content1,content2,content3,content4,content5];


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
       {swips.map((img,i)=>(
    
        <SwiperSlide key={i} >
            <div className='slide-main-container2'>
                <div className='slide-inside-container2'>  
                      <img className='mob-size-hori' src={img} alt="project-mobszie-slides" />
                </div>
            

            </div>
            
        </SwiperSlide>
       ))

       }

        </Swiper>

      
    </div>
  )
}
