import React from "react";
import Slides from "./SlidesProject/slides";
import "./Project.css"



 
 export default function Project() {
  return (
   <section className="Project-section" >
      <div className='title-tag-wrapper'>
        <h1 className='title-tag-sections'> project section</h1>
      <span className='title-tag-sections-line' /></div>
      <div className="Project-inside-container">
 
   <Slides/>

      </div>
      
  


   </section>
  )
}


