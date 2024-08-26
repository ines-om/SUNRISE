// EndPopUp.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import sunIcon from "./assets/sunIcon.webp";

function EndPopUp({ onClose }) {
  // POP UP FUNCTIONS
  const popUpRef = useRef(null);

  function handleClose() {
    if (popUpRef.current) {
      popUpRef.current.style.display = "none";
    }
    if (onClose) onClose();
  }

  return (
    <div className="PopUpContainer" ref={popUpRef}>
      <img src={sunIcon} className="popUpSun" alt="Sun Icon" />
      <div className="PopUpText">
        <h1 className="endPopUpTitle">ARE YOU SURE YOU WANT TO END EARLY?</h1>
      </div>
      <div className="EndButtons">
        <Link to="/Home" className="endPopUpButton">
          YES
        </Link>
        <button className="endPopUpButton2" onClick={handleClose}>
          NO
        </button>
      </div>
    </div>
  );
}

export default EndPopUp;
