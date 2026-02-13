
import React, { useEffect, useState } from 'react'

export default function IsMobile() {

const [ismobile,setIsMobile]= useState(window.innerWidth < 767);
 useEffect(()=>{
const resize = () => setIsMobile(window.innerWidth <767);
window.addEventListener("resize",resize)

return ()=> window.removeEventListener("resize",resize)


},[]);

return  ismobile;

}
