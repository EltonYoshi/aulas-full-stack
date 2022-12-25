/*O promises é tipo um callback só que mais novo */

let usuarios= ["Elton", "Marcia", "José"]

function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){

        setTimeout(() =>{usuarios.push(nome);
            let error = false;
            //se não der erro
            if(!error){
                resolve()
            }else{
                //aqui eu meio que criei um objeto msg dentro do reject
                reject({msg: "Erro de merda"});
            }
            
            },  1000)
    });
 
    return promise;
}

function listarUsuarios(){
    console.log(usuarios)
}
//o then executa o resolve do promise, SE ele for chamado
//o catch é para tratar o erro, no caso ele vai executar o reject
inserirUsuario("Claudin").then(listarUsuarios).catch((erro) => {
    console.log(erro.msg);
});