import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StoriesView() {
  const { id } = useParams();
  const [story, setstory] = useState(null); //we use null when there is single data but we use array when multiple


  useEffect(()=>{
  fetch(`http://localhost:3000/Story/${id}`)
  .then((data)=>data.json())
  .then((data)=> setstory(data))
  .catch((err) => console.log(err)
   )

},[]);
 
  return ( 
  <div>
    { story ? <div className="whole-story"> 
      <div className="entire-story">
              <img className="vh-100 story-view" src={story.user.image} alt="img" />
               <div className="story-view-top d-flex"> 
                  <img className="story-view-dp text-primary rounded-circle  " src={story.user.profile_pic} alt="story-profile"/>
                  <p className="story-view-name text-primary">{story.user.username}</p>
                    <p>{story.user.user_time}</p>
              </div>
        </div>
  </div>
      : <p>loading</p>}
    </div>
  );
}

export default StoriesView;
//npx json-server --watch insta-react-clone/DATABASE/Db.json --port 3000  --static ./insta-react-clone/assets