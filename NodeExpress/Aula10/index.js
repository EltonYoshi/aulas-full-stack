const express = require("express");
const app = express();
const aluno = require("./routes/aluno")

let geral = (req, res) =>{
    res.send("Hello World");
}

app.use(express.urlencoded());

app.use("/api", aluno);

app.get("/", geral);

app.listen(3000, ()=>console.log("Server rodando..."));