import insta_icon from "../../assets/icons/instgram.png";
import linkdin from "../../assets/icons/Linkdin-icon.png";
import whatsapp from "../../assets/icons/whatsapp-icon.png";
import murali2 from "../../assets/murali-name2.png"; 
import batman_hero  from "../../assets/batman-hero.png";
import murali_image from "../../assets/HERO-NAME-IMG.png"
import "./Hero.css";
import React from 'react'

export default function Hero() {
  return (
    <div className="hero-section">
        {/*HERE VIDEO NEED TO BE INCLUDED HER FOR THE HERO SECTION WIDTH SIZE  */}
    <div className="hero-sectionWrapper">
        <img className="murali-logo" src={murali_image} alt="hero-name" />

        <div className="title-container">
            <h2></h2>

        </div>


        </div>
      
    </div>
  )
}
