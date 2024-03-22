import React, { useState } from "react";
import BeginScreen from "../../components/BeginScreen/BeginScreen";
import TutorialScreen from "../../components/TutorialScreen/TutorialScreen";
import OfferScreen from "../../components/OfferScreen/OfferScreen";
import WaitingScreen from "../../components/WaitingScreen/WaitingScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";

const TrustGame = () => {
  const [stage, setStage] = useState("tutorial");
  const [round, setRound] = useState(1);
  const [isTrial, setIsTrial] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [moneyBalance, setMoneyBalance] = useState(25);
  const trialRoundCount = 3; // Adjust for actual trial rounds
  const experimentRoundCount = 10;
  const investmentReturnMultiplier = 2; // Multiplier for investment return
  const investorResponse = 80; // Fixed investor response

  // Function to handle start of practice rounds
  const handleStartPractice = () => {
    setStage("offer"); // Move to trial rounds after tutorial
  };

  // Function to handle end of each round
  const handleRoundComplete = (offer) => {
    if (isTrial && round < trialRoundCount) {
      // Update money balance for next round
      setCurrentOffer(offer);
      setMoneyBalance(moneyBalance - offer);
      setRound(round + 1);
      setStage("offer");
    } else if (isTrial && round >= trialRoundCount) {
      setIsTrial(false);
      setStage("begin");
    } else if (!isTrial && round >= experimentRoundCount) {
      // Handle game end
    } else {
      setRound(round + 1);
      setStage("offer");
    }
  };

  // Function to handle start of actual game
  const handleGameStart = () => {
    setIsTrial(false); // End trial mode
    setRound(1); // Reset round for actual game
    setStage("offer"); // Start actual game rounds
  };

  // Function to handle offer submission
  const handleOfferSubmit = (offer) => {
    setCurrentOffer(offer);
    setStage("waiting");
  };

  // Function to proceed from waiting screen
  const onWaitComplete = () => {
    setStage("result");
  };

  // Render different screens based on game stage
  switch (stage) {
    case "tutorial":
      return <TutorialScreen onTrialStart={handleStartPractice} />;
    case "begin":
      return <BeginScreen onGameStart={handleGameStart} />;
    case "offer":
      return (
        <OfferScreen
          isTrial={isTrial}
          moneyBalance={moneyBalance}
          onOfferComplete={handleOfferSubmit}
        />
      );
    case "waiting":
      return (
        <WaitingScreen
          offer={currentOffer}
          investmentReturnMultiplier={investmentReturnMultiplier}
          onContinue={onWaitComplete}
        />
      );
    case "result":
      return (
        <ResultScreen
          investorResponse={investorResponse}
          offer={currentOffer}
          investmentReturnMultiplier={investmentReturnMultiplier}
          moneyBalance={moneyBalance}
          onNextRound={() => handleRoundComplete(currentOffer)}
        />
      );
    default:
      return <div>Game Over</div>;
  }
};

export default TrustGame;
