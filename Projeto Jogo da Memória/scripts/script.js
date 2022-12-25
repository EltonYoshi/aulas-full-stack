const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";


startGame();

/*Função para iniciar o jogo */
function startGame(){
    initializeCards(game.createCardsFromTechs());
}
function initializeCards(cardsCompleted){
    gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    game.cardsCompleted.forEach(card =>{
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })

    console.log(gameBoard)
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face == FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src ="./assets/images/" + card.icon + ".png";
        /*Lembrando que o appendChild é para colocar um elemento como filho do outro, no caso ele está tornando o iconELement (img) filho de CardElementFace(div) */
        cardElementFace.appendChild(iconElement);
    }else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}

function flipCard(){
    if(game.setCard(this.id)){
            /*Como a função flicard está dentro do addEventListener de cardElement, então pode se dizer que o seu this será o próprio cardElement, ou seja, da para adicionar um class nele dessa forma */
        this.classList.add('flip')
        // se tiver second card
        if(game.secondCard){
            if(game.checkMatch()){
                game.clearCards();
                if(game.checkGameOver()){
                    let gameOverLayer = document.getElementById('gameOver');
                    gameOverLayer.style.display = 'flex';
                }
            }else{
                setTimeout(()=>{
                    let firstCardView = document.getElementById(game.firstCard.id);
                
                    let secondCardView = document.getElementById(game.secondCard.id);
        
                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unflipCards();
                }, 1000)
                
            }
        }
       
    }

}

function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none';

}