import React from 'react'
import project1 from "../../../assets/project1.webp"

export default function Slides1() {
  return (
    <div className='slider-project-main-container'>
      <div className='slider-inside-small-container'>
     <img className='project-image' src={project1} alt="project image1" width="343" height="509" decoding='async' loading='lazy' />
      </div>
    
    </div>
  )
}
