import React, { useState, useEffect } from "react";
import "./WaitingScreen.scss";

const WaitingScreen = ({ offer, investmentReturnMultiplier, onContinue }) => {
  const [waitingDots, setWaitingDots] = useState("");
  const WAITING_SCREEN_TIME = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      onContinue(); // Proceed to the next screen after the waiting time
    }, WAITING_SCREEN_TIME * 1000);

    return () => clearInterval(interval);
  }, [onContinue]);

  const investmentWorth = offer * investmentReturnMultiplier;

  return (
    <div className="waiting-screen">
      <p>Yatırım için {offer}TL koydunuz.</p>
      <p>Vekiliniz yatırımınızı {investmentReturnMultiplier} katına çıkardı.</p>
      <p>Artık yatırımınız {investmentWorth}TL değerinde.</p>
      <p>Yatırımcının kararını bekliyoruz{waitingDots}</p>
    </div>
  );
};

export default WaitingScreen;
