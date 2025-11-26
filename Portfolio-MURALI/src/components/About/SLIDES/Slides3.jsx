import React from 'react'
import cinema from  "../../../assets/cinema.png"
import battery from "../../../assets/icons/battery-icon.png"
import recorder from "../../../assets/icons/record-icon.png"

export default function Slides3() {
  return (
   <div className='slide-main-container'>
        <div className='slide-inside-container'>

          <img className='cinema-img' src={cinema} alt="cinema-slide" />
          <img className='recorder-icon' src={recorder} alt="recorder-png" />
          <img className='battery-icon' src={battery} alt="battery-png" />


          {/*outerline corner */}
          <span className='corner outer top-right'> </span>
          <span className='corner outer top-left'> </span>
          <span className='corner outer bottom-right'> </span>
          <span className='corner outer bottom-left'> </span>

          { /* outerline innercorner*/ }
          <span className='corner outerinner outerinner-top-right'> </span>
          <span className='corner outerinner outerinner-top-left'> </span>
          <span className='corner outerinner outerinner-bottom-right'> </span>
          <span className='corner outerinner outerinner-bottom-left'> </span>

          { /* innerline corner*/ }
          <span className='corner innerline innerline-top-right'> </span>
          <span className='corner innerline innerline-top-left'> </span>
          <span className='corner innerline innerline-bottom-right'> </span>
          <span className='corner innerline innerline-bottom-left'> </span>

          <p className='white-text cinema-text'>“As a <span className='yellow-text'>cinephile,</span>  I appreciate storytelling and detail. Being <span className='yellow-text'> multi-passionate</span> keeps me <span className='yellow-text'> curious, adaptable,</span>  and open to new ideas—qualities I bring into every project.”</p>
          <span className='plus-sign'>+</span>

        </div>
      
    </div>
  )
}
