import React from 'react'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='d-flex  vh-100'>
      <div className='w-20'><Sidebar></Sidebar></div>
      <div className='w-50 bg-primary'> center</div>
      <div className='w-30'>suggestion</div>
    </div>
  )
}

export default App
