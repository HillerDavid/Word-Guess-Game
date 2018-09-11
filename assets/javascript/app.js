// - Create a list of words
var wordArray = ["Pluto", "Mickey", "Minnie", "Goofy", "Donald", "Daisy"]

// - Remaining guesses from user until game over
var guessCounter = 0

// - Number of Wins and Losses
var wins = 0
var losses = 0

// - All letters already guessed by user
var lettersGuessed = []

// - Appropriate choices for user to make
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// - Store word chosen by the generator
var chosenWord = ""

// - Array for answer blanks
var answer = []

// - Game Status
var gameStarted = false

// - Display to user
var showWord = document.getElementById("display-words")
var showLetters = document.getElementById("letters")
var showGuessCounter = document.getElementById("guess-counter")
var showWins = document.getElementById("wins")
var showLosses = document.getElementById("losses")
var startKey = document.getElementById("start-key")

// # Start/Play the game!
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase()

    // - New Game
    if (gameStarted === false) {
        start()
    }
    // - Game is active
    else {

        if (gameStarted === true) {

            // - Determine if letter was already guessed
            if (alphabet.includes(userGuess)) {

                // - Tells player the letter choice was already used
                if (lettersGuessed.includes(userGuess) || lettersGuessed.includes(userGuess.toUpperCase())) {
                    alert("You already guessed " + userGuess + "! Try a different one!")
                }
                // - 
                else {
                    lettersGuessed.push(userGuess.toUpperCase())
                    showLetters.innerHTML = lettersGuessed
                    guessCounter--
                }

                for (i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === userGuess) {
                        answer[i] = userGuess
                        showWord.innerHTML = answer.join(" ")
                    }
                }

            }

            // # Lose game if out of guesses
            if (guessCounter === 0) {
                alert("GAME OVER! YOU RAN OUT OF GUESSES!")
                losses++
                startKey.innerHTML = "<style>visibility: visible</style> Press any key to play again!"
                gameStarted = false
            }
            // # Win game if all letters guessed correctly
            else if (!answer.includes("_")) {
                alert("CONGRATULATIONS! YOU WIN!")
                wins++
                startKey.innerHTML = "<style>visibility: visible</style> Press any key to play again!"
                gameStarted = false
            }
            showLosses.innerHTML = losses
            showWins.innerHTML = wins
            showGuessCounter.innerHTML = guessCounter
        }
    }
}

// - Function randomly picks word from wordArray
var wordGenerator = function () {
    word = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase()
    return word
}

var start = function () {
    gameStarted = true
    answer = []
    lettersGuessed = []
    showLetters.innerHTML = lettersGuessed
    chosenWord = wordGenerator()
    for (i = 0; i < chosenWord.length; i++) {
        answer[i] = "_"
    }
    showWord.innerHTML = answer.join(" ")
    guessCounter = 10
    showGuessCounter.innerHTML = guessCounter
    startKey.innerHTML = "<style>visiblity: hidden</style>"
}
