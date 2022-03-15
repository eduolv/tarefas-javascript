// Escreva um programa em que o usuário informe dois números utilizando o "prompt". 
// Então escreva em tela o maior deles.

var numero = parseInt(prompt("Digite um número"));
var segundo = parseInt(prompt("Digite outro número"));


if (numero <= segundo) {
    document.write(segundo);
}

else if (numero > segundo) {
    document.write(numero);
}

// .............................................................