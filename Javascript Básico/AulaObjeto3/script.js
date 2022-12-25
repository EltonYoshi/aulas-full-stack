//Aula de objetos Construtores
function criarAluno(nome, n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
        
    }
}
var turma = [
    criarAluno("Igor", 9, 8),
    criarAluno("Claudio", 7, 8),
    criarAluno("Marcela", 9, 8)


]

var aluno = turma[0];

/*
Sabendo que um array também é um objeto no JS, pode-se chamar
um módolo do array chamado de forEach
*/
/*turma.forEach(function(elemento){
    console.log(elemento);
})*/
for (var aluno of turma){
    console.log(aluno);
}



/*var calcMedia = function(){
    return (this.nota1 + this.nota2)/2;
}

var turma = [
    {
        nome:"Igor",
        nota1: 7,
        nota2: 8,
        media: calcMedia
    },
    {
        nome:"Igor",
        nota1: 4,
        nota2: 5,
        media: calcMedia
    }
]
var aluno = turma[0];
console.log(aluno);
console.log(aluno.media())*/

//Outro Construtor
/*Sabendo que tudo em JS é um objeto, pode-se 
criar uma função como um objeto */

function aluno1 (nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function(){
        return (this.nota1 + this.nota2)/2;
    }
}
/*A partir de agora a função trabalhará como um objeto*/
var a = new aluno1 ("Elinton", 6,5);
console.log(a);
console.log(a.media());