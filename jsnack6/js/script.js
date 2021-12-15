// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchina = [
    {
        varieta: "tipo 1",
        peso: 100,
        lunghezza: 14,
    },
    {
        varieta: "tipo 2",
        peso: 101,
        lunghezza: 16,
    },
    {
        varieta: "tipo 3",
        peso: 102,
        lunghezza: 12,
    },
    {
        varieta: "tipo 4",
        peso: 103,
        lunghezza: 17.5,
    },
    {
        varieta: "tipo 5",
        peso: 104,
        lunghezza: 14.3,
    },
    {
        varieta: "tipo 6",
        peso: 105,
        lunghezza: 15.6,
    },
    {
        varieta: "tipo 7",
        peso: 106,
        lunghezza: 11.5,
    },
    {
        varieta: "tipo 8",
        peso: 107,
        lunghezza: 12.3,
    },
    {
        varieta: "tipo 9",
        peso: 108,
        lunghezza: 11.7,
    },
    {
        varieta: "tipo 0",
        peso: 109,
        lunghezza: 15.2,
    }
]

let zucchineMaj = [];
let zucchineMin = [];
let totMaj = 0;
let totMin = 0;


for(let i = 0; i < zucchina.length; i++)
{
    if(zucchina[i].lunghezza > 15)
    {
        let {lunghezza} = zucchina[i];
        totMaj += lunghezza;
        zucchineMaj.push(zucchina[i]);
    }
    else
    {
        let {lunghezza} = zucchina[i];
        totMin += lunghezza;
        zucchineMin.push(zucchina[i]);
    }
}
console.log(zucchineMaj);
console.log(zucchineMin);
console.log(totMaj);
console.log(totMin);
