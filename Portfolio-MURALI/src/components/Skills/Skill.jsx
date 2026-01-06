import React from 'react';
import skill_batman from "../../assets/BATMAN-LOGO-SKILL.png";
import image1 from "../../assets/icons/html-icon.png";
import image2 from "../../assets/icons/css-icon.png";
import image3 from "../../assets/icons/javascript-icon.png";
import image4 from "../../assets/icons/reactjs-icon.png";
import image5 from "../../assets/icons/bootstrap-icon.png";
import image6 from "../../assets/icons/figma-icon.png";

import "./Skill.css";

export default function Skill() {
  return (
    <section className='skill-section'>
    
        <div className='title-tag-wrapper title-skill'>
        <h1 className='title-tag-sections'> SKILL SECTION</h1>
      <span className='title-tag-sections-line' /></div>
      <div className='skill-inside-container'>
        <video src="https://res.cloudinary.com/dye5bdxxn/video/upload/v1766474616/batman-skill_oqqsnp.mp4" autoPlay muted loop></video>
        <img className='skill-section-image' src={skill_batman} alt="batman-skill logo" />
        <div className='skill-image-group-of-six'> 
          <div className='skill-image-left box1'>
            <img className='skill-icons' src={image1} alt="html-icon" />
            <img className='skill-icons' src={image2} alt="css-icon" />
            <img className='skill-icons' src={image3} alt="javascript-icon" />
          </div>
          <div className='skill-image-right box1'>
            <img className='skill-icons' src={image4} alt="reactjs-icon" />
            <img className='skill-icons'  src={image5} alt="bootstrap-icon" />
            <img className='skill-icons' src={image6} alt="figma-icon" />
          </div>

        </div>




      </div>


    </section>
  )
}
