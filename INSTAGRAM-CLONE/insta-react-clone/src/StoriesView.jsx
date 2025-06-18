import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

function StoriesView() {
  const { id ,tot } = useParams();
  const [story, setstory] = useState(null); //we use null when there is single data but we use array when multiple
const navigate =useNavigate()

  useEffect(()=>{
  fetch(`http://localhost:3000/Story/${id}`)
  .then((data)=>data.json())
  .then((data)=> setstory(data))
  .catch((err) => console.log(err)
   )

},[id]);
 
if(id > tot || id<=0 ){
 navigate("/")
}
  return ( 
  <div>
    { story ? <div className="whole-story align-items-center"> 
      <div className="entire-story align-items-center">
               <div className="story-view-top d-flex"> 
                  <img className="story-view-dp text-primary rounded-circle  " src={story.user.profile_pic} alt="story-profile"/>
                  <p className="story-view-name stry-name">{story.user.username}</p>
                    <p className="stry-name">{story.user.user_time}</p>
              </div>
              <Link to={`http://localhost:5173/Story/${Number (id) -1 }/${tot}`}>  <i class="arrow bi bi-arrow-left-circle-fill"></i></Link>
               <img className="vh-100 story-view" src={story.user.image} alt="img" />
                 <Link to={`http://localhost:5173/Story/${Number (id)  +1}/${tot}`}>  <i class="arrow bi bi-arrow-right-circle-fill"></i></Link>
        </div>
  </div>
      : <p>loading</p>}
    </div>
  );
}

export default StoriesView;
//npx json-server --watch insta-react-clone/DATABASE/Db.json --port 3000  --static ./insta-react-clone/assets