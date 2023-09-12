'use strict'

let botao = document.getElementById("btn");
let div = document.querySelector("#relatorio");

botao.addEventListener('click', function(){
    div,this.innerHTML = "Tábuada do 2";
    for(let i = 0; i <= 10; i++){
        div.innerHTML += `2 x ${i} = ${2 * i} <br>`;
    }
});
