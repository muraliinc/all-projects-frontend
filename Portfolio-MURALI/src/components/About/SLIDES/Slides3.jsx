import React from 'react'

export default function Slides3() {
  return (
   <div className='slide-main-container'>
        <div className='slide-inside-container'>

          {/*outerline corner */}
          <span className='corner outer top-right'> </span>
          <span className='corner outer top-left'> </span>
          <span className='corner outer bottom-right'> </span>
          <span className='corner outer bottom-leftt'> </span>

          { /* outerline innercorner*/ }
          <span className='corner outerinner top-right'> </span>
          <span className='corner outerinner top-left'> </span>
          <span className='corner outerinner bottom-right'> </span>
          <span className='corner outerinner bottom-leftt'> </span>

          { /* innerline corner*/ }
          <span className='corner innerline top-right'> </span>
          <span className='corner innerline top-left'> </span>
          <span className='corner innerline bottom-right'> </span>
          <span className='corner innerline bottom-leftt'> </span>


        </div>
      
    </div>
  )
}
