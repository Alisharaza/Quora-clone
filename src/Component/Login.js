import React, { useState } from "react";
import "../Component/Style/login.css";
import { MdClose } from "react-icons/md";
import SignupPageModal from "./SignupPageModal";
const Login = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const Close = <MdClose />;
  console.log(isModelOpen);
  return (
    <div className="loginContainer">
      <div className="loginSubCon">
        <div className="img">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.mUOWMXKL45aGSE0Xb61-FwHaE8&pid=Api&P=0&h=180"
            alt="logo"
          />
          <h1>A place to share knowledge and better understand the world</h1>
        </div>

        <div className="wrapLR">
          <div className="leftPart">
            <p>
              By Continuing indicate that you agree to Quora's
              <span className="terms"> Terms of Service </span>
              and <span className="terms">Privacy Policy</span>
            </p>
            <div className="btn">
              <button className="email" onClick={() => setIsModelOpen(true)}>
                Sign up with email
              </button>
            </div>
          </div>
          <div className="rightPart">
            <h1>Login</h1>
            <form>
              <label form="email" className="email1">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input"
              />
              <label for="password" className="email1">
                Password
              </label>
              <br />
              <input
                type="password"
                className="input"
                placeholder="enter password"
              />
            </form>
            <div className="forget">
              <p>Forget password?</p>
              <button className="submit sub">Login</button>
            </div>
          </div>
        </div>
      </div>
      <SignupPageModal
        Close={Close}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
    </div>
  );
};

export default Login;
