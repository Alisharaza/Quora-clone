import React from "react";
import "../Component/Style/sidebaroption.css";
import { RiAddCircleLine } from "react-icons/ri";
const Sidebaroptions = () => {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOptional">
        <button className="createBtn">
          <RiAddCircleLine className="creatBtn1" />
          <span>Create Space</span>
        </button>
      </div>
      <div className="sidebarMainContainer">
        <div className="sidebarOption">
          <img
            src="	https://tse2.mm.bing.net/th?id=OIP.AP59mQB76p-tieyaEA0wGgHaE7&pid=Api&P=0&h=180"
            alt="book"
            className="sidebarImage"
          />
          <p>Books</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://homeodoctor.co.in/wp-content/uploads/2019/10/Dermatologist.jpg"
            alt="derma"
          />
          <p>Dermatology</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DyB3isvKqBiwDZWhPl3XyAHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <p>Skin care</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.XO9xV-ix6p_tmBgsHTF0nwHaFj&pid=Api&P=0&h=180"
            alt=""
          />
          <p>Music</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://img.gurugamer.com/resize/1200x-/2020/09/28/maxresdefault-c993.jpg"
            alt=""
          />
          <p>Movies</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.2zrB9wnFgbzw445YR6HkFwHaEc&pid=Api&P=0&h=180"
            alt=""
          />
          <p>Science</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebaroptions;
