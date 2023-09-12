'use strict'

let media = Number(prompt("Digite a sua média: "));
if (media < 0 || media >10){
    alert("Invalido!!");
}else{
    if(media >= 5.75){
        alert("Aprovado!!");
    }else{
        alert("Reprovado!!");
    }
}

let x = 100;
let resp = (x % 2 == 0)? "par" : "impar";

let obj_data = new Date();
const dia_semana = obj_data.getDay();

switch (dia_semana){
    case 0: alert("Domingo");  break;
    case 1: alert("Segunda");  break;
    case 2: alert("Terça");    break;
    case 3: alert("Quarta");   break;
    case 4: alert("Quinta");   break;
    case 5: alert("Sexta");    break;
    case 6: alert("Sábado");
}
