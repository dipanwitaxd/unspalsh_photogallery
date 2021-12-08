import React from "react";
import { Instagram, Twitter, ThumbUpOutlined } from "@material-ui/icons";

function PopUp({ getPopUpData, apiDataP }) {
  return (
    <div className="overlay">
      <div className="popup">
        <div>
          <button className="close" onClick={(e) => getPopUpData(e)}>
            x
          </button>
          <img
            className="img content-img"
            src={apiDataP.urls.small}
            alt="img"
          ></img> 
        </div>
        <div className="popup-contents">
          <div className="pop-grid">
            <img
              className="profile-img"
              src={apiDataP.user.profile_image.medium}
              alt="img"
            ></img>
          </div>
          <div className="pop-grid name-pop">
            {apiDataP.user.name} @{apiDataP.user.username}
          </div>
          <div className="pop-grid"></div>
          <div className="pop-grid name-pop">
            {apiDataP.user.social.instagram_username!=null ? 
            <div><Instagram fontSize="small" />/&nbsp;&nbsp;
            {apiDataP.user.social.instagram_username}</div>: " " }<br />
            {apiDataP.user.social.twitter_username!=null ? 
            <div>
            <Twitter fontSize="small" />/&nbsp;&nbsp;
            {apiDataP.user.social.twitter_username}</div>: " " }
          </div>

          <div className="pop-grid"></div>
          <div className="pop-grid">
            <ThumbUpOutlined fontSize="small" /> {apiDataP.likes}{" "}
          </div>
        </div>
        <div>
          <div className="related-tags">Related tags</div>
          <div className="tag-card">
            {apiDataP.tags.length > 0 &&
              apiDataP.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {" "}
                  {tag.title}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
