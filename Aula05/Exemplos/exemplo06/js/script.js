'use strict'

let qtd_m = 0;
let qtd_f = 0;
let soma_a_m = 0;
let soma_a_f = 0;

document.querySelector("#btn1").addEventListener("click", function(){
    let gen = document.querySelector("#genero").value;
    let alt = Number(document.querySelector("#altura").value);
    if (gen == "0"){
        qtd_m ++;
        soma_a_m += alt;
    }else{
        qtd_f ++;
        soma_a_f += alt;
    }
})
document.querySelector("#btn2").addEventListener("click", function(){
    exibirDados();
})
document.querySelector("#btn3").addEventListener("click", function(){
    exibirMedias();
})


function exibirDados(){
    document.querySelector("#qtd_m").innerText = qtd_m;
    document.querySelector("#qtd_f").innerText = qtd_f;
}

let exibirMedias = () => {
    document.querySelector("#media_m").value = soma_a_m/qtd_m;
    document.querySelector("#media_f").value = soma_a_f/qtd_f;
}
