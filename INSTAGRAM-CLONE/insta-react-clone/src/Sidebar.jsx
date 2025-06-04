import React from 'react'

function Sidebar() {
  return (

    <>
    <div className='m-3'>
      <div className='d-flex flex-column gap-3 '>
        <img className='instagram-logo' src="src\assets\instagramtext.png" alt="img" />
        <div> <i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notification</div>
        <div><i className="bi bi-file-plus"></i>Create</div>
        <div><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
    </>
  
  )
}

export default Sidebar
