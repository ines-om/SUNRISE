import icon from "./assets/sunIcon2.webp";
import "./index.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";

function Plan() {
  //MENU VALUES
  const [selectedDuration, setSelectedDuration] = useState(
    "SELECT DURATION OF EXERCISE",
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    "SELECT DIFFICULTY LEVEL",
  );
  const [selectedFocusArea, setSelectedFocusArea] =
    useState("SELECT FOCUS AREA");

  return (
    <>
      <NavBar></NavBar>
      <div className="PlanContainer">
        <img src={icon} className="sunriseIcon" alt="Sun Icon" />
        <h1 className="planTitle">SELECT YOUR PLAN</h1>
        <div className="planButtons">
          <div className="durationContainer">
            <button className="duration">{selectedDuration}</button>
            <div className="dropdown-menu">
              <ul className="duration-menu">
                <li>
                  <a
                    className="dropdown-item duration-item"
                    href="#"
                    onClick={() => setSelectedDuration("~ 20 MINUTES")}
                  >
                    ~ 20 MINUTES
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="difficultyContainer">
            <button className="difficulty">{selectedDifficulty}</button>
            <div className="dropdown-menu">
              <ul className="difficulty-menu">
                <li>
                  <a
                    className="dropdown-item difficulty-item"
                    href="#"
                    onClick={() => setSelectedDifficulty("EASY")}
                  >
                    EASY
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item difficulty-item"
                    href="#"
                    onClick={() => setSelectedDifficulty("MEDIUM")}
                  >
                    MEDIUM
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="focusAreaContainer">
            <button className="focusArea">{selectedFocusArea}</button>
            <div className="dropdown-menu">
              <ul className="focusArea-menu">
                <li>
                  <a
                    className="dropdown-item focusArea-item"
                    href="#"
                    onClick={() => setSelectedFocusArea("GENERAL STRETCH")}
                  >
                    GENERAL STRETCH
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="howItWorks">
          <Link to="/About" className="how">
            Wait, how does this work?
          </Link>
        </div>
        <div className="StartButton">
          <Link to="/Start" className="StartNow">
            START!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Plan;
