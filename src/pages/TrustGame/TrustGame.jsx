import React, { useState } from 'react';
import InstructionScreen from '../../components/InstructionScreen/InstructionScreen';
import GameScreen from '../../components/GameScreen/GameScreen';

const TrustGame = () => {

    const [isGameStarted, setIsGameStarted] = useState(false);

    const initialMoneyBalance = 25; // Define initialMoneyBalance
    const experimentRoundCount = 10; // Define experimentRoundCount
    const trialRoundCount = 10; // Define trialRoundCount

    const startGame = () => {
        setIsGameStarted(true);
    };

    return (
        <div>
            {!isGameStarted ? (
                <InstructionScreen onStartGame={startGame} />
            ) : (
                <GameScreen initialMoneyBalance experimentRoundCount trialRoundCount  />
            )}
        </div>
    );
};

export default TrustGame;