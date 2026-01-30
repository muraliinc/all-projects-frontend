import React from 'react'
import"./Portfolio.css"
import Horizontal from './Horizontal-slides/Horizontal'
import MobUiP from './MOB-SLIDES/MobUiP';
import IsMobile from '../../HOOKS-custom/IsMobile';


export default function Portfolio_M() {



  return (
   <section id='PORTFOLIO' className='portfolio-making'>
      <div className="portfolio-inside-container">
           <div className='title-tag-wrapper hori'>
        <h1 className='title-tag-sections portoflio-heading-mob'> portfolio making section</h1>
      <span className='title-tag-sections-line side-line' /></div>
      </div>
    <div className="desktop-only">
      <Horizontal/>
    </div>
    <div className="mobile-only">
      <MobUiP/>
    </div>
    
 
   </section>
  )
}
