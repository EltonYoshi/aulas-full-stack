let alunoA = {nome:"Elton", idade:"15"};
let alunoB = alunoA;
/*AlunoB é referência para o A, então se você mudar o B o A também irá mudar */
alunoB.idade = 25;
console.log(alunoA)

/*Contudo quando se trata de algo que não usa referência, que é o caso de valores primitivos, o JS trabalha com valor */
let idadeA = 15;
let idadeB = idadeA;
idadeB = 10;
/*Perceba que a idadeA não foi alterada, não foi sobreescrita pela idadeB */
console.log(idadeA)

/*Os Arrays, por exemplo, trabalham por referência, logo... */
let turmaA = ["Elton", "Joana", "Luiza"];
let turmaB = turmaA;
turmaB.push("Cleitão");
/*Por ser referência o Cleitão também foi adicionado na turmaA */
console.log(turmaA);

let turmaC = ["Elton", "Joana", "Luiza"];
let turmaD = turmaC.slice();
turmaB.push("Cleitão");
/*Nesse caso o Cleitão não foi adicionado na turmaC, pois o slice cria uma cópia da turmaC e não gera uma referência para a turmaD */
console.log(turmaC);

/*Nos objetos você também pode pode fazer a mesma coisa */
let alunoC = {nome: "Elton", idade: 19}
/*O Object.assign, da mesma forma que o slice, ele copia um objeto, no caso ele copiou o objeto alunoC, e colocou a cópia dentro de um objeto vazio, mas você pode fazer uma cópia adicionando novos atributos */
let alunoD = Object.assign({}, alunoC);
alunoD.idade = 25;
/*Dessa forma o alunoC não foi afetado pela referêcia do alunoD */
console.log(alunoD);