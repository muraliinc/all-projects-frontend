import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div>
      <div className=' story'><Stories/></div>
      <div><Posts/> </div>
    </div>
  )
}

export default Feed
