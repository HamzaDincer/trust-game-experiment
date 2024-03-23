import React, { useState } from "react";
import "./OfferScreen.scss";

const OfferScreen = ({ moneyBalance, onOfferComplete, isTrial }) => {
  const [offer, setOffer] = useState(moneyBalance / 2); // Starting offer amount

  const handleSliderChange = (event) => {
    setOffer(Number(event.target.value));
  };

  return (
    <div className="offer-screen">
      <h2>Decide How Much You Will Invest Now!</h2>
      <p>You have ${moneyBalance} in your balance</p>
      <div className="slider-container">
        {isTrial && <div className="tooltip">Slide to make your offer!</div>}
        <input
          type="range"
          min="0"
          max={moneyBalance}
          value={offer}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
      <p>Make Your Offer: ${offer}</p>
      <button onClick={() => onOfferComplete(offer)}>Confirm Offer</button>
    </div>
  );
};

export default OfferScreen;
