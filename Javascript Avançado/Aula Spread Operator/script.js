var pessoa = {
    nome: "José Silva",
    idade: 42
}

var contato = {
    telefone: 93836229,
    email: "jose@gmail.com"
}
/*o spread operator são os ..., que criam uma cópia do objeto ou do array que vier depois deles */
/*var copia = {...pessoa};
Mas você pode criar uma cópia e adicionar mais atributos e inclusive juntar dois objetos*/
var copia = {...pessoa, cidade:"Glorinha", ...contato};
copia.idade = 88;
console.log(pessoa);
console.log(copia);

/*Dessa forma você também pode juntar dois arrays */
var notasTurma1 = [10, 3, 4, 5];
var notasTurmas2 = [2, 4, 5, 9]
var todasNotas =  [...notasTurma1, ...notasTurmas2]
console.log(todasNotas)