//inciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winPossibility = [
    //possibilidade de ganhar na horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //possibilidade de ganhar na vetical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //possibilidade de ganhar na diagonal
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position){
    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime]
    }
    console.log(board)


    gameOver = isWin();

    //?Se playerTime for igual a 0, então a variável playerTime será trocada para 1, senão: será 0
    playerTime = (playerTime == 0) ? 1 : 0;

    /*if(gameOver == false){
        if(playerTime == 0){
            playerTime  = 1;
        }else{
            playerTime = 0;
        }
    }*/


    return gameOver;
}

function isWin(){


    for(let i = 0; i < winPossibility.length; i++){
        let seq = winPossibility[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true;
        }
    }

    return false;
}