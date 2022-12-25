function h1Click(){
    console.log("Executando a função");
}

function changeH1(input){
    /*Tendo em vista que o this dentro do HTML é a própria
    tag, então não precisamos gettar ele, basta criar um
    parâmetro dentro da função com this
    */
    //let input = document.getElementById("texto");
    let h1 = document.getElementsByTagName("h1")[2];
    h1.innerHTML = input.value;
}

function hideH1(){
    let h1Escondido = document.getElementById("escondido");
    h1Escondido.style.display = "none";
}