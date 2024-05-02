import React from "react";
import "./ResultScreen.scss";

const ResultScreen = ({
  investorResponse,
  offer,
  investmentReturnMultiplier,
  moneyBalance,
  onNextRound,
}) => {
  const investmentReturn = Math.round(
    offer * investmentReturnMultiplier * (investorResponse / 100),
  );
  const finalBalance = Math.round(moneyBalance - offer + investmentReturn);

  return (
    <div className="result-screen">
      <p className="investor-decision">
        Vekiliniz <strong>{offer * investmentReturnMultiplier}TL</strong> olan
        yatırımınızın
        <strong> {investorResponse}%</strong> ({investmentReturn}TL) size
        vermeye karar verdi.
      </p>
      <p className="investment-result">
        {offer}TL olan yatırımınızdan{" "}
        <strong>{investmentReturn - offer}TL</strong> kazandınız.
      </p>
      <p className="balance-before">
        Yatırımdan önce <strong>{moneyBalance}TL</strong>'niz vardı.
      </p>
      <p className="balance-after">
        Yatırımdan sonra <strong>{finalBalance}TL</strong>'niz oldu.
      </p>
      <button
        onClick={() => onNextRound(finalBalance, investmentReturn)}
        className="next-round-button"
      >
        Sonraki Tura Geçin
      </button>
    </div>
  );
};

export default ResultScreen;
