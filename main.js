const power = require('./pow');
const factorial = require('./fact.js');
let readline = require('readline-sync');

function randomNumber (number) {
  let number = Math.floor((Math.random() * 8) + 1);
}
let szam = [1,2,3,4,5,6,7,8];
let index =readline.keyInSelect(szam, "Melyik szam legyen?");

console.log('Hatvany: ', power.pow);
console.log('Faktorialis: ', factorial.fact(randomNumber));

