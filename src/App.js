import React, { useState } from 'react';
import ConsentForm from './pages/ConsentPage/ConsentPage';
// import PreSurvey from './PreSurvey';
// import TrustGame from './TrustGame';
// import PostSurvey from './PostSurvey';
// import ThankYouPage from './ThankYouPage';
import HomePage from './pages/HomePage/HomePage';

const Experiment = () => {
    const [stage, setStage] = useState('homepage'); // start from the homepage
    const [participantNumber, setParticipantNumber] = useState(null);

    const nextStage = (currentStage) => {
        const stageOrder = ['homepage', 'consent', 'preSurvey', 'game', 'postSurvey', 'thankYou'];
        const currentStageIndex = stageOrder.indexOf(currentStage);
        const nextStageName = stageOrder[currentStageIndex + 1];
        setStage(nextStageName);
    };

    return (
        <div>
            {stage === 'homepage' && <HomePage onNext={() => nextStage('homepage')} />}
            {stage === 'consent' && <ConsentForm onNext={() => nextStage('consent')} onAssignParticipantNumber={setParticipantNumber} />}
            {/* {stage === 'preSurvey' && <PreSurvey onNext={nextStage} />}
            {stage === 'game' && <TrustGame onNext={nextStage} />}
            {stage === 'postSurvey' && <PostSurvey onNext={nextStage} />}
            {stage === 'thankYou' && <ThankYouPage />}  */}
        </div>
    );
};

export default Experiment;
