/*Criar um programa que mostre o Nome do aluno,
a nota 1, a nota 2, a media e dizer se ele está
aprovado ou não */

function media (n1, n2){
    return (n1+n2)/2;
}

function resultado(media){
    var resultado;
    if(media < 7){
        resultado = "Reprovado"
    }else {
        resultado = "Aprovado"
    }
    return resultado;
}

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

for (var i in nomes){
    var m = media(notasA[i], notasB[i]);

    console.log("Nome: "+ nomes[i] + "\nNota 1: " + 
    notasA[i] + "\nNotas 2: " + notasB[i] + "\nMedia: " +
     m + "\nResultado: "+ resultado(m))
}
