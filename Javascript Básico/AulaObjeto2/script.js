//Aula de Objetos
/*var aluno = {
    nome: "João",
    notas: [7.5, 7.0]
}
console.log(aluno.nome);
console.log(aluno.notas[1]);

//criando um novo objeto
aluno.matricula = 1234;

//criando um novo objeto com variável
var novaProp = "sobrenome";
aluno[novaProp] = "Oliveira";

console.log(aluno);

//isso vale mais para quando você cria um objeto vazio
var aluno2 = new Object();
aluno2.mensalidade = [2550,300];
console.log(aluno2.mensalidade)*/




//Aula de Objeto de Métodos

/*var aluno = {
    nome:"Elton",
    notas: [5, 8],
    media: function(n1, n2){
        return (n1+n2)/2;
    }
}*/
/*
Da forma de cima, você não precisa arrumar em cada método 
se você quiser mudar algum valor da média, visto que você
simplesmente pode alterar em uma função que valerá para os
dois métodos
*/
/*function calcMedia(n1, n2){
    return ((n1*2) + n2)/3;
}
var aluno = {
    nome:"Elton",
    notas: [5, 8],
    media: calcMedia
}
var aluno1 = {
    nome:"João",
    notas: [6, 8],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));
*/

/*
Nesse caso, como o calcMedia faz parte do método media,
o this vai funcionar para pegar os valores de notas dentro do
objeto em si
*/
var calcMedia = function (){
    return ((this.notas[0]*2) + this.notas[1])/3;
}
var aluno = {
    nome:"Elton",
    notas: [5, 8],
    media: calcMedia
}
var aluno1 = {
    nome:"João",
    notas: [3, 8],
    // é como se eu tivesse pegado a função e resumido em uma variável
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());


