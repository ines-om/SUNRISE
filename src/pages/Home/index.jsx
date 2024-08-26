import React from "react";
import stockImage1 from "./assets/stock1.png";
import stockImage2 from "./assets/stock2.jpg";
import icon from "./assets/sunIcon.webp";
import video from "./assets/stockVideo.mp4";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar></NavBar>

      <div className="HPcontainer">
        <img src={stockImage1} className="StarterImage" alt="Stock Image" />
        <div className="HPtextbox">
          <p className="HPitem">
            <span className="custom-font">SUNRISE</span> is a free,{" "}
            <span className="font-change">accessible to all</span>, AI-aided
            platform that provides you with exercise routines and accompanies
            you as you progress.
          </p>
        </div>
      </div>

      <div className="HPsection">
        <div className="HPsubcontainer1">
          <video className="HPvideo" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="HPsubcontainer2">
          <p className="HPtitle"> THE BENEFITS OF SUNRISE </p>
          <p className="HPtext">
            Our available workouts combine muscle stimulating and relaxing
            exercises that{" "}
            <span className="font-change">
              {" "}
              improve your physical and mental well-being.{" "}
            </span>{" "}
          </p>
          <p className="HPtext">
            We provide <span className="font-change"> everyone </span> with the
            necessary tools to fulfill their daily exercise needs and, most
            importantly,{" "}
            <span className="font-change">
              {" "}
              the tools to do this efficiently and safely.{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="HPendtext-container">
        <p className="HPendtext">
          {" "}
          Everyone should have the opportunity to be accompanied in their active
          lifestyle and we're here to provide that to you for free!{" "}
        </p>
      </div>

      <div className="HPcontainer2">
        <div className="HPsubcontainer3">
          <p className="HPtitle"> OUR GOAL </p>
          <ul class="HPlist">
            <li class="list-item">
              Enhance <span className="font-change"> mobility</span>;
            </li>
            <li class="list-item">
              <span className="font-change">Relieve pain</span>;
            </li>
            <li class="list-item">
              Improve <span className="font-change"> mental health</span>;
            </li>
            <li class="list-item">
              <span className="font-change">Reduce stress</span>;
            </li>
            <li class="list--item">
              Boost<span className="font-change"> cardiovascular health</span>;
            </li>
            <li class="list-item">
              Improve{" "}
              <span className="font-change"> balance and coordenation</span>;
            </li>
            <li class="list-item">Among many other things!</li>
          </ul>
        </div>

        <div className="HPsubcontainer5">
          <img
            src={stockImage2}
            className="LastImage"
            alt="Person practicing yoga"
          />
        </div>
      </div>

      <div className="HPcontainer3">
        <div className="HPfinal-remark">
          <p>
            {" "}
            <span className="custom-font"> SUNRISE </span> can aid you in your{" "}
            <span className="font-change">prenatal</span> and{" "}
            <span className="font-change">postnatal</span> journeys, as well as{" "}
            <span className="font-change">chronic pain</span>,{" "}
            <span className="font-change">stress</span>,{" "}
            <span className="font-change">mobility issues</span>, and{" "}
            <span className="font-change">cardiovascular health</span>{" "}
            experiences.{" "}
          </p>
        </div>
      </div>

      <div className="HPcontainer4">
        <Link to="/Plan" className="StartNowButton">
          START NOW
        </Link>

        <img src={icon} className="sunIcon" alt="Sunrise Icon" />
      </div>
    </>
  );
}

export default Home;
