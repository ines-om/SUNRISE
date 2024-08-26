import React, { useRef } from "react";
import "./index.css";

import sunIcon from "./assets/sunIcon.webp";

function WrongPopUp({ onRetry, onClose }) {
  const popUpRef = useRef(null);

  //Close Pop Up functin - Alters CSS
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
        <h1 className="wrongPopUpTitle">UH OH...</h1>
        <p className="PopUpDesc">
          {" "}
          Your pose wasn't recognized.{" "}
          <span className="font-change"> Do you want to try again? </span>
        </p>
      </div>
      <div className="EndButtons">
        <button className="endPopUpButton" onClick={onRetry}>
          YES
        </button>
        <button className="endPopUpButton" onClick={handleClose}>
          NO
        </button>
      </div>
    </div>
  );
}

export default WrongPopUp;
