//HTTP Request o que é? Como que funciona?

var express = require('express');
var app = express();


app.get("/", (req, res)=>{
    //aqui ele vai imprimir no terminal o que é a requisição para o node
    console.log(req);
    res.type('html');
    res.send("<h1>Hello World</h1>");
})

app.listen(3000, () => console.log("Server rodando..."));

