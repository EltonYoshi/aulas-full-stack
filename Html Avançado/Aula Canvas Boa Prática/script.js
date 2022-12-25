let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");
//ele define onde o começa as definições de uma linha
ctx.beginPath();

ctx.moveTo(10, 10);
ctx.lineTo(250, 250)
//teste com 2 lineTo
//ctx.lineTo(500,300)
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

//ele está definindo agora o da outra linha
ctx.beginPath()

ctx.moveTo(0, 0);
ctx.lineTo(250, 350)
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();

ctx.moveTo(0, 0);
ctx.lineTo(500, 300);
ctx.lineTo(400, 300);
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.lineWidth = 2;
//ele fecha o caminho feito pelo lineTo que começou com o beginPath, logo, eu posso preencher a figura
ctx.fill();
ctx.closePath();
ctx.stroke();

//Definir um circulo
let tela2 = document.getElementById("tela2");
let ctx2 = tela2.getContext("2d");

let x =250;
let y = 250;
let raio = 100;
/*O valor do inicio e do final estão em radianos
começando então em 0 e indo até o 2 radianos vezes PI
que completa um circulo*/
let inicio = 0;
//se 2 radianos vezes PI é o total então metade é 1
let final = 2 * Math.PI;

ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.strokeStyle = "red";
ctx2.arc(x, y, raio, inicio, final);
ctx2.fill();
ctx2.stroke();

//Animando um Circulo
let tela3 = document.getElementById("tela3");
let ctx3 = tela3.getContext("2d");

let circle = {
    x : 250,
    y :250,
    raio : 100,
    inicio : 0,
    final : 0,
    //antiHorario: true
}
function drawCircle(c){
    /*Se você criar o retângulo de fundo junto da função de criar o circulo, o mesmo não bugará ao
    animar a sua posição */
    ctx3.beginPath();
    ctx3.rect(0, 0,  500, 500);
    ctx3.fillStyle = "beige";
    ctx3.fill();
    
    ctx3.beginPath();
    ctx3.fillStyle = "blue";
    ctx3.strokeStyle = "red";
    ctx3.arc(c.x, c.y, c.raio, c.inicio, c.final, c.antiHorario);
    ctx3.fill();
    ctx3.stroke();
}
setInterval(function(){
    if(circle.final < 2*Math.PI){
        circle.final += 0.5;
        circle.x += 2;
    }
    drawCircle(circle);

}, 50);



