//Argumentos
// node script.js 50 30

//argv é um array
//slice faz um corte no array a partir do numero de elementos colocaos, no caso, dos 2 primeiros

let args = process.argv.slice(2);

let a = Number(args[1]);
//como ja foi cortado 2 posicões então será considerado somente as seguintes
let b = Number(args[2]);
let c = "";

if(args[0] == 's'){
    c = soma(a, b);
}else if(args[0] = 'm'){
    c = mult(a, b);
}else {
    c = "Esse comando não está disponível";
}



function soma(x, y){
    return x + y
}

function mult(x, y){
    return x * y
}


console.log(c)
