import React, { useEffect, useState } from "react";

function Suggestion() {
  const [Profile, setprofile] = useState(null);
  const [Suggestion, setsuggestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Profile")
      .then((data) => data.json())
      .then((data) => setprofile(data))
      .catch((error) => console.log(error));
    console.log(Profile);

    fetch("http://localhost:3000/Suggestion")
      .then((data) => data.json())
      .then((data) => setsuggestion(data))
      .catch((error) => console.log(error));
    console.log(Suggestion);
  }, []);

  return (
    <div >
      <div className="suggestion  w-20 ">
        {Profile ? (
          <div className="d-flex ">
            <img className="dp rounded-circle" src={Profile.profile_pic}></img>
            <h6 className="mt-2 ">{Profile.username}</h6>
            <p className="text-primary ms-auto mt-2">switch</p>
          </div>
          
        ) : (
          <p> network error </p>
        )}
        <div className="d-flex">
          <p>suggested for you</p>
          <b className="ms-auto">see all</b>
        </div>

        {Suggestion.length > 0 ? (
          <div className="suggesting-post">
            {Suggestion.map((suggest) => (
              <div key={suggest.id}>
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={suggest.profile_pic}
                    alt="profile-img"
                  />
                  <h5 className="user-title">{suggest.username}</h5>
                  <p className="follow ms-auto text-primary">Follow</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <img src="src\assets\loading.gif" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Suggestion;
