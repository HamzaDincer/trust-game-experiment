import React from "react";

const TutorialScreen = ({ onComplete }) => {
  return (
    <div className="tutorial-screen">
      <h1>How to Play</h1>
      <p>
        Welcome to the Trust Game! This tutorial will guide you through the
        game's basics.
      </p>
      <ol>
        <li>
          Each game is played in rounds between a Trustee and an Investor.
        </li>
        <li>You'll start with a certain amount of money to invest.</li>
        <li>
          Decide how much to invest each round. Your investment will be doubled
          and shared between you and your partner.
        </li>
        <li>
          Learn to trust your partner and make strategic decisions to maximize
          returns.
        </li>
      </ol>
      <p>Let's start with some practice rounds to get you familiarized.</p>
      <button onClick={onComplete}>Start Practice Rounds</button>
    </div>
  );
};

export default TutorialScreen;
