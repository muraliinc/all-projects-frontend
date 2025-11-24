import React from 'react'
import boxing_img from "../../../assets/boxing-pic-about.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {sliderimages4}  from "./SlidesData"


export default function Slides2() {

      
 

  return (
     <div className='slide-main-container'>
            <div className='slide-inside-container'>
              <div className='slide2-about-flex'>
                <p className='text-slide2 white-text'>" <span className='yellow-text'>Boxing</span> taught me more than just sport—it built my discipline,
                 and focus.<span className='yellow-text'> The same qualities drive me in web development</span>,helping me stay consistent and tackle challenges with a fighter’s mindset."</p>
                 <img className='boxing-img-about' src={boxing_img} alt="boxing-img" />
              </div>  
              <div className='slide2-about-flex'>
                {/* <Swiper  
                  modules={[EffectCoverflow, Pagination]}
                   effect="coverflow"
                spaceBetween={20}
                slidesPerView={1} 
                centeredSlides={true}
                pagination={{clickable: true}}
                coverflowEffect={{
                  rotate:50,
                  stretch:10,
                  depth:100,
                  modifier :1,
                  slideShadows:true
                }}


                style={{width: "220px" ,height:"250px", borderRadius :"20px",overflow:"visible"}}>
                  {sliderimages4.map((img,index)=>(
                    <SwiperSlide key={index}>
                      <img 
                      src={img}
                      style={{width:"100%",
                         height:"100%",
                         borderRadius:"20px",
                         objectFit:"cover"
                      }}
                      />


                    </SwiperSlide>
                  ))}

                </Swiper> */}

                <Swiper
  modules={[EffectCoverflow, Pagination]}
  effect="coverflow"
  spaceBetween={-150}
  slidesPerView={1.6}
  centeredSlides={true}
  grabCursor={true}
  pagination={{ clickable: true }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false,
  }}
  className="swiper-container-custom"
>
  {sliderimages4.map((img, index) => (
    <SwiperSlide key={index}>
      <img
        src={img}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </SwiperSlide>
  ))}
</Swiper>

         
                
                
                </div> 

          </div>
        </div> 
  )
}
