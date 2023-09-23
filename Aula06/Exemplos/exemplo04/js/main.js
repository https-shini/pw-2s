'use strict'

let frutas = [];
frutas [0] = "morango";
frutas [1] = "uva";
frutas [2] = "manga verde com sal";

console.log(frutas);
frutas.push("pera");
console.log(frutas);
console.log(frutas[1])

let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

let data_hora = new Date();
alert(meses[data_hora.getMonth()]);

for (let i=0; i < meses.length; i++){
    console.log(meses[i]);
}

//for..of
for (let mes of meses){
    console.log(mes);
}

//forEach
meses.forEach(alert)

//forEach
meses.forEach((meses,index)=>{
    console.log(`${index+1} - ${mes}`)
});
