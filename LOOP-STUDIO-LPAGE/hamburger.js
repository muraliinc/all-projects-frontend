const open_button = document.querySelector(".ham-btn-open");
const close_button = document.querySelector(".btn-close");
const Hamburgerlogo = document.querySelector(".hamlogo");  //to hide the logo after click open
const Hamburger_para = document.querySelector(".white-borderbox-hero");  //to hide the logo after click open
const Mobile_screen=document.querySelector(".hami");
const body = document.querySelector("body")


open_button.addEventListener("click",()=>{
    Mobile_screen.classList.add("show");
    Hamburger_para.style.display ="none";
    Hamburgerlogo.style.display="none";
    open_button.style.display = "none";
    close_button.style.display ="block";
    body.classList.add("no-scroll");
    console.log(open_button);
});


close_button.addEventListener("click",()=>{
    Mobile_screen.classList.remove("show");
    Hamburger_para.style.display ="block";
    Hamburgerlogo.style.display="block";
    open_button.style.display = "block";
    close_button.style.display ="none";
    body.classList.remove("no-scroll");
    console.log(close_button);
});

