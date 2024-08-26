import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tmPose from "@teachablemachine/pose";

// Components
import NavBar from "../../components/NavBar";
import EndEx from "../../components/EndPopUp";
import PopUp from "../../components/MobilePopUp";
import WrongPopUp from "../../components/WrongPopUp";
import FinPopUp from "../../components/FinishedExPopUp";

// Poses
import happy from "./assets/happy.png";
import bridge from "./assets/bridgepose.jpg";
import lowLunge from "./assets/lowLunge.jpg";
import seatedForwardBend from "./assets/SeatedForwardBend.jpg";
import sukhasanaPose from "./assets/SukhasanaPose.jpg";
import treePose from "./assets/TreePose.jpg";
import warrior from "./assets/WarriorII.jpeg";
import downwardFacingDog from "./assets/DownwardFacingDog.jpg";
import boundAnglePose from "./assets/BoundAnglePose.jpeg";

// Right or Wrong Symbols
import right from "./assets/correct.png";
import wrong from "./assets/wrong.png";

import "./index.css";

// TEACHABLE MACHINE URL
const URL = "https://teachablemachine.withgoogle.com/models/IGTFcZf1r/";

function Machine() {
  // Webcam and Teachable Machine
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [maxPrediction, setMaxPrediction] = useState(null);

  //Pop Ups
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [isWrongPopUpVisible, setWrongPopUpVisible] = useState(false);
  const [isFinPopUpVisible, setFinPopUpVisible] = useState(false);

  //Timer
  const [timer, setTimer] = useState(120);
  const [isPaused, setIsPaused] = useState(false);
  const [exerciseCount, setExerciseCount] = useState(0); //prevents looping

  // List of Exercises for General Stretch
  const [currentExercise, setCurrentExercise] = useState({
    id: 0,
    name: "Breathe in and out, let's start!",
    duration: "2 minutes max.",
    instructions: "Breathe in and out calmly, we're about to start!",
    image: happy,
  });

  const exercises = [
    {
      id: 1,
      name: "BRIDGE",
      duration: "~ 2 minutes",
      instructions: "Tip: Be sure your feet are firmly on the ground.",
      image: bridge,
    },
    {
      id: 2,
      name: "LOW LUNGE",
      duration: "~ 2 minutes",
      instructions: "No need to go very low, just do your best!",
      image: lowLunge,
    },
    {
      id: 3,
      name: "Seated Forward Bend",
      duration: "2 minutes",
      instructions:
        "Tip: Do this pose with your side facing the camera for better recognition.",
      image: seatedForwardBend,
    },
    {
      id: 4,
      name: "Warrior II",
      duration: "2 minutes",
      instructions: "Be sure to spread your arms!",
      image: warrior,
    },
    {
      id: 5,
      name: "Sukhasana",
      duration: "2 minutes",
      instructions: "Take this as an opportunity to rest!",
      image: sukhasanaPose,
    },
    {
      id: 6,
      name: "Tree Pose",
      duration: "2 minutes",
      instructions: "Watch your balance closely!",
      image: treePose,
    },
    {
      id: 7,
      name: "Downward-Facing Dog",
      duration: "2 minutes",
      instructions: "Tip: Your hands and feet should be firmly on the ground.",
      image: downwardFacingDog,
    },
    {
      id: 8,
      name: "Bound Angle Pose (Baddha Konasana)",
      duration: "2 minutes",
      instructions: "Don't forget to stretch your legs as much as you can!",
      image: boundAnglePose,
    },
  ];

  /*-------------------*
  |                    |
  |       TIMER        |
  |                    |
  *-------------------*/

  // When timer ends, move to next exercise
  useEffect(() => {
    if (timer === 0) {
      handleNextExercise();
    }

    // Timer logic (moves each second)
    if (!isPaused) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, isPaused]);

  /*-------------------*
  |                    |
  | TEACHABLE MACHINE  |
  |                    |
  *-------------------*/

  // Initialization of Teachable Machine
  useEffect(() => {
    const initTeachableMachine = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const model = await tmPose.load(modelURL, metadataURL);
      const maxPredictions = model.getTotalClasses();

      const webcam = new tmPose.Webcam(
        window.innerWidth,
        window.innerHeight,
        true,
      );
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(() => loop(webcam, model, maxPredictions));

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    initTeachableMachine();

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loop = async (webcam, model, maxPredictions) => {
    webcam.update();
    await predict(webcam, model, maxPredictions);
    window.requestAnimationFrame(() => loop(webcam, model, maxPredictions));
  };

  // Teachale Machine Prediction Logic
  const predict = async (webcam, model, maxPredictions) => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    const maxPred = prediction.reduce((prev, current) =>
      prev.probability > current.probability ? prev : current,
    );
    setMaxPrediction(maxPred);

    drawPose(pose, webcam.canvas);
  };

  const drawPose = (pose, canvas) => {
    const ctx = canvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);

    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  };

  /*--------------------------------*
  |                                 |
  |   BUTTON AND POPUP FUNCTIONS    |
  |                                 |
  *--------------------------------*/

  // Next Exercise function
  const handleNextExercise = () => {
    // FINDS CURRENT EXERCISE INDEX
    const currentIndex = exercises.findIndex(
      (ex) => ex.id === currentExercise.id,
    );

    // Increases current index by 1
    const nextIndex = (currentIndex + 1) % exercises.length;

    // Defines next exercise
    const nextExercise = exercises[nextIndex];
    setCurrentExercise(nextExercise);

    // Resets Timer and updates count of completed exercises
    setExerciseCount((prevCount) => prevCount + 1);
    setTimer(120);

    // Prevents looping
    if (exerciseCount + 1 === 9) {
      setFinPopUpVisible(true);
    }
  };

  //Checks if pose is correct
  const checkPose = () => {
    //Finding correct exercise name seeing as function is triggered with previous exercise name
    const currentIndex = exercises.findIndex(
      (ex) => ex.id === currentExercise.id,
    );
    const nextIndex = (currentIndex + 1) % exercises.length;

    //Correct exercise name to check
    const nextExercise = exercises[nextIndex];

    // Issues a warning if pose is incorrect (30s after beginning)
    setTimeout(() => {
      //Compares current exercise to AI prediction
      if (maxPrediction && maxPrediction.className === nextExercise.name) {
        console.log("Pose is correct:", maxPrediction.className);
        setWrongPopUpVisible(false);
      } else {
        console.log("Pose is incorrect. Expected:", nextExercise.name);
        setWrongPopUpVisible(true);
      }
    }, 30000);
  };

  // Next Exercise Button function
  const handleNextWithCheck = () => {
    handleNextExercise();
    checkPose();
  };

  //Pause Button
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  //Restarting Exercise due to Mistake - WrongPopUp Feature
  const handleRetry = () => {
    setTimer(120);
    setWrongPopUpVisible(false);
  };

  //Mobile Screen Pop Up Visibility
  const toggleComponentVisibility = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <>
      <NavBar />
      <div id="StartContainer">
        <div className="subStart1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" align="center">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="col-lg-7" align="center">
                <canvas id="canvas" ref={canvasRef} width="350" height="350" />
              </div>
              <div className="exProperties">
                <div className="Timer">
                  <p>
                    {Math.floor(timer / 60)}:
                    {String(timer % 60).padStart(2, "0")}
                  </p>
                </div>
                <div className="poseFeedback">
                  {maxPrediction &&
                  maxPrediction.className === currentExercise.name ? (
                    <img src={right} alt="Correct Pose" className="poseIcon" />
                  ) : (
                    <img
                      src={wrong}
                      alt="Incorrect Pose"
                      className="poseIcon"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subStart2">
          <div className="Card">
            <div className="subCard1">
              <img
                src={currentExercise.image}
                className="ExerciseImage"
                alt={currentExercise.name}
              />
            </div>
            <div className="subCard2">
              <div className="ExBasicInfo">
                <h2 className="ExName">{currentExercise.name}</h2>
                <p className="ExDuration">{currentExercise.duration}</p>
              </div>
              <div className="ExDesc">
                <p className="ExDescription">{currentExercise.instructions}</p>
              </div>
              <div className="ExButtons">
                <button onClick={handlePause} className="PauseEx">
                  {isPaused ? "RESUME" : "PAUSE"}
                </button>
                <button onClick={handleNextWithCheck} className="NextEx">
                  NEXT EXERCISE
                </button>
                <button className="EndEx" onClick={toggleComponentVisibility}>
                  END EARLY
                </button>
                {isComponentVisible && <EndEx />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isWrongPopUpVisible && (
        <WrongPopUp
          onRetry={handleRetry}
          onClose={() => setWrongPopUpVisible(false)}
        />
      )}
      {isFinPopUpVisible && <FinPopUp />}
      <PopUp />
    </>
  );
}

export default Machine;
