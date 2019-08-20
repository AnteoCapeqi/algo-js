const readlineSync = require("readline-sync");
let chiffre = new Number (readlineSync.question("Premier chiffres a additioner  "));
let chiffre_2 = new Number (readlineSync.question("Second chiffre a ajouter  ")) ;
let total = (chiffre + chiffre_2) ;
console.log("Le resultat est  " + total);
chiffre = new Number(readlineSync.question("Valeurs a soustraire  "));
chiffre_2 = new Number(readlineSync.question("Valeur de soustraction "));
total = (chiffre - chiffre_2);
console.log("le resultat est de " + total);

