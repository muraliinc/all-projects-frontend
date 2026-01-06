import React,{useEffect, useLayoutEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import "./horizontal.css"
import content1 from "../../../assets/low-fi-pencil-module-desktop.jpg";
import content2 from "../../../assets/figma-lowfi-desktop.jpg";
import content3 from "../../../assets/mob-low-fi.jpg";
import content4 from "../../../assets/figma-lowfi-mob.jpg";
import content5 from "../../../assets/all-highfi-figma.jpg";

gsap.registerPlugin(ScrollTrigger);



export default function Horizontal() {
const slide = [content1,content2,content3,content4,content5]

useEffect(()=>{
  const ctx = gsap.context(()=>{
  
    const slides = gsap.utils.toArray(".slides")

    gsap.to(slides,{
      xPercent:-100*(slides.length-1),
      ease:"none",
      scrollTrigger:{
        trigger:".horizontal-wrapper",
        pin:true,
         scrub: 1,
     anticipatePin: 1,
        end: () => "+=" + window.innerWidth * (slides.length - 1),
      }


    })
    
  

  })
   return () => ctx.revert();
},[])

  return (
  <section className='horizontal-wrapper'>
    <div className='horizontal'>
  {slide.map((img,i)=>(
    <div className="slides" key={i}>
     <img className='image-scrl' src={img} alt={`slide-${i+1}`} />
     
         </div>
  ))}
    </div>
  </section>
  )
}
