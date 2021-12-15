// Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
// Poi stampiamo in pagina

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

let container = document.querySelector(".container");
arrayObj.forEach(element => 
    {
        element.age = Math.floor(Math.random() * 50) + 3; 
        let div =  document.createElement("div");
        div.innerHTML = `name: ${element.name}, <br> 
                        type: ${element.type}, <br> 
                        color: ${element.color}, <br> 
                        age: ${element.age}`;
        let br =  document.createElement("br");
        container.append(div);
        container.append(br);
        console.log(element);
    });
