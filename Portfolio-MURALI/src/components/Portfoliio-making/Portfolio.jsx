import React from 'react'
import"./Portfolio.css"
import Horizontal from './Horizontal-slides/horizontal'
export default function Portfolio_M() {
  return (
   <section id='PORTFOLIO' className='portfolio-making'>
      <div className="portfolio-inside-container">
           <div className='title-tag-wrapper hori'>
        <h1 className='title-tag-sections'> portfolio making section</h1>
      <span className='title-tag-sections-line' /></div>
      </div>

      <Horizontal/>
 
   </section>
  )
}
