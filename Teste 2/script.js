

function escrever(elemento){
    var tagTexto = document.createElement("h1");
    var texto = document.createTextNode(elemento.value);
    tagTexto.appendChild(texto);
    document.body.appendChild(tagTexto);
}