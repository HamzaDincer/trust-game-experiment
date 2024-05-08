import React from "react";
import "./BeginScreen.scss";

const BeginScreen = ({ onGameStart }) => {
  return (
    <div className="begin-screen">
      <h1>Deneme Bitti</h1>
      <p>
        Deneme turları sona erdi. Gerçek oyun başlayacak. Oyunu başlatmak için
        butona tıklayın.
      </p>
      <button onClick={onGameStart}>Oyunu Başlat</button>
    </div>
  );
};

export default BeginScreen;
