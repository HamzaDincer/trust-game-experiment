import React from "react";

const ResultScreen = ({
  investorResponse,
  offer,
  investmentReturnMultiplier,
  moneyBalance,
  onNextRound,
}) => {
  const investmentReturn =
    offer * investmentReturnMultiplier * (investorResponse / 100);
  const finalBalance = moneyBalance - offer + investmentReturn;

  return (
    <div className="result-screen">
      <p>Investor has returned the {investorResponse}% of your investment.</p>
      <p>You gained ${investmentReturn.toFixed(2)} from this investment.</p>
      <p>Before the investment: ${moneyBalance.toFixed(2)}</p>
      <p>After the investment: ${finalBalance.toFixed(2)}</p>
      <button onClick={onNextRound}>Proceed to Next Round</button>
    </div>
  );
};

export default ResultScreen;
