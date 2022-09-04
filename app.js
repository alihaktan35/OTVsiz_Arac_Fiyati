function hesapla()
{
    document.getElementById("text").innerHTML="Aracın ÖTV muafiyetli fiyatı:"
    var sonfiyat = Number(document.getElementById("liste").value) / 1.18 / 1.80 * 1.18;
    sonfiyat = ~~sonfiyat; //Virgülden sonrasını göstermemek için
    document.getElementById("sonuc").innerHTML=sonfiyat + " ₺"; //TL sembolünü ekledik
}