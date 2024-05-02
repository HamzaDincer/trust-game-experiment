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
  const [moneyBalance, setMoneyBalance] = useState(20);
  const [startTime, setStartTime] = useState(null);
  const [decisionTime, setDecisionTime] = useState(0);
  const trialRoundCount = 1;
  const experimentRoundCount = 10;
  const investmentReturnMultiplier = 2;
  const investorResponse = [54, 57, 62, 68, 71, 75, 77, 82, 86, 93];

  const navigate = useNavigate();

  const handleRoundComplete = (moneyBalance, investmentReturn) => {
    if (isTrial && round < trialRoundCount) {
      setMoneyBalance(moneyBalance);
      setRound(round + 1);
      setStage("offer");
    } else if (isTrial && round >= trialRoundCount) {
      setIsTrial(false);
      setRound(1);
      setMoneyBalance(20);
      setStage("begin");
    } else {
      setMoneyBalance(moneyBalance);
      setRound(round + 1);
      setStartTime(Date.now());
      setStage("offer");
      //
      const roundData = {
        participant_no: participantNumber,
        round_number: round,
        initial_amount: moneyBalance - investmentReturn + currentOffer,
        sent_amount: currentOffer,
        decision_time: decisionTime,
        return_amount: investmentReturn,
      };

      fetch("/api/round", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roundData),
      })
        .then((response) => {
          // Handle successful data storage
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
          // Handle data sending error
        });
      if (round >= experimentRoundCount) {
        navigate("/ThankYou");
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
      localStorage.removeItem("isLeaving");
    }
  }, [navigate]);

  // Render different screens based on game stage
  switch (stage) {
    case "tutorial":
      return <TutorialScreen setStage={setStage} />;
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
