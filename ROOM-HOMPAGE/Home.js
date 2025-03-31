//below is for button left and right

let index_value = 0;

const images = [
  "ASSESTS/desktop-image-hero-1.jpg",
  "ASSESTS/desktop-image-hero-2.jpg",
  "ASSESTS/desktop-image-hero-3.jpg",
];

const images_mob =[
  "ASSESTS/mobile-image-hero-1.jpg",
  "ASSESTS/mobile-image-hero-2.jpg",
   "ASSESTS/mobile-image-hero-3.jpg",
];

const heading_title = [
  "Discover innovative ways to decorate ",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const paragraph_tag = [
  "we provide unmatched quality , comfort, and style for property owners across the country. Our exports combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all cover the world,it's easy for you to find the furniture for your home or place of business.Locally,we're in most major cities throughout the country, Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality . Our company has invested in advanced technology to ensure that every poduct is made as perfect and as consitent as possible. With three decades of experience in this industry,we undestand what customers want for their home and office."
];

function nextimage(){
    if(index_value < images.length -1){
        index_value++ ;
    }
    console.log("clicked right");
    
    updatevalue();
}

function previmage(){
    if (index_value > 0) {
        index_value--;
    }
    console.log("left clicked");
    
    updatevalue();
  }

function updatevalue (){
    document.querySelector(".hero-image1").src= images[index_value];
    document.querySelector(".hami-mob").src= images_mob[index_value];
    document.querySelector(".heading-title").textContent = heading_title[index_value];
    document.querySelector(".p-tag").textContent = paragraph_tag[index_value];
}

// below is for hamburger menu

const  open_button = document.querySelector(".ham-open-btn");
const  close_button = document.querySelector(".ham-close-btn");
const room_logo = document.querySelector(".logo-nav");
const nav_bar = document.querySelector(".list-items");

open_button.addEventListener("click",()=>{
room_logo.style.display="none";
open_button.style.display ="none";
close_button.style.display="block";
nav_bar.style.display ="flex";
});

close_button.addEventListener("click",()=>{
  room_logo.style.display="block";
 open_button.style.display="block";
 close_button.style.display="none"
 nav_bar.style.display="none"
});
