import React from 'react';
import batman_logo_icon from "../../../assets/icons/BAT-logo-about-icon.png";

export default function Slides1() {
  return (
    <div className='slide-main-container'>
        <div className='slide-inside-container'>
         <p className="text-1 white-text" > <span className="yellow-text"> I'M</span>  MURALI</p>
             <p className="text-2 white-text"> <span className="yellow-text"> ONCE FROM A </span>NON-IT PATH,<span className="yellow-text">NONW SHAPING IDEAS INTO POWERFUL WEB EXPERIENCE</span>  CREATIVITY MEETS CODE </p>
              <ul className="bullet-yellow">
             <li className='list-text yellow-text'>From <span className="white-text">sales,</span> I learned how people think</li> 
              <li className='list-text yellow-text'>From <span className="white-text">boxing,</span> I learned how to stay relentless.</li> 
                </ul>   
              <p className="text-3 white-text"> Now, I bring both into every project — with discipline, focus, and precision.</p>   
             <p className="text-4 white-text">Always ready to build, collaborate, and rise to the challenge. </p>   
            <img className="bottom-batman" src={batman_logo_icon} alt="batman-logo"/>
      </div>
    </div> 
  )
}
