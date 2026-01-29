import React from 'react'
import"./Portfolio.css"
import Horizontal from './Horizontal-slides/Horizontal'
import MobUiP from './MOB-SLIDES/MobUiP';
import IsMobile from '../../HOOKS-custom/IsMobile';


export default function Portfolio_M() {

 const isMobile = IsMobile();

  return (
   <section id='PORTFOLIO' className='portfolio-making'>
      <div className="portfolio-inside-container">
           <div className='title-tag-wrapper hori'>
        <h1 className='title-tag-sections portoflio-heading-mob'> portfolio making section</h1>
      <span className='title-tag-sections-line' /></div>
      </div>

     {isMobile ? <MobUiP/> : <Horizontal/>}
 
   </section>
  )
}
