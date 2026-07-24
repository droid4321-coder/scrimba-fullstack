let firstCard = getRandomCard()
//console.log(firstCard);

let secondCard = getRandomCard()
//console.log(secondCard);

let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
//console.log(sum);

let hasBlackJack = false;
let isAlive = true;

let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("card-el");

function getRandomCard() {
    return Math.floor(Math.random() * (11 - 2 + 1)) + 2;
}

function startGame() {
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent =`Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Woohoo, you got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    console.log(message);
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck.");

    let card = getRandomCard()

    sum += card

    cards.push(card);
    console.log(cards);
    renderGame();
}