import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import darkbtn from "../../assets/icons/DARKbtn.png";
import logo_icon from "../../assets/icons/LOGO-ICON.png";
import menu_icon from "../../assets/icons/menu-icon.png";
import joker_popup from "../../assets/joker-popup.png";
import close_icon from "../../assets/icons/close-icon.png";
import "./Navbar.css"


export default function Navbar() {

const [showPopup,setShowPopup]= useState(false);
const[IsmenuOpen,SetIsmenuOpen] = useState(false);
const popupRef= useRef(null);
const [scrollY, setScrollY] = useState(0);  // Add this state


const handleShowpopup =()=>{
  setShowPopup(true);

   setTimeout(() => {
   setShowPopup(false)
   }, 4000);
};

const handleMenu =()=>{
  SetIsmenuOpen(!IsmenuOpen);
}

useEffect(() => {
  if (!showPopup || !popupRef.current) return;

  const ctx = gsap.context(() => {

    gsap.from(".overlay-inside-container", {
      scale: 0.6,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.fromTo(".GS-word", 
      { opacity: 0, y: 20 },  
  { 
    opacity: 1, 
    y: 0,
    stagger: 0.3,
    duration: 0.5,
    delay: 0.5 
  });

  }, popupRef.current);  

  return () => ctx.revert();

}, [showPopup]);


  return (
    <nav className="Navbar">
      <div className="container-nav Navbar-inside">
        <img className="logo-icon" src={logo_icon} alt="logo-icon" />

        <div className="nav-right">
         <button className="nav-btn" onClick={handleShowpopup}> <img className="dark-btn " src={darkbtn} alt="dark-btn" /></button>
         <button className="nav-btn" onClick={handleMenu}><img className="menu-icon  " src={IsmenuOpen? close_icon : menu_icon} alt="menu-icon" /></button>
        </div>
      </div>
     { showPopup && (
      <div className="overlay-popup-joker"  ref={popupRef}>
         <div className="overlay-inside-container">
           <img className="joker-popup" src={joker_popup} alt="joker-popup" />
           <p className="popup-text">
            <span className="GS-word">darkness</span>
            <span  className="GS-word"> is </span>
            <span  className="GS-word">our</span>
            <span  className="GS-word">alley!!</span> </p>
          </div> 
      </div>
     )}
{IsmenuOpen&& (
   <div className="menu-dropdown">
    <ul className="menu-ul-items">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>PROJECT</li>
      <li>SKILLS</li>
      <li>PORTFOLIO</li>
      <li>CONTACT</li>
    </ul>

</div>
)}


    </nav>
  );
}
