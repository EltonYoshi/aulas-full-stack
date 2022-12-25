//Existe vários formas de importar módolos, seja eles do próprio node ou de você ou de terceiros
//Módolo que trabalha com Arquivos do Node


let fs = require('fs')
//fs é módolo do node para importar arquivos
//como esse é um módolo original do node, então não se usa aquela forma de procurar arquivo


//writeFile gera um novo arquivo
//o primeiro é nome do arquivo, o outro é o conteúdo dele e o ultimo é um callback para um erro se tiver
/*fs.writeFile('teste.txt','Hello World', function(error){

    if(error) {
        throw error
    } ;
    console.log("Arquivo criado com sucesso.");

} )


//appendFile vê se o arquivo já existe e vai contatenar algo a ele
fs.appendFile('teste.txt','- Olá Mundo', function(error){

    if(error) {
        throw error
    } ;
    console.log("Arquivo atualizado com sucesso.");

} )

//unlink apaga o arquivo
/*fs.unlink('teste.txt', function(error){

    if(error) {
        throw error
    } ;
    console.log("Arquivo apagado com sucesso.");

} )

//rename, obviamente, renomeia o arquivo
//
fs.rename('teste.txt','NovoNome.txt', function(error){

    if(error) {
        throw error
    } ;
    console.log("Arquivo atualizado com sucesso.");

} )*/

//readFile serve obviamente para ler o arquivo
//a diferença é que aqui no callback tu vai colocar o verificador de erro e o data, ou seja, o conteúdo que foi lido
//depois do nome do arquivo, você tem que passar o formato do arquivo
fs.readFile('NovoNome.txt','UTF8', function(error, data){

    if(error) {
        throw error
    } ;
    console.log(data);

} )


