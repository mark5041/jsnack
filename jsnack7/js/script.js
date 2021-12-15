// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const Obj_1 = ["a","b","c","d"];
const Obj_2 = [1,2,3,4];
const Obj_3 = [];

for(let i = 0; i < Obj_1.length; i++)
{
    Obj_3.push(Obj_1[i]);
    Obj_3.push(Obj_2[i]);
}
console.log(Obj_3);
