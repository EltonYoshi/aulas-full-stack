/*é geralmente utilizada em arrays */

/*Isso é uma função que cria e retorna um objeto dentro do array alunos, fazendo com que cada array seja um objeto */
function novoAluno(nome, idade){
    return {nome, idade};
}
let alunos = [
    novoAluno("Elton", 21),
    novoAluno("Claudio", 33),
    novoAluno("Edivaldo", 19),
    novoAluno("Geraldo", 30)
];
console.log(alunos);
/*Mas e se eu quiser listar só os alunos com menos de 30 anos? */
//Você poderia fazer o seguinte
/*

for(let aluno of alunos){
    if(aluno.idade < 30){
        console.log(aluno.nome);
    }
}

Mas com o filter a coisa pode ser melhor! Lembrando que todo array tem um filter 
*/
/*Essa função tem um if booleano dentro dela, ele vai retornar true ou false */
function temMenosDe30(aluno){
    return aluno.idade < 30 
}

function temMaisDe30(aluno){
    return aluno.idade > 30 
}

let alunosMenosDe30 = alunos.filter(temMenosDe30);
console.log(alunosMenosDe30);
