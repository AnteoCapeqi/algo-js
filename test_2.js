const readlineSync = require("readline-sync");
let name = readlineSync.question("Ton nom wesh? ");
let firstname = readlineSync.question("Ton prenom wallah ");
let city = readlineSync.question("T'habite ou nondiju? ")
if (city = "dtc"){
    console.log("Gros Porcs");
}

console.log("Je m'appelle " + name + " " + firstname + " et je vis a " + city)