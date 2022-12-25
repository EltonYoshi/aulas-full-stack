function novoAluno(nome, idade){
    return {nome, idade}
}
let Alunos = [
    novoAluno ("Mario", 33),
    novoAluno ("Edilaine", 21),
    novoAluno ("Lorenzo", 55),
    novoAluno ("Elinton", 22)

]

function idadesSomadas(total, aluno){
    return total + aluno.idade;
}
/*Aquele 0 é o que vai ser atribuido no total para somar com a idade do aluno, começando então em 0 */
/*Mas não precisa ser só número */
console.log(alunos.reduce(idadesSomas, 0));