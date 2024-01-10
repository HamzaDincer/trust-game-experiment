import React, { useState } from 'react';
// import ConsentForm from './ConsentForm';
// import PreSurvey from './PreSurvey';
// import TrustGame from './TrustGame';
// import PostSurvey from './PostSurvey';
// import ThankYouPage from './ThankYouPage';
import HomePage from './pages/HomePage';

const Experiment = () => {
  const [stage, setStage] = useState('consent'); // stages: consent, preSurvey, game, postSurvey, thankYou

  const nextStage = () => {
    // Logic to move to the next stage
  };

  return (
    <div>
      {stage === 'homepage' && <HomePage onNext={nextStage} />}
      {/* {stage === 'consent' && <ConsentForm onNext={nextStage} />}
      {stage === 'preSurvey' && <PreSurvey onNext={nextStage} />}
      {stage === 'game' && <TrustGame onNext={nextStage} />}
      {stage === 'postSurvey' && <PostSurvey onNext={nextStage} />}
      {stage === 'thankYou' && <ThankYouPage />} */}
    </div>
  );
};

export default Experiment;