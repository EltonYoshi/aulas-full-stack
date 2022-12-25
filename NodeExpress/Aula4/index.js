
//Usando put, post e delete

//Módolo para criação do server
const express = require('express');

//Módolo que ajuda a criar o caminho dos arquivos
const path = require('path');

const app = express();

const PORT = 5000;

app.use("/meusite",express.static(path.join(__dirname, 'client')))

app.get("/",(req, res)=>{

    res.type("html");

    res.send("<h1>Hello World from Get</h1>");

})

//Requisições
app.post("/", (req, res)=>{
    res.send("<h1>Hello World from Post</h1>");
})

app.put("/", (req, res)=>{
    res.send("<h1>Hello World from Put</h1>");
})

app.delete("/", (req, res)=>{
    res.send("<h1>Hello World from Delete</h1>");
})

app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
});



