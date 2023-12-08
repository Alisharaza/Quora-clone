import React, { useState } from "react";
import "../Component/Style/answerCard.css";
import { LuArrowBigDown } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";
import { BsWifi } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import AnserBtnModal from "./AnserBtnModal";

export const AnsweCard = () => {
  const [isAnswerBtn, setIsAnswerBtn] = useState(false);
  const Close = <MdClose />;

  return (
    <>
      <div className="wrapStar">
        <div className="starContainer">
          <AiOutlineStar className="star" />
        </div>

        <div className="questionsHeading">
          <h1>Questions for you</h1>
        </div>
      </div>
      <div className="main">
        <div className="mainCardContainer">
          <div className="mainHeadings">
            <div className="cardHeading">
              <h3>
                <a href="/" className="mainHeading">
                  tiltle
                </a>
              </h3>
              <div className="close">
                <MdClose className="closeIcon" />
              </div>
            </div>
            <div className="wrapFollowed">
              <a href="/" className="answerCount">
                No answer yet
              </a>
              <span className="lastFollow">Last followed 1h</span>
            </div>
          </div>
          <div className="wrap">
            <div className="cardFooter">
              <button
                className="answerCardaddBtn"
                onClick={() => setIsAnswerBtn(true)}
              >
                <LuPenSquare className="icons" />
                <span>Answer</span>
              </button>
              <div className="foll">
                <BsWifi className="icons" />
                <span className="follows">Follow</span>
              </div>
            </div>

            <div className="upVoteBtnArrow">
              <LuArrowBigDown className="downArrow" />
            </div>
            <AnserBtnModal
              Close={Close}
              isAnswerBtn={isAnswerBtn}
              setIsAnswerBtn={setIsAnswerBtn}
            />
          </div>
        </div>
      </div>
    </>
  );
};
