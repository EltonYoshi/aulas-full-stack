//Métodos post, http, get, put, delete
//get é para ler algo
//post é para mandar algum dado no servidor e verificar
//put manda um dado, mas ele sobrepoem o dado
//delete, deleta o dado do servidor obviamente

const http = require('http');
const url = require('url');
const fs = require('fs');




function handleFile(req, res, callback){
    let path = url.parse(req.url).pathname;

    let method = req.method;
    console.log(method);


    if(path == "" || path == "/"){
        path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (erro, data)=>{
        if(erro){
            if(callback){
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

    let method = req.method;
    console.log(method);

    if(method == 'PUT'){
        res.writeHead(404, {"Content-Type":"text/html;charset=utf-8"});
    }

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