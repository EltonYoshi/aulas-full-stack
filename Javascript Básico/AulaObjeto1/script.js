//Aula de Funções

/*function media(nota1, nota2){
    
    var media = (nota1 + nota2)/2;
    return media;
}

var notaPrimeira = parseInt(prompt("Digite a nota 1: "));
var notaSegunda = parseInt(prompt("Digite a nota 2: "));

resultado1 = media(notaPrimeira, notaSegunda);
resultado2 = media(9,4);

console.log(resultado1 + " e " + resultado2)*/


//Aula de Funções 2
function saudacao(){
    return "Olá, mundo";
}

//no JS uma função também é uma variável
//portanto se eu atribuir a função a uma variável s
// s automaticamente se tornará a própria função
var s = saudacao;
/*perceba que saudacao está sem os (),logo
eu estou literalmente atribuindo s como uma função
e não à execução da mesma*/

console.log(s());
// com essa ideia, eu posso fazer isso
var media = function (n1, n2){
    return (n1+n2)/2;
}
//esse é o arrow function
var media2 = (n1,n2) =>{
    return (n1 + n2)/2;
}

/*perceba que nos dois casos não foi colocado
o nome da função, visto que se trata de uma
função anônima, portanto, sem nome, só uma função
que é atribuida a uma variável */
console.log(media(5,6));
