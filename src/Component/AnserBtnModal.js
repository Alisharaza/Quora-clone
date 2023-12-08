import React from "react";
import { CgProfile } from "react-icons/cg";
import Modal from "react-responsive-modal";
import "../Component/Style/postModal.css";
const AnserBtnModal = ({ isAnswerBtn, Close, setIsAnswerBtn, key }) => {
  return (
    <Modal
      open={isAnswerBtn}
      MdClose={Close}
      onClose={() => setIsAnswerBtn(false)}
      closeOnEsc
      center
      closeOnOverlayClick={false}
      styles={{
        overlay: {
          height: "auto",
        },
      }}
    >
      <div className="answerBtnContainer">
        <div className="addprofile">
          <CgProfile className="pro" />
          <div className="crediential">
            <h1 className="heading">username</h1>
            <button className="creadidentialBtn">Choose credential</button>
          </div>
        </div>
        <div className="para">
          <h1 className="questionHeading">Question</h1>
          <h3>Write your answer</h3>
        </div>
      </div>
      <div className="modalButton">
        <button className="submit sub" type="submit">
          Post
        </button>
      </div>
    </Modal>
  );
};

export default AnserBtnModal;
