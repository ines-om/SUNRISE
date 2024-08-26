// EndPopUp.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import sunIcon from "./assets/sunIcon.webp";

function EndPopUp() {
  const popUpRef = useRef(null);

  return (
    <div className="PopUpContainer" ref={popUpRef}>
      <img src={sunIcon} className="popUpSun" alt="Sun Icon" />
      <div className="PopUpText">
        <h1 className="finPopUpTitle">CONGRATULATIONS!</h1>
        <p className="finPopUpDesc"> You've finished your exercise! </p>
      </div>
      <Link to="/Home" className="finPopUpButton">
        RETURN HOME
      </Link>
    </div>
  );
}

export default EndPopUp;
