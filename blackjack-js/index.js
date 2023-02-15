let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = false
let hasBlackJack = false
let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    renderGame()
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? :)"
    }
    else if (sum === 21) {
        message = "BOOM! Blackjack Babay! :D"
        hasBlackJack = true
    }
    else {
        message = "SUCK IT ! Loser XD"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards: " 

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomNumber()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
    else{
        messageEl.textContent = "PLEASE REFRESH THE PAGE TO RESTART"
        sumEl.textContent = ""
        cardsEl.textContent = "" 
    }
    
}
