

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

async function executar(){
    /*O await espera uma função ser resolvida para assim executar ela */
    await inserirUsuario("Cleitin");
    listarUsuarios();
}
executar();