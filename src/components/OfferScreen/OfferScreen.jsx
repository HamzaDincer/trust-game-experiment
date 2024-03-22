import React, { useState } from "react";
import "./OfferScreen.scss";

const OfferScreen = ({ moneyBalance, onOfferComplete, isTrial }) => {
  const OFFER_START_AT = 10; // Starting offer amount
  const [offer, setOffer] = useState(OFFER_START_AT);
  const MAX_OFFER = moneyBalance; // Assuming the max offer can be all the money balance

  // Update the offer based on the slider
  const handleSliderChange = (event) => {
    setOffer(Number(event.target.value));
  };

  return (
    <div className="offer-screen">
      <h2>Decide How Much You Will Invest Now!</h2>
      <p>You have ${moneyBalance} in your balance</p>
      <div>
        <input
          type="range"
          min={0}
          max={MAX_OFFER}
          value={offer}
          onChange={handleSliderChange}
          className="slider"
        />
        <p>Make Your Offer: ${offer}</p>
      </div>
      <button onClick={() => onOfferComplete(offer)}>Confirm Offer</button>
    </div>
  );
};

export default OfferScreen;
