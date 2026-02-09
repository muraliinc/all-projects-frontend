import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import darkbtn from "../../assets/icons/DARKbtn.png";
import logo_icon from "../../assets/icons/LOGO-ICON.png";
import menu_icon from "../../assets/icons/menu-icon.png";
import joker_popup from "../../assets/joker-popup.webp";
import close_icon from "../../assets/icons/close-icon.png";
import night_btn from "../../assets/icons/nightbtn.png"
import "./Navbar.css"
import { scrollToSection } from "../../utlis/scrollTo";


export default function Navbar() {

const [showPopup,setShowPopup]= useState(false);
const[IsmenuOpen,SetIsmenuOpen] = useState(false);
const popupRef= useRef(null);
const btnRef =useRef(null);


const scrollPosition = useRef(0);


const handleShowpopup =()=>{
  setShowPopup(true);

   setTimeout(() => {
   setShowPopup(false)
   }, 4000);
};

const handleMenu =()=>{
  SetIsmenuOpen(!IsmenuOpen);
}
const handleMenunavigate =(id)=>{
    SetIsmenuOpen(false);      // close menu first
  scrollToSection(id); 
}

useEffect(() => {
  if (showPopup||IsmenuOpen) {
    // Save current scroll position
    scrollPosition.current = window.scrollY;

    document.body.classList.add("no-scroll");

    // Freeze body at current position
    document.body.style.top = `-${scrollPosition.current}px`;
  } else {
    document.body.classList.remove("no-scroll");

    // Reset body position
    document.body.style.top = "";

    // Restore scroll position
    window.scrollTo(0, scrollPosition.current);
  }
}, [showPopup,IsmenuOpen]);



//popup joker animation

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


//btn rotation
useEffect(() => {
  if (!btnRef.current) return;

  gsap.to(btnRef.current, {
    rotate: IsmenuOpen ? 90 : 0,
    duration: IsmenuOpen ? 0.4 : 0.3,
    ease: IsmenuOpen ? "power2.out" : "power2.inOut"
  });

}, [IsmenuOpen]);



  return (
    <nav className="Navbar">
      <div className="container-nav Navbar-inside">
        <img className="logo-icon" src={logo_icon} alt="logo-icon" />

        <div className="nav-right">
         <button className="nav-btn" onClick={handleShowpopup}> <img className="dark-btn " src={showPopup?night_btn:darkbtn} alt="dark-btn" /></button>
         <button className="nav-btn" onClick={handleMenu}><img className="menu-icon  " src={IsmenuOpen? close_icon : menu_icon} alt="menu-icon" /></button>
        </div>
      </div>
     { showPopup && (
      <div className="overlay-popup-joker"  ref={popupRef}>
         <div className="overlay-inside-container">
           <img className="joker-popup" src={joker_popup}  alt="joker-popup" width="800" height="999" loading="lazy" decoding="async"/>
           <p className="popup-text">
            <span className="GS-word">darkness</span>
            <span  className="GS-word"> is </span>
            <span  className="GS-word">our</span>
            <span  className="GS-word">alley!!</span> </p>
          </div> 
      </div>
     )}
{IsmenuOpen&& (
<>
<div className="backdrop-menu" onClick={handleMenu}> </div>
   <div className="menu-dropdown">
    <button ref={btnRef} className="menu-close-btn"><img  src={close_icon} alt="menu-close-hamburger" onClick={handleMenu} /></button>
    <ul className="menu-ul-items">
      <li onClick={()=>handleMenunavigate("#HOME")}>HOME</li>
      <li onClick={()=>handleMenunavigate("#ABOUT")} >ABOUT</li>
      <li  onClick={()=>handleMenunavigate("#PROJECT")}>PROJECT</li>
      <li  onClick={()=>handleMenunavigate("#SKILLS")}>SKILLS</li>
      <li  onClick={()=>handleMenunavigate("#PORTFOLIO")}>PORTFOLIO</li>
      <li  onClick={()=>handleMenunavigate("#CONTACT")}>CONTACT</li>
    </ul>

</div>
</>

)}


    </nav>
  );
}
