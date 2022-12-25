//Trabalahndo com responses diferentes

const http = require('http');
const url = require('url');
const fs = require('fs');




function handleFile(req, res, callback){
    let path = url.parse(req.url).pathname;

    if(path == "" || path == "/"){
        path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (erro, data)=>{
        if(erro){
            //se ele não encontrar o arquivo do path e colocar /teste, ele irá se comportar de uma forma diferente além de um erro simples
            if(callback){
                //quando ele chamar o callback, mas ele não for tratado, ou seja, dar false, ele vai retornar o erro padrão
               if(!callback(req, res)){
                res.writeHead(404, {"Content-Type":"text/html;charset=utf-8"});
                res.end("<h1>Página não encontrada</h1>");
               }
            }

            

        }else{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();

        }
    })
}


function handleRequest(req, res){

    let path = url.parse(req.url).pathname;

    if(path == "/teste"){
        
        res.end("Teste");
        return true;
    }

    return false;
}




http.createServer((request, response) =>{

    //Função que procura o arquivo e coloca no servidor
    handleFile(request, response, handleRequest)


}).listen(3000, (erro)=>{

    if(erro){
        console.log(erro);
    }else {
        console.log("Servidor Rodando na Porta 3000");
    }


})