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
      <p className="investor-decision">
        Vekiliniz{" "}
        <strong>{(offer * investmentReturnMultiplier).toFixed(0)}TL</strong>{" "}
        olan yatırımınızın
        <strong> {investorResponse}%</strong> ({investmentReturn.toFixed(0)}TL)
        size vermeye karar verdi.
      </p>
      <p className="investment-result">
        {offer}TL olan yatırımınızdan{" "}
        <strong>{investmentReturn.toFixed(0) - offer}TL</strong> kazandınız.
      </p>
      <p className="balance-before">
        Yatırımdan önce <strong>{moneyBalance.toFixed(0)}TL</strong>'niz vardı.
      </p>
      <p className="balance-after">
        Yatırımdan sonra <strong>{finalBalance.toFixed(0)}TL</strong>'niz oldu.
      </p>
      <button
        onClick={() => onNextRound(finalBalance)}
        className="next-round-button"
      >
        Sonraki Tura Geçin
      </button>
    </div>
  );
};

export default ResultScreen;
