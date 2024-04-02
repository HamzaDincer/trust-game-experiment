import React, { useState } from "react";
import "./OfferScreen.scss";

const OfferScreen = ({ moneyBalance, onOfferComplete, isTrial }) => {
  const [offer, setOffer] = useState(Math.floor(moneyBalance / 2)); // Starting offer amount

  const handleSliderChange = (event) => {
    setOffer(Number(event.target.value));
  };

  return (
    <div className="offer-screen">
      <h2>Ne kadar yatırım yapacaksın?</h2>
      <p>
        Hesabında <b>{moneyBalance}TL</b> var.
        <p>Bu turda Vekilinize ne kadar para göndermek istersiniz?</p>
      </p>
      <div className="slider-container">
        {isTrial && (
          <div className="tooltip">Yatırımınızı yapmak için kaydırın!</div>
        )}
        <input
          type="range"
          min="0"
          max={Math.floor(moneyBalance)}
          value={offer}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
      <div className="offer-container">
        <p className="offer">{offer}TL</p>
        {isTrial && (
          <div className="offer-tooltip">Bu sizin yatırım kararınız</div>
        )}
      </div>
      <button onClick={() => onOfferComplete(offer)}>Yatırımı Onayla</button>
    </div>
  );
};

export default OfferScreen;
