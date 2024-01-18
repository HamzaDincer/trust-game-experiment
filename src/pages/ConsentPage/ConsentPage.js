import React from 'react';
import './ConsentPage.scss'

const ConsentPage = ({ onNext, onAssignParticipantNumber }) => {
    const handleConsent = () => {
        // Generate a random participant number
        const randomNumber = Math.floor(Math.random() * 10000);
        
        // Assign the participant number
        onAssignParticipantNumber(randomNumber);

        // Move to the next stage, which can be defined in your Experiment component
        onNext('nextStageName'); // Replace 'nextStageName' with the actual name of the next stage
    };

    return (
        <div className="consent-page">
            <h1>Consent Form</h1>
            <p>
            Öncelikle çalışmamızda denek olarak yer aldığınız için teşekkürler. Dr. Burcu Ünlütabak danışmanlığında Bilişsel Bilimler yüksek lisans öğrencisi Hamza Dincer tarafından yapılan bu çalışma, vereceğiniz ekonomik kararlar üzerinden güven mekanizmaların anlaşılmasını amaçlamaktadır. 
            Çalışmaya toplam 90 gönüllü alınacaktır ve çalışma on dakika sürecektir.	 
            Sizi davet ettiğimiz araştırmada, klavye tuşları aracılığıyla verdiğiniz ekonomik yanıtları değerlendirerek bu kararların güven ilişkileri nasıl etkilediğini makine öğrenme yöntemi ile araştıracağız. 
            Deneyde katılımcıdan sağ ve sol oklarla bir yatırım miktarı seçmesi beklenecektir ve bu yatırım kararı sonrası tur sonunda ne kadar kazandığı belli olacaktır.
            Deney süresince katılımcılar toplam 10 denemeye tabi tutulacak ve her bir denemede katılımcılara bir yatırım sorusu sunulacaktır. 
            Size ait her türlü bilgi gizli tutulacaktır, yayın ve raporlarda kimlik bilgileriniz kullanılmayacaktır.
            Çalışmaya bir kez katılacaksınız. Katılım sırasında herhangi bir nedenden ötürü kendinizi rahatsız hissederseniz, deneyi istediğiniz safhada bırakmakta serbestsiniz. Böyle bir durumda deneyi uygulayan kişiye, deneyi tamamlamayacağınızı söylemeniz yeterli olacaktır. 
            Çalışma veya kendi haklarınızla ilgili daha fazla bilgi almak için Hamza Dinçer (e-posta: hamza.dincer@std.yeditepe.edu.tr, telefon: 0532 744 6285) ile iletişim kurabilirsiniz.
            Bilgilendirilmiş Gönüllü Olur Formundaki tüm açıklamaları okudum. Bana, yukarıda konusu ve amacı belirtilen araştırma ile ilgili yazılı ve sözlü açıklama aşağıda adı belirtilen araştırmacı tarafından yapıldı. Araştırmaya gönüllü olarak katıldığımı, istediğim zaman gerekçeli veya gerekçesiz olarak hiçbir yaptırıma maruz kalmadan araştırmadan ayrılabileceğimi ve kendi isteğime bakılmaksızın araştırmacı tarafından araştırma dışı bırakılabileceğimi biliyorum.
            Söz konusu araştırmaya, hiçbir baskı ve zorlama olmaksızın kendi rızamla katılmayı kabul ediyorumm.
            </p>
            <button onClick={handleConsent}>I Consent</button>
        </div>
    );
};

export default ConsentPage;
