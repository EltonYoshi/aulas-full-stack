
let lista = document.getElementById("lista");
//let num = parseInt(lista.getAttribute("data-num"));

//settando
lista.dataset.num = "4";

//gettando
let num = parseInt(lista.dataset.num);

let id = lista.dataset.id;

let conteudo = "";

for (let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}
lista.innerHTML = conteudo;

 function mudarEstilo(){
    
}