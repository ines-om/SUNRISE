import "./index.css";
import NavBar from "../../components/NavBar";
import planPage from "./assets/planPage.png";
import check from "./assets/rightOrWrong.png";
import example from "./assets/examplePhoto.png";
import buttons from "./assets/startButtons.png";
import sunIcon from "./assets/sunIcon.webp";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <NavBar />
      <div className="aboutContainer">
        <div className="subAbout1">
          <h1 className="aboutTitle">WHY SUNRISE?</h1>
          <div className="whySunrise">
            <p>
              Maintaining good health and staying in shape is a priority for
              many,{" "}
              <span className="font-change">
                but not everyone can afford a gym membership or personal trainer
              </span>
              . This became especially evident{" "}
              <a href="https://www.washingtonpost.com/road-to-recovery/2021/01/07/home-fitness-boom/">
                during the pandemic
              </a>
              , with the rise in home workouts.
            </p>
            <p>
              <span className="custom-font-about">SUNRISE</span> aims to make
              home workouts more effective with AI technology. It monitors and
              corrects your posture throughout your routine, ensuring you
              exercise correctly and safely.
            </p>
          </div>
        </div>
        <div className="subAbout2">
          <h1 className="aboutTitle">HOW IT WORKS</h1>
          <div className="aboutPlanPage">
            <img className="planPhoto" src={planPage} alt="Plan Page photo" />
            <p className="aboutText">
              First of all, you'll be asked to choose the exercise difficulty,
              duration, and type in the <Link to="./Plan">Plan Page.</Link>
            </p>
          </div>
          <div className="aboutStartPage">
            <h1 className="aboutDuring">DURING THE EXERCISE</h1>
            <div className="aboutComponent">
              <div className="aboutComponentImage">
                <img
                  className="checkPhoto"
                  src={check}
                  alt="Start Page Component"
                />
              </div>
              <div className="aboutComponentText">
                <p>
                  Once you start, underneath your webcam, you will have a timer
                  counting down the time you have for each exercise.
                </p>
                <p>
                  Under that timer will be a cross or a check, depending on
                  whether the AI can recognize the pose you should be doing or
                  not.
                </p>
              </div>
            </div>
            <div className="aboutComponent">
              <div className="aboutComponentImage">
                <img
                  className="poseReference"
                  src={example}
                  alt="Start Page Component"
                />
              </div>
              <div className="aboutComponentText">
                <p>
                  You will be given a pose reference which you should mimic to
                  the best of your ability.
                </p>
              </div>
            </div>
            <div className="aboutComponent">
              <div className="aboutComponentImage">
                <img
                  className="buttonsImage"
                  src={buttons}
                  alt="Start Page Component"
                />
              </div>
              <div className="aboutComponentText">
                <p>
                  You have buttons available to pause the timer, move to another
                  exercise or end the exercise early.
                </p>
              </div>
            </div>
          </div>
          <div className="finalAbout">
            <img className="sunIcon" src={sunIcon} alt="sun Icon" />
            <h1 className="aboutFinal">ABOVE ALL, REMEMBER TO HAVE FUN!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
