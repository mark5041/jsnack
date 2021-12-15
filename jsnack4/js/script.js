//  * Crea un array vuoto e chiedi all’utente un numero
//  * da inserire nell’array. Continua a chiedere i numeri
//  * all’utente e a inserirli nell’array fino a quando
//  * la somma degli elementi è minore di 50.

let array = [];
let numSum = 0;
const maxSum = 50;

do
{
    let num;
    do
    {
        num = parseFloat(prompt("inserisci un numero"));
    }
    while(num >= maxSum || num < 0)
    numSum += num;
    if(numSum < maxSum)
    {
        array.push(num);
    }
    console.log(array);
    console.log(numSum);
}
while(numSum < maxSum)