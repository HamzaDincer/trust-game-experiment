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

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onGameStart]);

  return (
    <div className="begin-screen">
      <h1>Deneme Bitti</h1>
      <p>
        Deneme turları sona erdi. Gerçek oyun başlayacak. Başlamak için boşluk
        tuşuna basın.
      </p>
    </div>
  );
};

export default BeginScreen;
