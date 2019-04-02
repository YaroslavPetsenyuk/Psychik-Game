var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var ranNumber = Math.floor(Math.random() * letter.length);
    console.log(letter[ranNumber]);

    var userChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    if (userChoice.indexOf(userGuess) > -1) {

        if (userGuess === letter[ranNumber]) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = []
        }

        if (userGuess != letter[ranNumber]) {
            guessesLeft--;
            guessesSoFar.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 10;
            guessesSoFar = [];
            losses++;
        }
        var html =
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + guessesSoFar.join(", ") + "</p>";
        document.querySelector(".container").innerHTML = html;
    }
};