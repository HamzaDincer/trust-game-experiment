import React, { useEffect } from "react";
import "./BeginScreen.scss";

const BeginScreen = ({ onGameStart }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        onGameStart();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onGameStart]);

  return (
    <div className="begin-screen">
      <h1>Tutorial Complete</h1>
      <p>
        The tutorial has ended. The real game will start soon. Press the space
        bar to begin.
      </p>
    </div>
  );
};

export default BeginScreen;
