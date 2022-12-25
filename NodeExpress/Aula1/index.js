//Importando todo módolo express
const express = require('express');

//Criando Objeto Express
//foi colocado dentro do app a função que cria o express
const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
});

//Através do ip do computador, pode-se conectar com o servidor que está rodando
//exemplo, 10.0.0.103:5000