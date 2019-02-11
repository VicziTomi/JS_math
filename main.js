let readline = require('readline-sync');
const power = require('./pow');
const factorial = require('./fact');


function randomNumber (number) {
  let numbber = Math.floor((Math.random() * 8) + 1);
  console.log(numbber)
  return numbber;
}
/* let szam = [1,2,3,4,5,6,7,8];
let index =readline.keyInSelect(szam, "Melyik szam legyen?"); */

console.log('Hatvany: ', power.power(2, 5));
console.log('Faktorialis: ', factorial.factt(randomNumber(5)));
