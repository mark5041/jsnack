// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let tot_num;

do
{
    tot_num = parseInt(prompt("inserisci un numero"));
}
while(isNaN(tot_num))


for(let i = 0; i <= tot_num; i++)
{
    console.log(Math.pow(i, 3));
}

