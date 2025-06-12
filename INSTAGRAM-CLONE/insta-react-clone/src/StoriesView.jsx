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
      {id}
    { story ? <div> 
      <img src={story.user.image} alt="img" />
     </div> : <p>hello</p>}
    </div>
  );
}

export default StoriesView;
//npx json-server --watch insta-react-clone/DATABASE/Db.json --port 3000  --static ./insta-react-clone/src/assets