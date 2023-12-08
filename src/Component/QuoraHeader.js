import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdAssignment, MdOutlineAssignment } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import { LuPenSquare } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaPenSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { IoMdNotifications } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import "../Component/Style/quoraHeader.css";
import AddQuestionModal from "./AddQuestionModal";
import SearchResult from "./SearchResult";

const QuoraHeader = ({ heading }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const Close = <MdClose />;
  const [activeSection, setActiveSection] = useState("add");
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => setSearchValue(e.target.value);
  const clearSearch = () => setSearchValue("");
  return (
    <div className="qHeader">
      <div className="qHeaderContent">
        <div className="qHeaderLogo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.mUOWMXKL45aGSE0Xb61-FwHaE8&pid=Api&P=0&h=180"
            alt="logo"
          />
        </div>
        <div className="qHeadericons">
          <NavLink to="/">
            <div className="homeIcons">
              <div className="iconP">
                <div className={`navItem`}>
                  <AiOutlineHome className="icon" />
                  <AiFillHome className="fillIcon" />
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/following">
            <div className="homeIcons">
              <div className="iconP">
                <div className={`navItem`}>
                  <MdOutlineAssignment className="icon" />
                  <MdAssignment className="fillIcon" />
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/answer">
            <div className="homeIcons">
              <div className="iconP">
                <div className={`navItem`}>
                  <LuPenSquare className="icon" />
                  <FaPenSquare className="fillIcon" />
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/spaces">
            <div className="homeIcons">
              <div className="iconP">
                <div className={`navItem`}>
                  <BsPeople className="icon" />
                  <BsPeopleFill className="fillIcon" />
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/notification">
            <div className="homeIcons">
              <div className="iconP">
                <div className={`navItem`}>
                  <IoMdNotificationsOutline className="icon" />
                  <IoMdNotifications className="fillIcon" />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="qHeaderInput">
          <BiSearch className="searchIcon" />
          <input
            type={searchValue}
            placeholder="Search Quora"
            className="serach"
            onChange={handleChange}
            // onBlur={clearSearch}
          />
          {searchValue ? (
            <SearchResult searchValue={searchValue} />
          ) : (
            <div></div>
          )}
        </div>
        <div className="bunch">
          <div className="tryQuora">
            <button className="tryBtn">Try Quora+</button>
          </div>
          <div className="iconP">
            <CgProfile className="icon" />
          </div>

          <div className="iconP">
            <CiGlobe className="icon" />
          </div>
          <div className="addQuestion">
            <button onClick={() => setIsModelOpen(true)} className="addBtn">
              Add question
            </button>
            <span className="moreP">
              <MdOutlineExpandMore className="moreIcon" />
            </span>
            <AddQuestionModal
              Close={Close}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              isModelOpen={isModelOpen}
              setIsModelOpen={setIsModelOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoraHeader;
