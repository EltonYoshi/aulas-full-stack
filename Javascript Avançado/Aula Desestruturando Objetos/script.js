var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 989425367,
    cidade: "Glorinha"
}
/*Aqui você está criando uma variável para cada atributo do objeto, ou seja, o atributo será também um objeto */
var {matricula, nome} = aluno;
console.log(matricula)
console.log(nome)

/*Juntando as ideias de Spread ali, você perceberá que o você fará uma cópia somente das partes que você quer, sendo que o ... pegará o resto dos atributos que não foram declarados */
var {matricula, nome, ...resto} = aluno;
console.log(resto)
console.log(matricula)

/*Essa lógica pode ser aplicada nos Arrays tbm */
var aluno0 = {
    matricula: 123444,
    nome: "Jeferson",
    telefone: 989425367,
    cidade: "Glorinha"
}
var aluno1 = {
    matricula: 1477576,
    nome: "Florentino",
    telefone: 98435355,
    cidade: "Glorinha"
}
var aluno2 = {
    matricula: 3453535,
    nome: "Elton",
    telefone: 98435355,
    cidade: "Cachoeirinha"
}

var todosAlunos = [aluno0, aluno1, aluno2];
/*No caso do Array, a ordem importa, visto que o index do array mantem um ordem */
var [Jeferson, Florentino, ...outros] = todosAlunos;
console.log(Jeferson);
console.log(outros)
