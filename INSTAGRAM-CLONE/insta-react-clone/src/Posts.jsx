import React, { useEffect, useState } from 'react'

function Posts() {
  
const [posts,setposts]=useState([])

useEffect(()=>{
  fetch("http://localhost:3000/POSTS").
  then((data)=>data.json()).
  then(data=>setposts(data)
  ).
  catch((error)=> console.log(error)
  )
},[])
 console.log(posts);
 
  return (
    
    <div>
      { posts.length >0 ? (
        <div>
     { posts.map((post)=>( 
      <div key={post.id}>
        <div> 
          <img className='dp rounded-circle' src={post.user.profile_pic} alt="profile-img" />

        </div>
      
      </div>
      
     ))}

        </div> ): (
          <div> loding posts</div>
        )
      }
    </div>
  )
}

export default Posts
