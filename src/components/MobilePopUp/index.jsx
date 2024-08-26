import React, { useState, useEffect, useRef } from "react";
import "./index.css";

import sunIcon from "./assets/sunIcon.webp";
import rotateIcon from "./assets/rotate.png";

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef(null);

  // Close Pop Up Function - Alters CSS
  function PopUpClose() {
    if (popUpRef.current) {
      popUpRef.current.style.display = "none";
    }
    setIsOpen(false);
  }

  // Only opens in small screens
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (popUpRef.current) {
      popUpRef.current.style.display = isOpen ? "block" : "none";
    }
  }, [isOpen]);

  return (
    <div className="PopUpContainer" ref={popUpRef}>
      <img src={sunIcon} className="popUpSun" />
      <div className="PopUpText">
        <h1 className="PopUpTitle">ARE YOU ON A MOBILE DEVICE?</h1>
        <p className="PopUpDesc">
          For a better experience,{" "}
          <span className="font-change">
            {" "}
            rotate your device to landscape mode.{" "}
          </span>
        </p>
        <img src={rotateIcon} className="rotateIcon" />
      </div>
      <button className="PopUpButton" onClick={PopUpClose}>
        UNDERSTOOD!
      </button>
    </div>
  );
}

export default PopUp;
