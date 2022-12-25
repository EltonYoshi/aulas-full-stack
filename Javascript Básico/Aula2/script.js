
//Aula de Condicionais
var idade = 19;

if (idade >= 18 && idade <= 70){
    console.log("pode");
    console.log("Qual é o seu pedido?");
}
else {
    console.log("não pode");
    console.log("Volte futuramente!")
}

//Aula de Operador Ternário
idade >= 18 ? console.log("pode") : console.log("Não pode")
// o ? representa a ideia de um if e o : é o else
var pode = idade >=18 ? true : false;
console.log(pode)

//Aula de Switch Case
var nota1 = 8.0;
var nota2 = 8.8;

var media = (nota1 + nota2)/2;
var conceito;

if(media >= 8){
    conceito = "Ótimo";
}else if (media >= 6.5 ) {
    conceito = "Bom"
}else{
    conceito = "Regular"
}
console.log(conceito);

switch(conceito){
    case "Ótimo":
        console.log("Parabéns você é um ótimo aluno!")
        break;
    case "Bom":
        console.log("Você está quase perfeito")
        break;
    case "Regular":
        console.log("Estude mais")
        break;
    default:
        console.log("Houve algum erro")
        break;
}