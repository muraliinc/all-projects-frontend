import React from 'react'
import "./Footer.css";
import footer_icon from "../../assets/icons/name-footer-logo.png";
import instagram_icon from"../../assets/icons/Instgram.png";
import linkdin_icon from "../../assets/icons/Linkdin-icon.png";
import whatsapp_icon from "../../assets/icons/whatsapp-icon.png";
import { scrollToSection } from '../../utlis/scrollTo';

export default function Footer() {
  return (
    <section className='footer-section'> 
       <span className='bottom-tag-line'></span>
        <div className='inside-footer-container'>
        <div className="footer-container">
          <img className='footer-logo' src={footer_icon} alt="footer-logo" />
          <div className="bottom-menu-items">
            <p className='footer-title white-text footer-link'>menu</p>
            <ul className='footer-list'>
              <li onClick={()=>scrollToSection("#HOME")} className='white-text footer-link'>home</li>
              <li onClick={()=>scrollToSection("#ABOUT")}  className='white-text  footer-link'>ABOUT</li>
              <li onClick={()=>scrollToSection("#PROJECT")} className='white-text  footer-link'>PROJECTS</li>
              <li onClick={()=>scrollToSection("#SKILLS")} className='white-text  footer-link'>SKILLS</li>
              <li onClick={()=>scrollToSection("#PORTFOLIO")} className='white-text  footer-link'>PORTFOLIO</li>
              <li onClick={()=>scrollToSection("#CONTACT")} className='white-text  footer-link'>CONTACT</li>
            </ul>
            
          </div>
        </div>
       <div className="social-media-footer">
        <div className="last-social-items">
          <p className='white-text footer-title1 footer-link'>SOCIALS</p>
         <div className="footer-social">
        <a href="https://www.instagram.com/_.mdjr_?igsh=MWR1bHl3N2dncWQ0OQ=="  target="_blank" rel="noopener noreferrer"><img className='footer-icon' src={instagram_icon} alt="instgram-icon" /></a> 
      <a href="http://www.linkedin.com/in/murali-dharan-mdjr" target="_blank" rel="noopener noreferrer"><img className='footer-icon' src={linkdin_icon} alt="linkedin-icon" /></a>  
      <a href="https://wa.me/+919840806489" target="_blank" rel="noopener noreferrer"><img className='footer-icon' src={whatsapp_icon} alt="whatsapp-icon" /></a>  
         </div>
        </div>
       </div>
        </div>
        <div className="footer-bottom-line-rights">
            <span className='footer-bottom-line'></span>
         <h4 className='footer-bottom-text'>© 2026 muralidharan| Frontend Developer|ui & ux</h4>
       
        </div>
        
    </section>
  )
}
