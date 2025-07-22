import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setprofile] = useState(null);
  const [followers, setfollowers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Profile").then((data) => {
      setprofile(data.data)(console.log(data))
    }).catch((err)=>console.log(err)
    )

    axios
      .get("http://localhost:3000/Followers")
      .then((data) => {
        setfollowers(data.data), console.log(data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  const handleupdate = (e) => {
    setprofile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const functionUpdate = async () => {
    //this is for update the existing api
    axios
      .put("http://localhost:3000/Profile", profile)
      .then(console.log("updated"), alert("updated"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-5 ">
      {profile ? (
        <div className="d-flex gap-5 justify-content-center">
          <img
            className="rounded-circle prof"
            src={profile.profile_pic}
            alt="profile-image"
          />
          <h1 className="mt-5">{profile.username}</h1>
        </div>
      ) : (
        <p>not loading</p>
      )}

      {profile ? (
        <div className="d-flex justify-content-center m-4">
          <div>
            <input
              className="form-control  "
              type="text"
              value={profile.username}
              name="username"
              onChange={handleupdate}
            />
            <input
              className="form-control mt-2"
              type="text"
              value={profile.profile_pic}
              name="profile_pic"
              onChange={handleupdate}
            />
            <button onClick={functionUpdate} className="btn btn-primary my-4">
              UPDATE
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>not loading</p>
        </div>
      )} 

      {followers.length >0 ? ( followers.map ((followers)=>
        <div className="d-flex w-50 m-auto" key={followers.id}> 
        <p>{followers.username}</p> 
        <button className="ms-auto my-1 btn btn-danger"> followed</button>
        </div>
      ) ):( <div> <p> not loading</p> </div>)}

    
    </div>
  );
}

export default Profile;
