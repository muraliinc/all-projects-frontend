import instaIcon2 from "../../assets/icons/Instgram.webp";
import linkdin2 from "../../assets/icons/Linkdin-icon.webp";
import whatsapp2 from "../../assets/icons/whatsapp-icon.webp";
import batman_hero from "../../assets/batman-hero.webp";
import murali_image from "../../assets/HERO-NAME-IMG.webp";
import "./Hero.css";
import React from "react";
import { scrollToSection } from "../../utlis/scrollTo";

export default function Hero() {
  return (
    <section id="HOME" className="hero-section">
      {/* <video src="https://res.cloudinary.com/dye5bdxxn/video/upload/v1763108178/Untitled_video_-_Made_with_Clipchamp_1_vaseha.mp4" autoPlay  muted loop /> */}
      <video  src="https://res.cloudinary.com/dye5bdxxn/video/upload/q_auto,f_auto,vc_auto,w_854/v1763108178/Untitled_video_-_Made_with_Clipchamp_1_vaseha.mp4"  autoPlay muted loop playsInline/>
      <div className="hero-sectionWrapper">
           <div className="title-wrapper">
              <img className="murali-logo" src={murali_image} alt="MURALI-hero banner" width="1536" height="563" decoding="async"  />
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
              <a href="https://www.instagram.com/_.mdjr_?igsh=MWR1bHl3N2dncWQ0OQ=="  target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={instaIcon2} alt="insta-icon" height="102" width="102" decoding="async" /></a>
             <a href="http://www.linkedin.com/in/murali-dharan-mdjr" target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={linkdin2} alt="linkdin" height="102" width="102" decoding="async" /></a> 
             <a href="https://wa.me/+919840806489" target="_blank" rel="noopener noreferrer"><img className="icons-apps" src={whatsapp2} alt="whatsapp" height="102" width="102" decoding="async" /></a> 
            </div>
          </div>
              <div className="third-box-div">
   <img className="batman-logo-hero" src={batman_hero} alt="batman-logo"  width="612" height="825" decoding="async" />
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
