import React from 'react';

const ConsentPage = ({ onNext, onAssignParticipantNumber }) => {
    const handleConsent = () => {
        // Generate a random participant number
        const randomNumber = Math.floor(Math.random() * 10000);
        
        // Assign the participant number
        onAssignParticipantNumber(randomNumber);

        // Move to the next stage, which can be defined in your Experiment component
        onNext('nextStageName'); // Replace 'nextStageName' with the actual name of the next stage
    };

    console.log(part)

    return (
        <div>
            <h1>Consent Form</h1>
            <p>
                Please read the following consent information carefully before proceeding to the study: 
                [Include detailed information about the study, what participants should expect, data usage, privacy policy, etc.]
            </p>
            <button onClick={handleConsent}>I Consent</button>
        </div>
    );
};

export default ConsentPage;
