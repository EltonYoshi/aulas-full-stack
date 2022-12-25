/*O try e o catch é uma forma de tratar um erro, ou seja, ele vai fazer o código tentar algo, se der algum erro, o código não vai parar, ele vai continuar */
/*Além disso ele pode verificar algo */
let nome = "";
try{
    if(nome == ""){
        /*O throw serve para criar um excesão, ou seja, se acontecer algo muito específico, como o nome estar vazio, ele vai mostrar uma mensagem sinalizando que o nome está vazio */
        throw "O nome não pode ser vazio"
    }
    console.log(nome);
}catch(erro){
    console.log("Houve um erro: ", erro)
}
console.log("Boa noite")