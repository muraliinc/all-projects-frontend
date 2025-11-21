import React from 'react'
import boxing_img from "../../../assets/boxing-pic-about.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
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

         
                
                
                </div> 

          </div>
        </div> 
  )
}
