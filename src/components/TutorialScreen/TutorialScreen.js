import React from 'react';

const TutorialScreen = ({ onStartGame }) => {

    return (
        <div className="tutorial-screen">
            <h2>Instructions</h2>
            <p>Thank you all for taking the time to come today. This game may take 30 minutes. If you have heard about </p>
            <p>a game that has been played here in the past you should try to forget everything that you have been told</p>
            <p>This is a completely different game. We are about to begin the game. This game is played by pairs of indi- </p>
            <p> viduals. Each pair is made up of a Trustee and a Investor. Each of you will play this game with someone. </p>
            <p> In the game, you will play around 10 round with each other. At beginning of each round, the trustte will </p>
            <p> receive 25TL and will decide how much to invest by clicking on right and left arrow keys. After investing,</p>
            <p> money invested will be doubled by investor and investor will decide how much to return to the trustee. </p>
            <p> We will be playing a game for real money that you will take home. You will receive the money based on one </p>
            <p> of the rounds played. So play every round as it may be the round you will recieve money from. Before start- </p>
            <p> ing the game, you will be first randomly assinged to a role and play trial rounds with each other in order </p>
            <p> for you to understand the game. Then game rounds will start.</p>
            <p> Any Question? Press any key to start the game...</p>
            <br></br>
            <button onClick={onStartGame}>Any Question? Press here to start the game...</button>
        </div>
    );
};

export default TutorialScreen;