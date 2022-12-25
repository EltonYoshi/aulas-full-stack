//botando a soma e multiplicação em um arquivo igual, precisa-se criar um objeto para o arquivo principal saber qual deles tem que ser exportado

let calc = {
    mult: (x,y)=>{
        return x * y
    },
    soma: (x, y)=>{
        return x + y
    }
}

module.exports = calc;