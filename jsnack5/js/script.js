// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchina = [
    {
        varieta: "tipo 1",
        peso: 100,
        lungheza: 14,
    },
    {
        varieta: "tipo 2",
        peso: 101,
        lungheza: 13,
    },
    {
        varieta: "tipo 3",
        peso: 102,
        lungheza: 12,
    },
    {
        varieta: "tipo 4",
        peso: 103,
        lungheza: 14.5,
    },
    {
        varieta: "tipo 5",
        peso: 104,
        lungheza: 14.3,
    },
    {
        varieta: "tipo 6",
        peso: 105,
        lungheza: 11,
    },
    {
        varieta: "tipo 7",
        peso: 106,
        lungheza: 11.5,
    },
    {
        varieta: "tipo 8",
        peso: 107,
        lungheza: 12.3,
    },
    {
        varieta: "tipo 9",
        peso: 108,
        lungheza: 11.7,
    },
    {
        varieta: "tipo 0",
        peso: 109,
        lungheza: 13.2,
    }
]

let tot = 0;

for(let i = 0; i < zucchina.length; i++)
{
    console.log(tot);
    let {peso} = zucchina[i];
    tot += peso;
}
console.log(tot);
