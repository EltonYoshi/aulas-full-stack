//Módulos
//let soma  = require("./calc")
//require importa o modulo exportado
//let mult = require("./calc")

let calc = require("./calc");
//nesse caso, ele vai puxar o objeto calc, que possui os módolos de soma e multiplicação

let args = process.argv.slice(2)


let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if(args[0] == "s"){
    c = calc.soma(a, b);
}else if (args[0] == "m"){
    c = calc.mult(a, b)
}else{
    c = "Opção Inválida"
}

console.log(c);
