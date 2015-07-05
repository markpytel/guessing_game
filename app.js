/* Author: Mark Pytel
	Project: Fullstack Academy Pre-Work Assignment 1 and 2 */


var compGuess = Math.round(Math.random() * 100);
var guessCount = 0;
var guessDifference = 100;
var guessDifferenceNew = 100;
var prevGuess;
var currentGuess = document.getElementById("playerGuess");
var processGuess;
var currentGuessBut = document.getElementsByTagName("button")[0];
var newGame = document.getElementById("newGame");
var hintPlease = document.getElementById("requestHint");
var resOfGuess = document.getElementById("resultOfGuess");
var guesses = [];
var tempIceCold = document.getElementById("tempIceCold");
var tempCold = document.getElementById("tempCold");
var tempWarm = document.getElementById("tempWarm");
var tempHot = document.getElementById("tempHot");
var tempRedHot = document.getElementById("tempRedHot");
var tempOnFire = document.getElementById("tempOnFire");


// Eval Guess

var evalGuess = function() {

	processGuess = currentGuess.value;
	currentGuess.value = "";

	if (processGuess > 0 && processGuess < 101 && guesses.indexOf(processGuess) == -1 && (document.getElementsByTagName("button")[0].disabled == false))
	{
		console.log("evalGuess Function");
		console.log(processGuess);
		guessCount++;
		guesses.push(processGuess);

		if (guessCount == 5) {
			document.getElementsByTagName("button")[0].disabled = true;
		}

		guessDifferenceNew = Math.abs(compGuess - processGuess);
		if (processGuess != compGuess) {
			if (guessDifferenceNew > guessDifference) {
				resOfGuess.textContent = "You are getting colder";
				guessDifference = guessDifferenceNew;
			}
			else if (guessDifferenceNew < guessDifference) {
				resOfGuess.textContent = "You are getting hotter";
				guessDifference = guessDifferenceNew;
			}
			else {
				resOfGuess.textContent = "You are just as close as before";
				guessDifference = guessDifferenceNew;
			}
		}
		else {
			resOfGuess.textContent = "You are correct!";
			document.getElementsByTagName("button")[0].disabled = true;
		}

		if (processGuess > compGuess) {
			document.getElementById("hint"+guessCount+"").textContent = "Guess Lower";
		}
		else if (processGuess < compGuess) {
			document.getElementById("hint"+guessCount+"").textContent = "Guess Higher";
		}
		else {
			document.getElementById("hint"+guessCount+"").textContent = "Good Job!";
		}

		document.getElementById("guess"+guessCount+"").textContent = processGuess;

		var howClose = Math.abs(processGuess - compGuess);

		if (howClose == 0) {
			//document.getElementById("temp"+guessCount+"").textContent = "On Fire!"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.remove("hidden");
			tempWarm.classList.remove("hidden");
			tempHot.classList.remove("hidden");
			tempRedHot.classList.remove("hidden");
			tempOnFire.classList.remove("hidden");
		}
		else if (howClose > 50) {
			//document.getElementById("temp"+guessCount+"").textContent = "Ice Cold!"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.add("hidden");
			tempWarm.classList.add("hidden");
			tempHot.classList.add("hidden");
			tempRedHot.classList.add("hidden");
			tempOnFire.classList.add("hidden");
		}
		else if (howClose > 30) {
			//document.getElementById("temp"+guessCount+"").textContent = "Cold"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.remove("hidden");
			tempWarm.classList.add("hidden");
			tempHot.classList.add("hidden");
			tempRedHot.classList.add("hidden");
			tempOnFire.classList.add("hidden");
		}
		else if (howClose > 15) {
			//document.getElementById("temp"+guessCount+"").textContent = "Warm"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.remove("hidden");
			tempWarm.classList.remove("hidden");
			tempHot.classList.add("hidden");
			tempRedHot.classList.add("hidden");
			tempOnFire.classList.add("hidden");
		}
		else if (howClose > 5) {
			//document.getElementById("temp"+guessCount+"").textContent = "Hot!"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.remove("hidden");
			tempWarm.classList.remove("hidden");
			tempHot.classList.remove("hidden");
			tempRedHot.classList.add("hidden");
			tempOnFire.classList.add("hidden");
		}
		else {
			//document.getElementById("temp"+guessCount+"").textContent = "Red Hot!"
			tempIceCold.classList.remove("hidden");
			tempCold.classList.remove("hidden");
			tempWarm.classList.remove("hidden");
			tempHot.classList.remove("hidden");
			tempRedHot.classList.remove("hidden");
			tempOnFire.classList.add("hidden");
		}
	}

	else if (guesses.indexOf(processGuess) > -1) {
		resOfGuess.textContent = "You already guessed this number.";
	}

	else if (document.getElementsByTagName("button")[0].disabled == true) {

		if (guessCount == 5) {
			resOfGuess.textContent = "You used all your guesses, click Reset Game to play again!";
		}
		else {
			resOfGuess.textContent = "You already won, click Reset Game to play again!";
		}
	}

	else {
		resOfGuess.textContent = "Your guess must be between 1-100.";
	}
} 

var clearGuessField = function () {
	currentGuess.value = "";
}


// Reset Game

var resetGame = function() {
	console.log("resetGame Function");
	window.location.reload();


}


// Give a Hint

var giveHint = function () {
	console.log("giveHint Function");
	resOfGuess.textContent = compGuess;


}

currentGuess.onclick = clearGuessField;
currentGuessBut.onclick = evalGuess;
hintPlease.onclick = giveHint;
newGame.onclick = resetGame;
