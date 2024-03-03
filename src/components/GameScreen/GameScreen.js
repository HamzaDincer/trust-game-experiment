import React, { useState, useEffect } from 'react';

const GameScreen = (initialMoneyBalance, trialRoundCount, experimentRoundCount ) => {
    const [round, setRound] = useState(1);
    const [isTrial, setIsTrial] = useState(true);
    const [offer, setOffer] = useState(0);
    const [stage, setStage] = useState('begin'); // 'begin', 'offer', 'waiting', 'result'
    const [moneyBalance, setMoneyBalance] = useState(initialMoneyBalance); // Define initialMoneyBalance

    // Simulate rounds logic
    useEffect(() => {
        if (round > trialRoundCount && isTrial) { // Define trialRoundCount
            setIsTrial(false);
            setRound(1); // Reset round for actual game
        } else if (round > experimentRoundCount && !isTrial) { // Define experimentRoundCount
            // End game logic or transition
        }
    }, [round, isTrial]);

    // Handle key presses for investment decisions
    const handleKeyPress = (event) => {
        if (event.key === 'ArrowRight') {
            // Increase offer logic
        } else if (event.key === 'ArrowLeft') {
            // Decrease offer logic
        }
    };

    // Advance to next stage or round
    const nextStage = () => {
        // Logic to move to the next stage or round
    };

    return (
        <div onKeyDown={handleKeyPress} tabIndex="0"> {/* Ensure div is focusable */}
            {stage === 'begin' && <p>{isTrial ? 'Trial Rounds Start Now!' : 'Trial Ended!!! Game Rounds Will Start Now!'}</p>}
            {stage === 'offer' && (
                <>
                    <p>Decide How Much You Will Invest Now!</p>
                    <p>Your Offer: {offer}$</p>
                </>
            )}
            {stage === 'waiting' && <p>Waiting for the decision of investor...</p>}
            {stage === 'result' && <p>Investor has returned... {/* Show results */}</p>}
            <button onClick={nextStage}>Next</button>
        </div>
    );
};

export default GameScreen;