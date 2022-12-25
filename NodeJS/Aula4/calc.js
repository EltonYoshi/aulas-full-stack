//forma alternativa de usar os Módulos
//module.exports é um objeto, atribuindo soma a ele tu pode colocar um método dentro, no caso a função de soma e mult
module.exports.soma = function soma(x, y){
    return x + y;
}

module.exports.mult = function mult(x, y){
    return x * y;
}

