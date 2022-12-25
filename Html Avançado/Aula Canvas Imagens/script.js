let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

//com a tag image do html
//let img = document.getElementById("yoshi");

//Só com o JavaScript, pode tirar a tag o html
let img = new Image();
img.src = "https://upload.wikimedia.org/wikipedia/pt/4/48/Yoshi.png";
img.onload = desenharImg;

function desenharImg(){
    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this. / 2);
}
