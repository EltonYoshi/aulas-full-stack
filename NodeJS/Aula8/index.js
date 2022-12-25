//Criar um Servidor
//o próprio Node tem um método para criar server http

const http = require('http');

//ele precisa de uma requisição e uma resposta para ela
http.createServer((request, response)=>{
    
    //Cabeçalho que diz o que o navegador tem que interpretar
    response.writeHead(200,{'Content-Type':'application/json'});
    //o 200 é um status/resposta para a requisição feita
    //exemplo o erro 404
    //depois do status, tem o tipo de conteúdo que vai ser requisitado, no caso, text/plain é texto puro, text/html é o html, aplicattion/json
    
    //response.end("<h1>Hello World!</h1>");
    response.end(JSON.stringify({texto:'<h1>Hello World</h1>'}))
    //end é o que vai ser mandado como resposta


}).listen(3000, (erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log("Servidor rodando na porta 3000");
    }
   
})

//escreva no navegador localhost:3000