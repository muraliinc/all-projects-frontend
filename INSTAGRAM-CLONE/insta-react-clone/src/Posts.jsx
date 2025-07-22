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
    
    <div className='d-flex justify-content-center'>
      { posts.length >0 ? (
        <div>
     { posts.map((post)=>( 
      <div className='my-3' key={post.id}>
        <div className='d-flex'> 
          <img className='dp rounded-circle' src={post.user.profile_pic} alt="profile-img" />
          <h5 className='user-title'>{post.user.username}</h5>
          <p className='user-time'>{post.user.user_time}</p>
          <i className="ms-auto m-2 bi bi-three-dots"></i>

        </div>
        <img className='post-image' src={post.image} alt="post" />

        <div className='d-flex '>
          <i className="bi bi-heart"></i>
          <i className="bi bi-chat"></i>
          <i className="bi bi-send sends" style={{ transform: "rotate(20deg)", display: "inline-block" }}></i>
          <i className="ms-auto bi bi-bookmark"></i>
          
           </div>

           <div>
             <b> {post.likes}Likes</b>
             <p>{post.caption}</p>
             </div>
      
      </div>
      
     ))}

        </div> ): (
          <div> 
            <img src="src\assets\loading.gif" alt="" />
          </div>
        )
      }
    </div>
  )
}

export default Posts
