import React from "react";
import "./ResultScreen.scss";

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
      <p>
        Vekiliniz {offer * investmentReturnMultiplier}TL olan yatırımınızın{" "}
        {investorResponse}%'nini size vermeye karar verdi.
      </p>
      <p>
        {offer}TL olan yatırımınızdan {investmentReturn.toFixed(2) - offer}TL
        kazandınız.
      </p>
      <p>Yatırımdan önce {moneyBalance.toFixed(2)}TL'niz vardı.</p>
      <p>Yatırımdan sonra {finalBalance.toFixed(2)}TL'niz oldu</p>
      <button onClick={() => onNextRound(finalBalance)}>
        Sonraki Tura Geçin
      </button>
    </div>
  );
};

export default ResultScreen;
