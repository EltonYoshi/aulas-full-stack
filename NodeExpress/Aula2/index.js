
//Arquivos estáticos com Express

//Módolo para criação do server
const express = require('express');

//Módolo que ajuda a criar o caminho dos arquivos
const path = require('path');

const app = express();

const PORT = 5000;

//Serve para pegar arquivos estáticos, como html
//dentro do static tu vai colocar onde está o arquivo html através do path
//no path ele vai procurar a contante __dirname na pasta client
//isso serve para substituir os ifs com o node padrão

app.use(express.static(path.join(__dirname, 'client')))

//a boa de usar esse tipo de método é que ele faz com que você possa modificar os arquivos sem ter que fechar e abrir o servidor para ver a moficação


app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
});



