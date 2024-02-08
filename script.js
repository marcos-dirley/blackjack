let firstCard = 0
let secondCard = 0
let sum = firstCard + secondCard
let money = 350
let auxiliarMoneyMessage = "Nep: $"
let messageEl = document.getElementById("message-el")
let startButtonEl = document.getElementById("start-button")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let moneyEl = document.getElementById("money-count-el")
let hasBlackJack = false
let isAlive = true
let numberOfCards = 2
let isPlaying = false

function startGame() {
    if (money <= 0) {
        messageEl.textContent = "Eww! You went bankrupt! That's Game Over."
        return
    }
    
    if (isPlaying && numberOfCards < 5 && sum < 17) {
        messageEl.textContent = "You're still in the game! Try getting new cards"
        return
    }

    numberOfCards = 2
    hasBlackJack = false
    isAlive = true
    isPlaying = true

    firstCard = Math.floor(Math.random() * 10) + 2
    secondCard = Math.floor(Math.random() * 10) + 2
    sum = firstCard + secondCard

    cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard
    sumEl.textContent = "Sum: " + sum

    checkSum()
}

function getNewCard() {
    if (money <= 0) {
        messageEl.textContent = "Eww! You went bankrupt! That's Game Over."
        return
    }

    if (hasBlackJack) {
        messageEl.textContent = "You've won! Try a new game"
        return
    }

    if (!isAlive) {
        messageEl.textContent = "You've lost! Try a new game"
        return
    }

    if (!isPlaying) {
        messageEl.textContent = "You haven't started a game yet!"
        return
    }

    if (numberOfCards === 5) {
        messageEl.textContent = "Cannot draw more than 5 cards! Try a new game"
        return
    }

    if (sum >= 17) {
        messageEl.textContent = "Cannot draw with 17 points or more! Try a new game"
        return
    }

    numberOfCards++
    let newCard = Math.floor(Math.random() * 10) + 2
    cardsEl.textContent += " - " + newCard
    sum += newCard
    sumEl.textContent = "Sum: " + sum

    checkSum()
}

function checkSum() {
    if (sum === 21) {
        money += 200
        moneyEl.textContent = auxiliarMoneyMessage + money
        messageEl.textContent = "Congrats, you have a blackjack! $200 has been added to your account! Try a New Game" 
        hasBlackJack = true
    } else if (sum > 21) {
        money -= 50
        moneyEl.textContent = auxiliarMoneyMessage + money

        messageEl.textContent = "You lost! $50 has been debited from your account"
        isAlive = false
    } else {
        messageEl.textContent = "Do you wanna draw new cards?"
    }

}
