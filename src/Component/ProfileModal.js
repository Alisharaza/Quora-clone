import React from "react";
import { CgProfile } from "react-icons/cg";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";
import "../Component/Style/profileModal.css";

const ProfileModal = ({ isModelOpens, setIsModelOpens, Close }) => {
  return (
    <>
      <Modal
        open={isModelOpens}
        MdClose={Close}
        onClose={() => setIsModelOpens(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
          },
        }}
      ></Modal>
      <div className="profileModalContainer">
        <div className="profilr">
          <CgProfile className="icon" />
          <h1>Name</h1>
        </div>
        <ul className="lists">
          <li>Bookmarks</li>
          <Link to="/login">
            <li>logout</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default ProfileModal;
