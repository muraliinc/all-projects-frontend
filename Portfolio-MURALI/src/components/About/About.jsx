 import React from 'react'
 import "./SLIDES/Slides.jsx"
import Slides from './SLIDES/Slides.jsx'
import "./About.css"
 
 export default function About() {
   return (
     <section className='About-section'>
      <div className='title-tag-wrapper'>
        <h1 className='title-tag-sections'> about section</h1>
      <hr className='title-tag-sections-line' /></div>
      
      <div className='About-inside-container'>
        <Slides/>
      </div>
       


     </section>
   )
 }
 