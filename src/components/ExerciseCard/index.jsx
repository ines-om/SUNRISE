/*

Originally supposed to be a component, 
but it wasn't compatible with the logic I wanted to include.

Kept it here for reference.

*/

import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import bridge from "./assets/bridgePose.jpeg";

function ExerciseCard() {
  const webcamRef = useRef(null);
  const [currentExercise, setCurrentExercise] = useState({
    id: 0,
    name: "Breathe in and out, let's start!",
    duration: "1 minute",
    description: "Breathe in and out calmly, we're about to start!",
  });

  const exercises = [
    {
      id: 1,
      name: "BRIDGE",
      duration: "~ 2 minutes",
      instructions: "IDK man do sumn",
      image: bridge,
    },
    { id: 2, name: "LOW LUNGE", duration: "~ 2 minutes", instructions: "..." },
    {
      id: 3,
      name: "Seated Forward Bend",
      duration: "2 minutes",
      instructions: "...",
    },
    {
      id: 4,
      name: "Warrior",
      duration: "2 minutes",
      instructions: "...",
    },
    {
      id: 5,
      name: "Sukhasana",
      duration: "2 minutes",
      instructions: "...",
      image: "./assets/bridgepose.webp",
    },
    {
      id: 6,
      name: "Tree Pose",
      duration: "2 minutes",
      instructions: "...",
      image: "./assets/bridgepose.webp",
    },
    {
      id: 7,
      name: "Downward-Facing Dog",
      duration: "2 minutes",
      instructions: "...",
      image: "./assets/bridgepose.webp",
    },
    {
      id: 8,
      name: "Bound Angle Pose (Baddha Konasana)",
      duration: "2 minutes",
      instructions: "...",
      image: "./assets/bridgepose.webp",
    },
    {
      id: 9,
      name: "One-legged Forward Bend",
      duration: "2 minutes",
      instructions: "...",
      image: "./assets/bridgepose.webp",
    },
  ];

  useEffect(() => {
    const loadWebcam = () => {
      if (window.Webcam && webcamRef.current) {
        window.Webcam.set({
          width: 350,
          height: 287,
          image_format: "jpeg",
          jpeg_quality: 90,
        });

        window.Webcam.attach(webcamRef.current);
      }
    };

    const interval = setInterval(() => {
      if (window.Webcam && webcamRef.current) {
        loadWebcam();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  function handleNextExercise() {
    const currentIndex = exercises.findIndex(
      (ex) => ex.id === currentExercise.id,
    );

    const nextIndex = (currentIndex + 1) % exercises.length;
    const nextExercise = exercises[nextIndex];
    setCurrentExercise(nextExercise);
  }

  function takeSnap() {
    setTimeout(() => {
      window.Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML =
          '<img class="after_capture_frame" src="' + data_uri + '"/>';
        $("#captured_image_data").val(data_uri);
      });
    }, 30000); // 30 seconds delay
  }

  function handleNextExerciseWithSnapshot() {
    takeSnap();
    handleNextExercise();
  }

  return (
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
          <button className="PauseEx">PAUSE</button>
          <button onClick={handleNextExerciseWithSnapshot} className="NextEx">
            NEXT EXERCISE
          </button>
          <button className="EndEx">END EARLY</button>
        </div>
      </div>
      <div id="results" className="captured">
        <img
          style={{ width: "350px" }}
          className="after_capture_frame"
          src=" "
          alt="Captured"
        />
      </div>
    </div>
  );
}

export default ExerciseCard;
