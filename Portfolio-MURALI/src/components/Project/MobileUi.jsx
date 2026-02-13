import React from 'react'
import "./Project.css";
import mob_project1 from "../../assets/mob-ui/MOB-PROJECT-loopstudio1.webp";
import mob_project2 from "../../assets/mob-ui/MOB-ECOMMERCE2.webp";
import mob_project3 from "../../assets/mob-ui/MOB-PROJECT-SLIDE3.webp";
import mob_project4 from "../../assets/mob-ui/MOB-PROJECT-SLIDE4.webp";



export default function MobileUi() {

 
    
    
  return (
    <div className='mob-view-grid'>
      <div className="project-imgs-mob1 dms"> <img className='project-mob' src={mob_project1} alt="project1-mob" width="606" height="311" decoding='async' loading='lazy' /> </div>
      <div className="project-imgs-mob2 dms"> <img className='project-mob' src={mob_project2} alt="project1-mob" width="289" height="379" decoding='async' loading='lazy' /> </div>
      <div className="project-imgs-mob3 dms"> <img className='project-mob' src={mob_project3} alt="project1-mob"  width="289" height="379" decoding='async' loading='lazy' /> </div>
      <div className="project-imgs-mob4 dms"> <img className='project-mob' src={mob_project4} alt="project1-mob" width="606" height="311" decoding='async' loading='lazy' /> </div>
    </div>
  )
}
