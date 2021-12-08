import React from "react";
import PopUp from "./PopUp";
import { useState } from "react";
import { ThumbUpOutlined } from "@material-ui/icons";

function Display({ apiDataP, index }) {
  const [imagePop, setImagePop] = useState(false);

  console.log(apiDataP);
  console.log("hello");
  function getPopUpData(e) {
    e.preventDefault();
    console.log("im in");
    setImagePop(!imagePop);
  }

  return (
    <div>
      <div className="row-list" key={index} onClick={(e) => getPopUpData(e)}>
        <img
          className="img"
          
          src={apiDataP.urls.thumb}
          alt="img"
        ></img>
        {imagePop ? (
          <PopUp getPopUpData={getPopUpData} apiDataP={apiDataP}></PopUp>
        ) : (
          ""
        )}
        <div className="row-list-card">
          <div>
            <img
              className="profile-img"
              src={apiDataP.user.profile_image.small}
              alt="img"
            ></img>
          </div>
          <div className="name-row-list">
              {apiDataP.user.name} @{apiDataP.user.username}
          </div>
          <div></div>
          <div>
            <ThumbUpOutlined fontSize="small" /> {apiDataP.likes} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
