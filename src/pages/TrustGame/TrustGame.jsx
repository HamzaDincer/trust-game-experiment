import React, { useState } from "react";
import BeginScreen from "../../components/BeginScreen/BeginScreen";
import TutorialScreen from "../../components/TutorialScreen/TutorialScreen";
import OfferScreen from "../../components/OfferScreen/OfferScreen";
import WaitingScreen from "../../components/WaitingScreen/WaitingScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";

const TrustGame = () => {
  const [stage, setStage] = useState("tutorial"); // tutorial, trial, begin, offer, waiting, result
  const [round, setRound] = useState(1);
  const [isTrial, setIsTrial] = useState(true);
  const [moneyBalance, setMoneyBalance] = useState(25);
  const trialRoundCount = 3; // Adjust for actual trial rounds
  const experimentRoundCount = 10;

  // Define functions to transition between stages and handle game logic here

  const handleTutorialComplete = () => {
    setStage("offer"); // Move to trial rounds after tutorial
  };

  const handleRoundComplete = (offer) => {
    // Logic to handle end of each round, update balance, etc.
    if (isTrial && round >= trialRoundCount) {
      setIsTrial(false);
      setStage("begin");
    } else if (!isTrial && round >= experimentRoundCount) {
      // Handle game end
    } else {
      setRound(round + 1);
      setStage("offer");
    }
  };

  const handleGameStart = () => {
    setIsTrial(false); // End trial mode
    setRound(1); // Reset round for actual game
    setStage("offer"); // Start actual game rounds
  };

  switch (stage) {
    case "tutorial":
      return <TutorialScreen onComplete={handleTutorialComplete} />;
    case "begin":
      return <BeginScreen onGameStart={handleGameStart} />;
    case "offer":
      return (
        <OfferScreen
          moneyBalance={moneyBalance}
          onOfferComplete={handleRoundComplete}
        />
      );
    // Include WaitingScreen and ResultScreen with appropriate props and handlers
    default:
      return <div>Game Over</div>;
  }
};

export default TrustGame;
