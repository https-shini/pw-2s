'use strict'

let a = 12;
let b = 20;
let nome = "Tyler Durden";
let cidade = 'São Paulo';
let pais =  `Brasil`;

console.log('Nome: ' + nome + '\nCidade: ' + cidade + '\nPaís: ' + pais + '\nA+B= ' + (a+b));

//Optar por usar a versão abaixo. Além de usar aspas simples.
console.log(
`Nome: ${nome}
Cidade: ${cidade}
País: ${pais}
A+B = ${a+b}`
);

let numero = parseInt(prompt("Digite um num."));
// 'parseInt' se usa para concatenar.
