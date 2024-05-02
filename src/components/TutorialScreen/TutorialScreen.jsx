import React from "react";
import "./TutorialScreen.scss";

const TutorialScreen = ({ setStage }) => {
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
          Yatırımınız ikiye katlanıp vekiliniz tarafından aranızda paylaşılacak.
        </li>
        <li>
          Yapacağınız yatırım kararları vekilinizin kararlarını etkileyecek.
        </li>
        <li>
          Bu oyunda vekilinize güvenmeye/güvenmemeye karar vereceksiniz ve
          kazancınızı en üst düzeye çıkarmak için stratejik kararlar almanız
          gerecek.
        </li>
      </ol>
      <p>Hazır olmanız için birkaç pratik tur ile başlayalım.</p>
      <button onClick={() => setStage("offer")}>Deneme Turlarına Başla</button>
    </div>
  );
};

export default TutorialScreen;
