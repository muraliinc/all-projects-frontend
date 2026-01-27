import React from 'react'
import "./Project.css";
import mob_project1 from "../../assets/mob-ui/MOB-PROJECT-loopstudio1.png";
import mob_project2 from "../../assets/mob-ui/MOB-ECOMMERCE2.png";
import mob_project3 from "../../assets/mob-ui/MOB-PROJECT-SLIDE3.png";
import mob_project4 from "../../assets/mob-ui/MOB-PROJECT-SLIDE4.png";



export default function MobileUi() {

 
    
    
  return (
    <div className='mob-view-grid'>
      <div className="project-imgs-mob1"> <img className='project-mob' src={mob_project1} alt="project1-mob" /> </div>
      <div className="project-imgs-mob2"> <img className='project-mob' src={mob_project2} alt="project1-mob" /> </div>
      <div className="project-imgs-mob3"> <img className='project-mob' src={mob_project3} alt="project1-mob" /> </div>
      <div className="project-imgs-mob4"> <img className='project-mob' src={mob_project4} alt="project1-mob" /> </div>
    </div>
  )
}
