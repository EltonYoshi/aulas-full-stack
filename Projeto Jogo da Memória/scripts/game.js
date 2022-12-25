let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,
    
    techs : [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    setCard: function(id){
        let card = this.cardsCompleted.filter(card => card.id === id)[0];
        console.log(card);
        //se a carta estiver flipada ou lockmode falso
        if (card.flipped || this.lockMode){
            return false;
        }

        //se for nulo
        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;

            return true;

        }else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
        
    },
    checkMatch: function(){
        //se não tiver virada first ou second card retorna false, pois as duas tem que estar true, ou seja virada
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon


    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards: function(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver: function(){
        return this.cardsCompleted.filter(card => !card.flipped).length == 0;
    },

    cardsCompleted: null,

        /*Criador de cartas do tabuleiro */
    createCardsFromTechs:function (){
        this.cardsCompleted = [];
        this.techs.forEach((tech) =>{
            /*Multiplicador de cartas */
            this.cardsCompleted.push(this.createPairFromTech(tech));
        })
        /*Perceba que para cada array, há 2 objetos de mesmo tech */
        console.log(this.cardsCompleted);

        /*Contudo não é isso que a gente quer,  nós queremos um array que englobe as 20 cartas e não 10 pares de cartas */
        /*Então usa-se o flatMap para desmembrar todos esses arrays, visto que quando se em um array dentro de um array no flatMap, ele desmembra ele, enquanto o map normal não faz isso */
        console.log(this.cardsCompleted.flatMap(pair => pair));

        this.cardsCompleted = this.cardsCompleted.flatMap(pair => pair);
        this.shuffleCards();
        
    },


    /*Para cada tech de techs, ele vai ser inserido dentro de cards, e tech será multiplicado, tendo 2 objetos  */
    createPairFromTech: function(tech){
        return [ {
            /*Essa função cria um id aleatório para o tech */
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        },
        {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },

    createIdWithTech: function (tech){
        return tech + parseInt(Math.random() * 1000)
    },

    /*Função para embaralhar as cartas */
    shuffleCards: function (cardsCompleted){

        let currentIndex = this.cardsCompleted.length;
        let randomIndex = 0;

        while (currentIndex !== 0){
            /*Aqui ele está criando um valor randômico */
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            /*Aqui ele está invertendo os valores, sendo que aqueles que tem um currentIndex de por exemplo, 19, vão receber um valor aleatório */
            [this.cardsCompleted[randomIndex], this.cardsCompleted[currentIndex]] = [this.cardsCompleted[currentIndex], this.cardsCompleted[randomIndex]]
        }
    }
    
}