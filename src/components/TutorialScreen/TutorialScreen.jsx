import React from "react";
import "./TutorialScreen.scss";

const TutorialScreen = ({ onTrialStart }) => {
  return (
    <div className="tutorial-screen">
      <h1>Nasıl Oynanır?</h1>
      <p>
        Güven Oyununa Hoş Geldiniz! Bu sayfa, oyunun temelleri konusunda sizi
        yönlendirecek.
      </p>
      <ol>
        <li>
          Güven Oyunu, bir Vekil ve bir Yatırımcı arasında birkaç turda oynanır.
        </li>
        <li>Bu oyunumuzda her turda Yatırımcı olacaksınız.</li>
        <li>Belli bir miktar para ile yatırım yapmaya başlayacaksınız.</li>
        <li>
          Her turda ne kadar yatırım yapacağınıza siz karar vereceksiniz.
          Yatırımınız Vekil ve yatırımcı tarafından sizinle ve yatırımcı
          arasında paylaşılacak.
        </li>
        <li>
          Vekilinize güvenmeyi/güvenmemeyi öğrenin ve getirileri en üst düzeye
          çıkarmak için stratejik kararlar alın.
        </li>
      </ol>
      <p>Hazır olmanız için birkaç pratik tur ile başlayalım.</p>
      <button onClick={onTrialStart}>Deneme Turlarına Başla</button>
    </div>
  );
};

export default TutorialScreen;
