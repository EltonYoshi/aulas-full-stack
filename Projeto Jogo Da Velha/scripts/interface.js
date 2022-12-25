document.addEventListener('DOMContentLoaded', ()=>{
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    //target mostrar em qual quadrado o evento doi clicado
    //console.log(event.target);

    let squareClicked = event.target;
    let position = squareClicked.id;
    console.log(position)

    /*Essa função é para localizar no tabuleiro */
    let gameOver = handleMove(position);

    /*Essa função é para colocar os símbolos no html */
    updateSquare(position);
    
    //Esse if significa: se o gameOver é verdadeiro, então..
    if(gameOver){
        setTimeout(()=>{
            alert("Acabou");
        },100)
        
    }
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>` 
}

