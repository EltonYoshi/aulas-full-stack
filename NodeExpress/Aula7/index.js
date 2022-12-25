//HTTP Request o que é? Como que funciona?

var express = require('express');
var app = express();


app.get("/", (req, res)=>{
    console.log(req);
    res.json({name: "Elton"});
})

app.listen(3000, () => console.log("Server rodando..."));

