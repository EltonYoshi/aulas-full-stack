const http = require('http');
//método que cria uma url para ser colocado no servidor
const url = require('url');
//método que pega um arquivo, no caso html, para colocar no servidor
const fs = require('fs');

http.createServer((request, response) =>{

    let path = url.parse(request.url).pathname;

    //verificando se caso a url não tiver nada escrito, ele vai inserir o index.html como padrão
    //se não tivesse esse if, se você não colocasse nada na url, ele vai dar página não encontrada
    if(path == "" || path == "/"){
        path = "/index.html";
    }

    let fileName = "." + path;

    //aqui ele vai pegar o arquivo html e abrir
    fs.readFile(fileName, (erro, data)=>{
        if(erro){
            //se ele não encontrar o arquivo, ele vai dar o famoso erro 404
            response.writeHead(404, {"Content-Type":"text/html;charset=utf-8"});
            //charset=utf-8 é os tipos de caracteres usados, esse comando tem inclusive dentro dos arquivos html
            response.end("<h1>Página não encontrada</h1>");
        }else{
            //se der tudo certo, ele vai botar o status 200 que é de OK
            response.writeHead(200, {"Content-Type":"text/html"});
            response.write(data);
            response.end();

        }
    })


}).listen(3000, (erro)=>{

    if(erro){
        console.log(erro);
    }else {
        console.log("Servidor Rodando na Porta 3000");
    }


})