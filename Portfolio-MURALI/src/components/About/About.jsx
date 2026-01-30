 import React from 'react'
 import "./SLIDES/Slides.jsx"
import Slides from './SLIDES/Slides.jsx'
import "./About.css"

 
 export default function About() {
   return (
     <section id='ABOUT' className='About-section'>
      <div className='title-tag-wrapper'>
        <h1 className='title-tag-sections portoflio-heading-mob1'> about section</h1>
      <span className='title-tag-sections-line side-line' /></div>
      <div className='About-inside-container'>
        <Slides/>
      </div>
       


     </section>
   )
 }
 