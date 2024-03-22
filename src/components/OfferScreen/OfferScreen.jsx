import React, { useState, useEffect } from "react";
import "./OfferScreen.scss";

const OfferScreen = ({ moneyBalance, onOfferComplete, isTrial }) => {
  const OFFER_START_AT = 10; // Starting offer amount
  const MONEY_INCREMENT = 5; // Increment amount for each offer change
  const [offer, setOffer] = useState(OFFER_START_AT);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "ArrowRight" &&
        offer + MONEY_INCREMENT <= moneyBalance
      ) {
        setOffer(offer + MONEY_INCREMENT);
      } else if (event.key === "ArrowLeft" && offer - MONEY_INCREMENT >= 0) {
        setOffer(offer - MONEY_INCREMENT);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [offer, moneyBalance]);

  return (
    <div className="offer-screen">
      <h2>Decide How Much You Will Invest Now!</h2>
      <p>You have ${moneyBalance}</p>
      <p>Your Offer: ${offer}</p>
      <button onClick={() => onOfferComplete(offer)}>Confirm Offer</button>
    </div>
  );
};

export default OfferScreen;
