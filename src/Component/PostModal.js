import React from "react";
import { CgProfile } from "react-icons/cg";
import "../Component/Style/postModal.css";
const PostModal = () => {
  return (
    <div className="postContainer">
      <div className="addprofile">
        <CgProfile className="pro" />
        <div className="crediential">
          <h1 className="heading">username</h1>
          <button className="creadidentialBtn">Choose credential</button>
        </div>
      </div>
      <div className="para">
        <textarea className="text" placeholder="Say something..."></textarea>
      </div>
    </div>
  );
};

export default PostModal;
