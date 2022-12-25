var express = require("express");
var app = express();

//Sabendo que o middleware é uma função com o res e o req, se ela fizer a mesma coisa, pode-se criar várias variáveis com funções middlewares diferentes para representar cada coisa que tu quer.

//Porém para que ele não trave, é preciso colocar um parâmetro next, para dizer para ele passar o próximo middleware.

let consoleBody = (req, res, next) =>{
    console.log(req.body);
    next()
}

let consoleMethod = (req, res, next) =>{

    console.log(req.method);
    next();
    
}

let allMessage = (req, res, next) => {

    console.log("Olá, amigos");
    next();
}

let hello = (req, res) =>{

    res.send("hello world");

}



//O método USE coloca o middleware em todos os métodos (post, delete, put e etc)
app.use("/", express.json());
//esse express.json é o responsável por pegar o valor da requisição do body e organizar ela de uma forma que a gente pode ter acesso ao conteúdo dela

app.use("/", consoleBody);

app.use("/", allMessage);

app.get("/", consoleMethod, hello);

app.post("/", consoleMethod);


/*app.get("/", (req, res) =>{
    res.send("hello world");
})

app.post("/", (req, res) =>{
    res.send("hello world");
})*/

app.listen(3000, ()=> console.log("Server Rodando..."));