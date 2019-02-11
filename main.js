/* const power = require('./pow'); */
const fadtorial = require('./fact.js');
let readline = require('readline-sync');

function randomNumber (number) {
  number = Math.floor((Math.random() * 8) + 1);
}
let szam = [1,2,3,4,5,6,7,8];
let index =readline.keyInSelect(szam, "Melyik szam legyen?");

