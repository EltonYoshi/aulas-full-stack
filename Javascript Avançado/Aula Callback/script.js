/*Callback é colocar um função dentro de uma variável, e colocar essa variável como argumento de outra função.
Yes, It's possible!! */


function ola(){
    console.log("olá");
}
function tchau (){
    console.log("tchau")
}

function saudacao(s, nome){
    s();
    console.log(nome);
}

/*O ola é uma função que está sendo usada como argumento na função saudacao */
saudacao(tchau, "Elton");

let usuarios = ["Elton", "Marcia", "José"];

function inserirUsuario(nome, callback){
    //lembrando que push é para adicionar no array
    //isso é para simular o delay que existe em um servidor
    /*Sem um callback, a lista ficará sem o usuário adcionado, mas após passa o delay ele irá aparecer */
    setTimeout(() =>{usuarios.push(nome);
    callback()},  1000)
    
}

function listarUsuarios(){
    console.log(usuarios)
}

/*Nesse caso o callback é o listarUsuarios, que vai listar o usuário logo após ele ser adicionado no sistema/array */
inserirUsuario("Claudin", listarUsuarios);
