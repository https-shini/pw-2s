'use strict'

let tab = parseInt(prompt("Digite a tabuada: "));

for (let i =  0; i <= 10; i++){
    console.log(`${tab} x ${i} = ${tab * i}`);
}

/*
Outras formas de utilizar:

let cont = 0;
while(cont <= 10){
    console.log(`${tab} x ${cont} = ${tab * cont}`);
    cont++;
}

let i=0;
for(; i <= 10;){
    console.log(`${tab} x ${i} = ${tab * i}`);
    i++;
}
*/
