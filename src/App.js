import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ConsentForm from "./pages/ConsentPage/ConsentPage";
import PreSurvey from "./pages/PreSurvey/PreSurvey";
import TrustGame from "./pages/TrustGame/TrustGame";
import ThankYouPage from "./pages/ThankYou/ThankYou";
import HomePage from "./pages/HomePage/HomePage";

const Experiment = () => {
  const [participantNumber, setParticipantNumber] = useState(1);

  const assignParticipantNumber = (number) => {
    setParticipantNumber(number);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/consent"
          element={
            <ConsentForm onAssignParticipantNumber={assignParticipantNumber} />
          }
        />
        <Route
          path="/presurvey"
          element={
            participantNumber ? (
              <PreSurvey participantNumber={participantNumber} />
            ) : (
              <Navigate replace to="/consent" />
            )
          }
        />
        <Route
          path="/trustgame"
          element={
            participantNumber ? (
              <TrustGame participantNumber={participantNumber} />
            ) : (
              <Navigate replace to="/consent" />
            )
          }
        />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Experiment;
