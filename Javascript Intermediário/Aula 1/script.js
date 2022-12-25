
// Objeto Window
window.console.log("Olá, mundo!");
console.log("Cagada");

// Propriedade Document do Objeto Window
//ele é o que acessa o documento html
console.log(document);

// O famoso DOM
document.body.innerHTML;
/* dentro do document existe a propriedade body
bem como dentro de body existe o innerHTML, que
transforma o conteúdo do body em string
*/ 
console.log(document.body.innerHTML);
//pode ver que foi printada uma string do conteúdo  do body
//pode-se inserir tags também
document.body.innerHTML = "<h1> Bom dia" + document.body.innerHTML;
console.log(document.body.innerHTML);

//Acessando qualquer elemento do HTML
//ele procura o ID
let p1 = document.getElementById("p1");
console.log(p1);

//ele producra a classe
let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos)
//pode ver que é criado um array para conter todos os elementos de mesma classe(no caso 2)

//ele pega a tag, logo, ele pegará todos os paragrafos
let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos);
//perceba que ele colocou um array com todos os paragrafos (no caso 3)

//Modificando Elementos
let d = document.getElementById("p2");
d.innerHTML = "<h2>Novo conteúdo<h2/>";
//o innerHTML coloca de fato um elemento html lá
//podendo então colocar um h2 dentro de um p

d.innerText = "Conteúdo mais novo"
d.textContent = "Mais novo ainda"

//Modificando atributos
let p = document.getElementById("p1");
//p.style = "color: red";
p.className = " ";
//ele perde a classe paragrafo e fica sem a cor azul que foi atribuida a ela

//serve para gettar um atributo criado por você
p.getAttribute("meuAtt");

//dessa forma ele muda o conteúdo do atributo
p.setAttribute("meuAtt", "outro nome");

//cria um novo atributo
p.setAttribute("cavalo","vingadores");
console.log(p.getAttribute("cavalo"));
console.log(p);