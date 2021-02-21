const cards = document.querySelectorAll('.memoryCard');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let numberOfAttempts = 0;
let music;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    music = new sound('sound.mp3');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        music.play();
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
        numberOfAttempts++;
        document.getElementById('counting').innerText = 'Number of attempts: ' + numberOfAttempts;
        music.stop();
        music.play();
    }
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null];
}

//immediately invoked
(function shuffle(){        
    cards.forEach(card =>{
        let randomPos = parseInt(Math.random() * 12);
        card.style.order = randomPos;
    });
}) ();

function shuffleRestart(){     
    cards.forEach(card =>{
        let randomPos = parseInt(Math.random() * 12);
        card.style.order = randomPos;
    });   
};

cards.forEach(cards => cards.addEventListener('click', flipCard));

function Restart(){
    hasFlippedCard = false;
    lockBoard = false;
    numberOfAttempts = 0;
    cards.forEach(cards => {
        cards.classList.remove('flip');        
    }); 
    cards.forEach(cards => cards.addEventListener('click', flipCard));
    document.getElementById('counting').innerText = 'Number of attempts: ' + numberOfAttempts; 
    
    setTimeout(() => {
        shuffleRestart();  
    }, 1000); 
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}