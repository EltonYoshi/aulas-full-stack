let image = document.getElementById("like");
image.addEventListener("click", function(){

    //gettar um atributo
    //let lastImage = image.getAttribute("src");

    //Maneira 1 de trcoar uma imagem
    //image.src = "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000";

    image.setAttribute("cor", "vermelho"); 
    //Maneira 2 de trocar uma imagem
    //image.setAttribute("src", "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000");
    //nesse caso ele vai settar algo em um atributo da tag html

    /*A moral de usar o set e o get attribute é que eles
    podem criar atributos que não existem na tag html,
    logo, você pode criar seu próprio atributo */

})
let lista = document.getElementById("lista");
let num = parseInt(lista.getAttribute("num"));
let conteudo = "";

for (let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}
lista.innerHTML = conteudo;