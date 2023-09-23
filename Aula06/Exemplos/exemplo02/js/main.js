'use strict'

document.querySelector("#btn").addEventListener("click", function(){
    let info = document.querySelector("#texto").value;
    inverterString(info);
    inserirSimbolo(info, "*");
});
function inverterString(str){
    let saida = "";
    // length -> se errar e colocar "lenght" no lugar pode 0 na prova.
    //Além de dar um erro que o console não mostra
    for (let i = str.length-1; i >= 0; i--){
        saida += str[i].toUpperCase();
    }
    console.log(saida);
}
function inserirSimbolo(str, simbolo){
     let saida ='';
     for (let i = 0; i < str.length-1; i++){
        saida += str[i] + simbolo;
    }
    saida += str[str.length-1];
    console.log(saida);
}
