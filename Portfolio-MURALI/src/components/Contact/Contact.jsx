import React, { useState } from 'react'
import "./Contact.css";
import batman_lego from "../../assets/LegoBatman1.png";
import batman_icon from "../../assets/icons/BAT-logo-about-icon.png";



export default function Contact() {

const [result, setResult] = useState("");

const[showpopup, setshowpopup]= useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setshowpopup(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "bc6903d8-fd66-4e86-8aa2-a728d7a7653a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("message Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
   <section id='CONTACT' className='contact-section-main'>
     <div className='title-tag-wrapper'>
        <h1 className='title-tag-sections'>open for opportunities</h1>
      <span className='title-tag-sections-line side-line' /></div>
    <div className="section-wrapper">
         <form onSubmit={onSubmit}>
  <h2>I’m always open to discussing <span className='yellow-text'>new projects, creative ideas,</span> or <span className='yellow-text'> opportunities </span>to be part of your vision.</h2>
  <div className="input-box">
    <label htmlFor="names">fullname</label>
    <input className='field' placeholder='enter your name' id='names'  type="text" required  name='name' />
  </div>
  <div className="input-box">
    <label htmlFor="emails">email address</label>
    <input className='field' placeholder='enter your mail' id='emails'  type="email" required name='email'  />
  </div>
  <div className="input-box">
    <label htmlFor="messages">message</label>
    <textarea className='mess' name="message" id="messages" placeholder='enter your message' ></textarea>
    
  </div>
  <button type='submit' className='btn-submit-form'>send me</button>
 </form>
  {showpopup&&(
    <div className="overlay-popup">
      <div className="popup-box">
         <img src={batman_icon} alt="batman-form-close-icon" />
        <p className='result-p-form'>{result}</p>
        <button className='btn-close-form' onClick={()=>setshowpopup(false)}>close</button>
      </div>
    </div>
  )}

 <img className='form-logo-img' src={batman_lego} alt='contact-form-logo'/>
 <button className='btn-form'>resume</button>
    </div> 
   </section>
  )
}
