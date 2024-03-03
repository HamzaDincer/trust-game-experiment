import React, { useState } from 'react';
import TutorialScreen from '../../components/TutorialScreen/TutorialScreen';

const TrustGame = () => {
    
    const [isGameStarted, setIsGameStarted] = useState(false);

    const startGame = () => {
        setIsGameStarted(true);
    };

    return (
        <div>
            {!isGameStarted ? (
                <TutorialScreen onStartGame={startGame} />
            ) : (
                // The component or logic for the actual game goes here
                <p>Game content will be displayed here.</p>
            )}
        </div>
    );
};

export default TrustGame;