import React, { useState, useEffect } from "react";
import "./WaitingScreen.scss";

const WaitingScreen = ({ offer, investmentReturnMultiplier, onContinue }) => {
  const [phase, setPhase] = useState(0);
  const [waitingDots, setWaitingDots] = useState("");
  const WAITING_SCREEN_TIME = 10;
  const phaseTimes = [1000, 3000, 5000, 7000]; // Times at which the phase updates

  useEffect(() => {
    const timers = phaseTimes.map((time, index) =>
      setTimeout(() => setPhase(index + 1), time),
    );

    const dotInterval = setInterval(() => {
      setWaitingDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 500); // Update dots every 500ms

    setTimeout(() => {
      clearInterval(dotInterval);
      onContinue(); // Proceed to the next screen after the waiting time
    }, WAITING_SCREEN_TIME * 1000);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearInterval(dotInterval); // Clear interval on unmount
    };
  });

  const investmentWorth = offer * investmentReturnMultiplier;

  return (
    <div className="waiting-screen">
      {phase > 0 && <p>Yatırım için {offer}TL koydunuz.</p>}
      {phase > 1 && (
        <p>
          Vekiliniz yatırımınızı {investmentReturnMultiplier} katına çıkardı.
        </p>
      )}
      {phase > 2 && <p>Artık yatırımınız {investmentWorth}TL değerinde.</p>}
      {phase > 3 && <p>Yatırımcının kararını bekliyoruz{waitingDots}</p>}
    </div>
  );
};

export default WaitingScreen;
