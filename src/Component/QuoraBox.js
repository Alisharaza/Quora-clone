import React, { useState } from "react";
import "../Component/Style/quorabox.css";
import { CgProfile } from "react-icons/cg";
import { BsPatchQuestion } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import AddQuestionModal from "./AddQuestionModal";
import PostModal from "./PostModal";
import { Link } from "react-router-dom";
const QuoraBox = () => {
  const [activeSection, setActiveSection] = useState("add");

  const [isModelOpen, setIsModelOpen] = useState(false);
  const Close = <MdClose />;
  const openAsk = () => {
    setActiveSection("add");
    setIsModelOpen(true);
  };
  const openPost = () => {
    setActiveSection("create");
    setIsModelOpen(true);
  };

  return (
    <div className="completBox">
      <div className="box">
        <CgProfile className="profile" />
        <input
          type="text"
          placeholder="What do you want to ask or share?"
          className="query"
        />
      </div>
      <div className="list">
        <li className="listItem" onClick={openAsk}>
          <span>
            <BsPatchQuestion className="ques" />
          </span>
          Ask
        </li>

        <Link to="/answer">
          <li className="listItem">
            <span>
              <HiOutlinePencilAlt className="ques" />
            </span>
            Answer
          </li>
        </Link>
        <li className="listItem" onClick={openPost}>
          <span>
            <BiPencil className="ques" />
          </span>
          Post
        </li>
      </div>
      <AddQuestionModal
        Close={Close}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
    </div>
  );
};

export default QuoraBox;
