import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [Stories, setstories] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/Story")
      .then((data) => data.json())
      .then((data) => setstories(data))
      .catch((error) => console.log(error));
  }, []);

  let tot = 0;

  return (
    <div >
      <div className="d-none">   {tot =Stories.length}</div>
    
        {Stories.length > 0 ? (

          <div className='d-flex gap-1  m-2 story-wrap' >
            {Stories.map((story) => (
              <div className="navi"  key={story.id} onClick={()=>{navigate(`/Story/${story.id}/${tot}`)}}>
                <div className='gradian-border m-2 rounded-circle' > 
                <img
                  className="story-dp "
                  src={story.user.profile_pic}
                  alt="storyimg"
                />
                </div>
                <p className="justify-content-center">{story.user.username}</p>
                
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>loading</p>
          </div>
        )}
      
    </div>
  );
}

export default Stories;
