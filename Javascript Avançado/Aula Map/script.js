
function novoAluno(nome, idade){
    return {nome, idade};
}
let alunos = [
    novoAluno("Elton", 21),
    novoAluno("Claudio", 33),
    novoAluno("Edivaldo", 19),
    novoAluno("Geraldo", 30)
];
function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos." 
}
function alunoMais5Anos(aluno){
    /*Se você fizer isso, o array principal será modificado também

    return aluno.idade += 5;

    Vai na aula de valor vs referência que você vai entender, dica:

    return aluno.idade = aluno.idade + 5
    isso gera um referência

    */
   /*Dessa forma ele alterará o objeto do array, adicionando mais 5 anos para o aluno, mas o array principal não será modificado */
   return {
    nome: aluno.nome,
    idade: aluno.idade + 5
   }
}

/*Perceba que o Map ele reescreve cada array de um forma diferente. Ele mapeia cada elemento do array e reescreve ele */
console.log(alunos.map(alunoMais5Anos));
console.log(alunos);