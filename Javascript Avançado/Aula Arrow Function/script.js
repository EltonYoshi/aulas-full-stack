//Função Padrão
/*function dobro(x){
    console.log(2 * x);
}*/

//Função Anônima
/*let dobro = function(x){
    console.log(2 * x);
}*/
//Arrow Function
let dobro = (x) =>{
    console.log(2 * x);
}
dobro(10);

/*só que tem como deixar isso mais simplificado ainda */
let dobro2 = x => (2 * x);
/*Essa coisa é mesma coisa que isso:

let dobro2 = (x) => {
    return(2 * x);
} 

Então se o objetivo é ter só UM argumento, então ele pode ser declarado sem (). Além disso, se ele só quer retornar algo, pode-se escrever daquela forma;
*/
console.log(dobro2(2))


/*Entretanto o Arrow function tem uma limitação quando o assunto é this */

let dobro3 = () => this * 2;

let numero = {
    x: 8,
    d: dobro3
}
console.log(numero.d());
/*Perceba que o valor deu NaN, visto que o Arrow Function não reconhece o this, então nem com o bind ele vai funcionar */