//axios import buraya gelecek

import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

benimIP = axios.get("https://apis.ergineer.com/ipgeoapi/176.232.59.149")
	.then(data => {
	console.log("data from server >", data);
	const sayfaImport = document.querySelector(".cards")
	sayfaImport.append(myFunc(data));
	})
	.catch(err => {
		console.log("Oops there is an error > ", err);
	})
	.finally(() => {
		console.log("HTTP request is completed!")
	})

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/



/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
const myFunc = ({data}) =>{
	console.log("data inside myFunc", data)
	const cevap = data;

	const cardDiv = document.createElement("div");
	cardDiv.setAttribute("class","card");

	const imgElement = document.createElement("img");
	imgElement.setAttribute("src", cevap.ülkebayrağı);
	cardDiv.append(imgElement);

	const infoDiv = document.createElement("div");
	infoDiv.setAttribute("class", "card-info");
	cardDiv.append(infoDiv);

	const h3Element = document.createElement("h3");
	h3Element.setAttribute("class","ip");
	h3Element.textContent = `Ip adresi: ${cevap.sorgu}`;
	infoDiv.append(h3Element);

	const ulkeP = document.createElement("p");
	ulkeP.setAttribute("class","ulke");
	ulkeP.textContent = `Ülke adı: ${cevap.ülke}, Ülke Kodu: (${cevap.ülkeKodu})`;
	infoDiv.append(ulkeP);

	const enlemP = document.createElement("p");
	enlemP.textContent = `Enlem: ${cevap.enlem} Boylam: ${cevap.boylam}`;
	infoDiv.append(enlemP);

	const sehirP = document.createElement("p");
	sehirP.textContent = `Şehir: ${cevap.şehir}`;
	infoDiv.append(sehirP);

	const saatP = document.createElement("p");
	saatP.textContent = `Saat Dilimi: ${cevap.saatdilimi}`;
	infoDiv.append(saatP);

	const paraP = document.createElement("p");
	paraP.textContent = `Para birimi: ${cevap.parabirimi}`;
	infoDiv.append(paraP);

	const ispP = document.createElement("p");
	ispP.textContent = `ISP: ${cevap.isp}`;
	infoDiv.append(ispP);


return cardDiv;
	



}
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/




/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek