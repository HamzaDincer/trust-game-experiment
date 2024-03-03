import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConsentForm from './pages/ConsentPage/ConsentPage';
import PreSurvey from './pages/PreSurvey/PreSurvey';
// import TrustGame from './TrustGame';
// import PostSurvey from './PostSurvey';
// import ThankYouPage from './ThankYouPage';
import HomePage from './pages/HomePage/HomePage';

const Experiment = () => {
    
    const [participantNumber, setParticipantNumber] = useState(null);

    // This function is now used to assign the participant number from the consent form
    const assignParticipantNumber = (number) => {
        setParticipantNumber(number);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/consent" element={<ConsentForm onAssignParticipantNumber={assignParticipantNumber} />} />
                <Route path="/preSurvey" element={participantNumber ? <PreSurvey participantNumber={participantNumber} /> : <Navigate replace to="/consent" />} />
                {/* <Route path="/game" element={participantNumber ? <TrustGame /> : <Navigate replace to="/consent" />} />
                <Route path="/postSurvey" element={participantNumber ? <PostSurvey /> : <Navigate replace to="/consent" />} />
                <Route path="/thankYou" element={<ThankYouPage />} /> */}
               
            </Routes>
        </BrowserRouter>
    );
};

export default Experiment;