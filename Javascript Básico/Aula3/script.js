//Aula de Laços de repetição
/*var numero = 5;
for( var i = 0; i < numero; i++){
    console.log("repetiu " + i);

}
console.log("acabou");

while (numero < 10){
    console.log("repetiu " + numero);
    numero++;

}*/
//Aula de Array
var alunos = ["Claudio", "Giovana", "Elton", 
"Edivaldo","Josefino"];

console.log(alunos[2]);
for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

//forma diferente de for que percorre um array
//ele faz a mesma coisa que o de cima só que de forma simplificada
//ele pega o index do array
for (var i in alunos){
    console.log(i);
}

//quando você coloca of ele passa a pegar o elemento do array
for (var i of alunos){
    console.log(i);
}
