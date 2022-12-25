let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//move o pincel para o ponto de incio
ctx.moveTo(0, 0);

//move o pincel até o ponto final da linha
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
//definindo uma cor para a linha
ctx.strokeStyle = "blue";
//definindo a grossura da linha
ctx.lineWidth = 5;
//definindo a linha em si
ctx.stroke();

//Criando um retângulo
let tela2 = document.getElementById("tela2");
let ctx2 = tela2.getContext("2d");

//ele só setta a posição e a largura e altura
ctx2.rect(10, 10, 100, 100);
//definindo o preenchimento do retângulo
ctx2.fillStyle = "blue";
//definindo a posição e a largura e altura e colocando o preenchimento
//ctx2.fillRect(10, 10, 100, 200)
//ctx2.fillRect(x, y, largura, altura)
ctx2.fill();
//serve para limpar um área definida no canvas
ctx2.clearRect(20, 20, 30, 30);
