import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "../Component/Style/signuppagemodal.css";

const SignupPageModal = ({ isModelOpen, Close, setIsModelOpen, key }) => {
  console.log("render", isModelOpen);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login or signup logic here
    // Use state or API calls as needed
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
      <div className="loginModalContainer">
        <form action="post" className="loginForm" onSubmit={handleSubmit}>
          <h1 className="login">Signup</h1>
          <div className="mode">
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="loginDetails"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="loginDetails"
            />

            <input
              type="passsword"
              name="password"
              placeholder="Your password"
              className="loginDetails"
            />

            <button className="submit" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignupPageModal;
