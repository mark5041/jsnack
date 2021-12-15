let MyArray = [];
let numb;
let tot_numeri = 6;
let i = 0;

do 
{
    numb = parseFloat(prompt("inserisci un numero"));
    if(isNaN(numb))
    {
        i--
    }
    else if(numb % 2 != 0)
        {
            MyArray[i] = numb; 
            console.log(MyArray[i]);
        }
    i++;
    
}
while(i != tot_numeri - 1)

