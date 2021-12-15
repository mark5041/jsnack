// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
// fino a quando ne avrà tanti quanti l’altro.

let arrray1 = [1,2,3,4,5,6,7,8,9];
let arrray2 = [1,2,3,4,5,6];
let majorArray;
let minorArray;

if(arrray1.length > arrray2.length)
{
    majorArray = arrray1;
    minorArray = arrray2
}
else
{
    majorArray = arrray2
    minorArray = arrray1
}

let i = minorArray.length;

while(majorArray.length != minorArray.length)
{
    minorArray[i] = 0;
    i++;
}

console.log(majorArray);
console.log(minorArray);