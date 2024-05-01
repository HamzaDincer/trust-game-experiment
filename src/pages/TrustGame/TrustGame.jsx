import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BeginScreen from "../../components/BeginScreen/BeginScreen";
import TutorialScreen from "../../components/TutorialScreen/TutorialScreen";
import OfferScreen from "../../components/OfferScreen/OfferScreen";
import WaitingScreen from "../../components/WaitingScreen/WaitingScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";
import ThankYou from "../ThankYou/ThankYou";

const TrustGame = ({ participantNumber }) => {
  const [stage, setStage] = useState("tutorial");
  const [round, setRound] = useState(1);
  const [isTrial, setIsTrial] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [moneyBalance, setMoneyBalance] = useState(25);
  const [startTime, setStartTime] = useState(null);
  const [decisionTime, setDecisionTime] = useState(0);
  const trialRoundCount = 1;
  const experimentRoundCount = 10;
  const investmentReturnMultiplier = 2;
  const investorResponse = [54, 57, 62, 68, 71, 77, 82, 86, 93];

  const navigate = useNavigate();

  // Function to handle start of practice rounds
  const handleStartPractice = () => {
    setStage("offer"); // Move to trial rounds after tutorial
  };

  const handleRoundComplete = (moneyBalance) => {
    if (isTrial && round < trialRoundCount) {
      // Update money balance for next round
      setMoneyBalance(moneyBalance);
      setRound(round + 1);
      setStage("offer");
    } else if (isTrial && round >= trialRoundCount) {
      setIsTrial(false);
      setRound(1);
      setMoneyBalance(25);
      setStage("begin");
    } else if (!isTrial && round > experimentRoundCount) {
      navigate("/ThankYou");
    } else {
      setRound(round + 1);
      setStartTime(Date.now());
      setStage("offer");
      // **Move data storage logic inside the if block**
      if (!isTrial) {
        const investmentReturn =
          currentOffer *
          investmentReturnMultiplier *
          (investorResponse[round - 1] / 100);
        const roundData = {
          participant_no: participantNumber,
          round_number: round,
          initial_amount: moneyBalance.toFixed(0),
          sent_amount: currentOffer,
          decision_time: decisionTime,
          return_amount: investmentReturn.toFixed(0),
        };

        fetch("/api/round", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roundData),
        })
          .then((response) => {
            // Handle successful data storage (optional)
          })
          .catch((error) => {
            console.error("Error sending data to backend:", error);
            // Handle data sending error (optional)
          });
      }
    }
  };

  // Function to handle start of actual game
  const handleGameStart = () => {
    setIsTrial(false); // End trial mode
    setRound(1); // Reset round for actual game
    setStartTime(Date.now());
    setStage("offer"); // Start actual game rounds
  };

  // Function to handle offer submission
  const handleOfferSubmit = (offer) => {
    setCurrentOffer(offer);
    const endTime = Date.now();
    setDecisionTime(endTime - startTime);
    setStage("waiting");
  };

  // Function to proceed from waiting screen
  const onWaitComplete = () => {
    setStage("result");
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Prompt the user with a warning message
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave the game?";

      // Set a flag in local storage indicating the game is ending
      localStorage.setItem("isLeaving", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLeaving") === "true") {
      navigate("/thankyou");
      localStorage.removeItem("isLeaving"); // Clear the flag after handling it
    }
  }, [navigate]);

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
          investorResponse={investorResponse[round - 1]}
          offer={currentOffer}
          investmentReturnMultiplier={investmentReturnMultiplier}
          moneyBalance={moneyBalance}
          onNextRound={handleRoundComplete}
        />
      );
    default:
      return <ThankYou />;
  }
};

export default TrustGame;
