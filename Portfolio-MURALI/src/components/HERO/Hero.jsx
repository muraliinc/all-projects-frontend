import instaIcon from "../../assets/icons/Instgram.png"
import linkdin from "../../assets/icons/Linkdin-icon.png";
import whatsapp from "../../assets/icons/whatsapp-icon.png";
import batman_hero from "../../assets/batman-hero.png";
import murali_image from "../../assets/HERO-NAME-IMG.png";
import "./Hero.css";
import React from "react";
import { scrollToSection } from "../../utlis/scrollTo";

export default function Hero() {
  return (
    <section id="HOME" className="hero-section">
      <video src="https://res.cloudinary.com/dye5bdxxn/video/upload/v1763108178/Untitled_video_-_Made_with_Clipchamp_1_vaseha.mp4" autoPlay  muted loop />
      <div className="hero-sectionWrapper">
           <div className="title-wrapper">
              <img className="murali-logo" src={murali_image} alt="hero-name" />
              
          </div> 
     
        <div className="two-div-mainwrapper">
          <div className="title-container">
            <h2 className="title-hero">A Front-End Developer by choice.</h2>
            <p className="yellow-text mob-txt">
              I build responsive, fast, and intuitive web applications.
              <br />
              My tools: React.js, FIGMA, JavaScript, CSS, HTML.
            </p>
            <p className="white-text mob-txt">
              My mission: clean code, powerful design, <br />
              seamless experience.Not just websites.
            </p>
            <p className="yellow-text mob-txt">Digital legacies.</p>

            <div className="icons-hero">
              <a href="https://www.instagram.com/_.mdjr_?igsh=MWR1bHl3N2dncWQ0OQ=="  target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={instaIcon} alt="insta-icon" /></a>
             <a href="http://www.linkedin.com/in/murali-dharan-mdjr" target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={linkdin} alt="linkdin" /></a> 
             <a href="https://wa.me/+919840806489" target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={whatsapp} alt="whatsapp" /></a> 
            </div>
          </div>
              <div className="third-box-div">
   <img className="batman-logo-hero" src={batman_hero} alt="batman-logo"/>
               <div className="hero-action">
                     <a href="/FRONTEND-MURALIDHARAN.pdf" download ="FRONTEND-MURALIDHARAN.pdf"> <button className="btn-hero">resume</button></a> 
               <button className="btn-hero2" onClick={()=>scrollToSection("#CONTACT")}>contact</button>
               </div>
            
        </div>
        </div>
    
      
      </div>
      
    </section>
  );
}
