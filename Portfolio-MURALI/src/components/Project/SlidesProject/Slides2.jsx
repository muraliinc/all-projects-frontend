import React from 'react'
import project2 from "../../../assets/project2.webp"

export default function Slides2() {
  return (
     <div className='slider-project-main-container'>
          <div className='slider-inside-small-container'>
         <img className='project-image' src={project2} alt="project image2" width="343" height="509" decoding="async" loading="lazy" />
          </div>
        </div>
  )
}
