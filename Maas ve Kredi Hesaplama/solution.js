//!Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
const maas = Number(prompt("Maasinizi giriniz"));
const asgariUcret = 5500;
const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));

//!Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gider = Number(prompt("Giderlerinizi giriniz"));
const gelir = Number(prompt("Gelirleriniz giriniz"));
const kredi = gelir - gider >= 5000 ? "KREDI ALABILIR 🤑" : " KREDI ALAMAZ 🥺";
console.log(kredi);
