import React, { useState } from "react";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../Component/Style/addquestionModal.css";
import PostModal from "../Component/PostModal";
const AddQuestionModal = ({
  activeSection,
  setActiveSection,
  isModelOpen,
  Close,
  setIsModelOpen,
}) => {
  const [isQuestion, setIsQuestion] = useState(true);

  const openQusetion = () => {
    setIsQuestion(false);
  };
  const openPost = () => {
    setIsQuestion(true);
  };
  return (
    <Modal
      open={isModelOpen}
      MdClose={Close}
      onClose={() => setIsModelOpen(false)}
      closeOnEsc
      center
      closeOnOverlayClick={false}
      styles={{
        overlay: {
          height: "auto",
        },
      }}
    >
      <div className="modallContainer">
        <div className="modalTitle">
          <div
            className={`sectionBtn ${activeSection === "add" ? "active" : ""}`}
            onClick={() => {
              setActiveSection("add");
            }}
          >
            <h3>Add Question</h3>
            {/* {activeSection === "add" && <div className="underline"></div>} */}
          </div>
          <div
            className={`sectionBtn ${
              activeSection === "create" ? "active" : ""
            }`}
            onClick={() => {
              setActiveSection("create");
            }}
          >
            <h3>Create Post</h3>
            {/* {activeSection === "create" && <div className="underline"></div>} */}
          </div>
        </div>
        {activeSection === "add" ? (
          <div className="midContainer">
            <div className="guidelines">
              <h4 className="guidelinesheading">
                Tips on getting good answers quickly
              </h4>
              <ul className="guidelinesList">
                <li>Make sure your question has not been asked already</li>
                <li>Keep your question short and to the point</li>
                <li>Double-check grammar and spelling</li>
              </ul>
            </div>

            <div className="addprofile">
              <CgProfile className="userProfile" />
              <FaPlay className="profileplay" />
              <button className="optioBtn1">
                <BsPeople className="people" />
                Public
                <MdOutlineExpandMore className="more2" />
              </button>
            </div>
            <div className="question">
              <div className="question1">
                <input
                  type="text"
                  placeholder="Start your question with What , How , Why, etc. "
                  className="question1"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <PostModal />
          </div>
        )}

        {activeSection === "add" ? (
          <div className="modalButton">
            <button className="cancle" onClick={() => setIsModelOpen(false)}>
              Cancle
            </button>
            <button className="submit" type="submit">
              Add question
            </button>
          </div>
        ) : (
          <div className="modalButton">
            <button className="submit" type="submit">
              Post
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AddQuestionModal;
