import React from "react";
import "./Project.css"
import Slides from "./SlidesProject/Slides";
import MobileUi from "./MobileUi";
import IsMobile from "../../HOOKS-custom/IsMobile.jsx"


 
 export default function Project() {

   const isMobile = IsMobile();
  return (
   <section id="PROJECT" className="Project-section" >
      <div className='title-tag-wrapper'>
        <h1 className='title-tag-sections portoflio-heading-mob1'> project section</h1>
      <span className='title-tag-sections-line side-line' /></div>
      <div className="Project-inside-container">
       {isMobile ? <MobileUi/>: <Slides/>}
   

      </div>
      
  


   </section>
  )
}


