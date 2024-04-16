import { useNavigate } from "react-router-dom";
import "./ConsentPage.scss";

const ConsentPage = ({ onAssignParticipantNumber }) => {
  const navigate = useNavigate();

  const handleConsent = () => {
    // Generate a random participant number
    const randomNumber = Math.floor(Math.random() * 10000);

    console.log("Participant number:", randomNumber);

    onAssignParticipantNumber(randomNumber);

    navigate("/presurvey");
  };

  const handleDecline = () => {
    navigate("/");
  };

  return (
    <div className="consent-page">
      <h1>Bilgilendirilmiş Onam Formu</h1>
      <p>
        Dr. Burcu Ünlütabak danışmanlığında Bilişsel Bilimler yüksek lisans
        öğrencisi Hamza Dinçer tarafından yapılan bu çalışma, vereceğiniz
        ekonomik kararlar üzerinden güven mekanizmaların anlaşılmasını
        amaçlamaktadır.
      </p>
      <p>
        Deneyimiz yaklaşık on dakika sürecektir. Sizi davet ettiğimiz
        araştırmada, fare aracılığıyla verdiğiniz ekonomik yanıtları
        değerlendirerek bu kararların güven ilişkileri nasıl etkilediğini makine
        öğrenme yöntemi ile araştıracağız. Deneyde katılımcıdan bir yatırım
        miktarı seçmesi beklenecektir ve bu yatırım kararı sonrası tur sonunda
        ne kadar kazandığı belli olacaktır.
      </p>
      <p>
        Deney süresince katılımcılar toplam 10 denemeye tabi tutulacak ve her
        bir denemede katılımcılara bir yatırım sorusu sunulacaktır. Size ait her
        türlü bilgi gizli tutulacaktır, yayın ve raporlarda kimlik bilgileriniz
        kullanılmayacaktır. Çalışmaya bir kez katılacaksınız. Katılım sırasında
        herhangi bir nedenden ötürü kendinizi rahatsız hissederseniz, deneyi
        istediğiniz safhada bırakmakta serbestsiniz. Böyle bir durumda deneyi
        uygulayan kişiye, deneyi tamamlamayacağınızı söylemeniz yeterli
        olacaktır. Çalışma veya kendi haklarınızla ilgili daha fazla bilgi almak
        için Hamza Dinçer (e-posta: hamza.dincer@std.yeditepe.edu.tr, telefon:
        0532 744 6285) ile iletişim kurabilirsiniz.
      </p>
      <p>
        Bilgilendirilmiş Onam Formundaki tüm açıklamaları okudum. Bana, yukarıda
        konusu ve amacı belirtilen araştırma ile ilgili yazılı ve sözlü açıklama
        aşağıda adı belirtilen araştırmacı tarafından yapıldı. Araştırmaya
        gönüllü olarak katıldığımı, istediğim zaman gerekçeli veya gerekçesiz
        olarak hiçbir yaptırıma maruz kalmadan araştırmadan ayrılabileceğimi ve
        kendi isteğime bakılmaksızın araştırmacı tarafından araştırma dışı
        bırakılabileceğimi biliyorum. Söz konusu araştırmaya, hiçbir baskı ve
        zorlama olmaksızın kendi rızamla katılmayı kabul ediyorum.
      </p>
      <div className="consent-buttons">
        <button onClick={handleConsent}>Onaylıyorum</button>
        <button onClick={handleDecline} className="decline-button">
          Onaylamıyorum
        </button>
      </div>
    </div>
  );
};

export default ConsentPage;
