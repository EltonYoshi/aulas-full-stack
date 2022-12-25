
//Tratando GET Express

//Módolo para criação do server
const express = require('express');

//Módolo que ajuda a criar o caminho dos arquivos
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.static(path.join(__dirname, 'client')))

app.get("/meusite",(req, res)=>{

    //set muda o status
    //res.set("Content-Type", "text/html");

    //type troca diretamente o tipo dele
    res.type("html");
    
    /*
    res.type('.html') => 'text/html'

    res.type('html') => 'text/html'

    res.type('txt') => 'text/plain'

    res.type('json') => 'application/json'

    res.type('application/json') => 'application/json'

    res.type('png') => 'image/png'*/


    //No node padrão era end, no express é send
    res.send("<h1>Hello World</h1>");



})

app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
});



