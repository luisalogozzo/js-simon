// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

numeriCasuali = [];
var numeriVisti = [];
var randomNum;
var numeriIndovinati;
var Indovinati = 0;
console.log(Indice);
for (var i = 0; i < 5; i++) {
  randomNum = Math.floor(Math.random() * 50);
  numeriCasuali.push(parseInt(randomNum + ' '));
}
alert(numeriCasuali);


setTimeout(InserisciNum, 30000);

function InserisciNum() {
  for (var i = 0; i < 5; i++) {
    numeriVisti.push(parseInt(prompt('inserisci uno dei numeri usciti')));
  }}

for (var i = 0; i < numeriCasuali.length; i++) {
  var Indice = numeriCasuali.indexOf(numeriVisti[i]);
  if (Indice != -1) {
    numeriCasuali.splice(Indice, 1);
    Indovinati++;
    console.log(numeriCasuali);
    console.log('indovinato + 1');
  }
  console.log(numeriVisti[i]);
  console.log('numeri casuali', numeriCasuali[i]);
}
  console.log('indovinati:', Indovinati);
