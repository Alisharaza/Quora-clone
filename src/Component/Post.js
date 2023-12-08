import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import "../Component/Style/post.css";
import { useAPI } from "./Hooks/useAPI";
const Post = (props) => {
  const {
    title,
    author,
    channel,
    content,
    likeCount,
    commentCount,
    _id,
    images,
  } = props;
  const { post, Delete } = useAPI();

  const upVote = () => {
    console.log("joo");
    post(`/quora/like/${_id}`);
  };
  const downVote = () => {
    Delete(`/quora/like/${_id}`);
  };
  return (
    <div className="mainCardContainer">
      <div className="mainHeading">
        <div className="cardHeader">
          <div className="cardprofile">
            {author?.profileImage ? (
              <img
                alt={author?.name}
                src={author?.profileImage}
                className="profileImage"
              />
            ) : (
              <CgProfile className="profile" />
            )}
            <h3 className="profileName">
              <a href="/">{author?.name}</a>
            </h3>

            <p>
              <a href="Follow" className="follow">
                <span className="dot">.</span>Follow
              </a>
            </p>
            <div className="close">
              <MdClose className="closeIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className="cardBody">
        <a href="/" className="mainHeading">
          {title}
        </a>
        <p>{content}</p>
      </div>
      {images &&
        images?.map((image) => (
          <div className="cardImage" key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      <div className="cardFooter">
        <div className="upVoteBtn">
          <button className="cardaddBtns">
            <div className="upvoteContainer" onClick={upVote}>
              <LuArrowBigUp className="more1" />
              <span className="upVote">Upvote {likeCount}</span>
            </div>
            <div className="downvoteContainer" onClick={downVote}>
              <span>
                <LuArrowBigDown className="more" />
              </span>
            </div>
          </button>
        </div>
        <div className="cardMsgPart">
          <BiMessageRounded className="cardMsg" />
          <p> {commentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
