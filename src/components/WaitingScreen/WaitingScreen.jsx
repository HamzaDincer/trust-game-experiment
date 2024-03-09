import React, { useState, useEffect } from "react";

const WaitingScreen = ({
  offer,
  investmentReturnMultiplier,
  onWaitComplete,
}) => {
  const [waitingDots, setWaitingDots] = useState("");
  const WAITING_SCREEN_TIME = 5; // seconds for the waiting screen, adjust as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      onWaitComplete(); // Proceed to the next screen after the waiting time
    }, WAITING_SCREEN_TIME * 1000);

    return () => clearInterval(interval);
  }, [onWaitComplete]);

  const investmentWorth = offer * investmentReturnMultiplier;

  return (
    <div className="waiting-screen">
      <p>You put ${offer} into this investment.</p>
      <p>
        The investor multiplies your investment by {investmentReturnMultiplier}
        x.
      </p>
      <p>Now, your investment is worth ${investmentWorth}.</p>
      <p>Waiting for the decision of the investor{waitingDots}</p>
    </div>
  );
};

export default WaitingScreen;
