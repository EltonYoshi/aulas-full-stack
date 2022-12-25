
//A ideia é criar um programa em que existe um banco de dados de alunos
//ao requisitar o id em um formulário, o usuári receberá o nome do aluno

const express = require("express");
const app = express();

//Mini Banco de Alunos
let alunos = [{id: 0, nome:"José"}, {id: 1, nome:"Maria"}, {id: 2, nome:"Joao"}, {id: 3, nome:"Marcos"}];

//esse é o middleware utlizado para pegar informações do formulário e não do JSON
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/alunos", (req, res)=>{

    res.json(JSON.stringify(alunos));

})

app.get("/aluno", (req, res)=>{
    console.log(req.body);

    //aqui ele vai requisitar o id e como resposta vai receber o nome do aluno que está no array
    let aluno = alunos[req.body.id];
    res.json(aluno.nome);
})

//Formas diferente de pegar um valor sem ser pelo formulário (fazer chamada)

//Query, exemplo, localhost:3000/aluno?id=2
app.get("/aluno", (req, res)=>{
    console.log(req.query);
    let aluno = alunos[req.query.id];
    res.json(aluno.nome);
})

//Diretamente pelo parâmetro, exemplo, localhost:3000/aluno/2
app.get("/aluno/:id", (req, res)=>{
    console.log(req.params);
    let aluno = alunos[req.params.id];
    res.json(aluno.nome);
})


app.listen(3000, ()=> console.log("Server Rodando..."));