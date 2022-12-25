//Pacote com Funções da Matamática

const operacoesBasicas = require('./operacoesBasicas')
const areas = require('./areas')

module.exports= { ...operacoesBasicas, ...areas}

//Como criar pacote
//npm init\
//entry point é o arquivo que junta tudo, no caso, o index

