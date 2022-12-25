const express = require("express");
const router = express.Router()

let alunos = [{id:0, nome:"José"},
 {id:1, nome:"Maria"}, {id:2, nome:"João"}, {id:3, nome:"Marcos"}];


router.get("/aluno", (req, res, next) =>{
    console.log(req.body);

    let aluno = alunos[req.body.id]
    if(aluno){
        res.json(aluno);
    }else{
        next();
    }
})

router.get("/aluno",(req, res, next)=> {
    console.log(req.query);

    let aluno = alunos[req.query.id];
    if(aluno){
        res.json(aluno);
    }else{
        res.send("Aluno não encontado!");
    }
})

router.get("/aluno/all", (req, res) =>{
    res.json(JSON.stringify(alunos));
})

//Exportando o arquivo
module.exports = router;