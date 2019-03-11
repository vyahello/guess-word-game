function pickRandomWordOf (words) {
    return words[
        Math.floor(Math.random() * words.length)
    ];
}


function setupAnswerArray (word) {
    var answers = [];
    for (var answerIndex = 0; answerIndex < word.length; answerIndex++) {
        answers[answerIndex] = "_";
    }
    return answers;
}


function showPlayerProgress (answerArray) {
    alert(answerArray.join(" "));
}


function getGuess () {
    return prompt("Guess a letter, or click Cancel to stop playing.");
}


function updateGameState (guess, word, answerArray, remainingLetters) {
    for (var wordIndex = 0; wordIndex < word.length; wordIndex++) {
        if (word[wordIndex] === guess.toLowerCase() && answerArray[wordIndex] === "_") {
            answerArray[wordIndex] = guess.toLowerCase();
            remainingLetters--;
        }
    }
}


function showAnswerAndCongradulatePlayer (answerArray) {
    alert(answerArray.join(" "));
    if (answerArray.join("") === word) {
        alert("Good job! The answer was " + word);
    } else {
        alert("You loose, please try again!");
    }
}


function launchHangmanGame () {
    var word = pickRandomWordOf(["javascript", "awesome", "monkey", "pancake", "hugo", "overwhelmed", "neverguessme"]);
    var answerArray = setupAnswerArray(word);
    var numberOfTries = answerArray.length;
    var remainingLetters = word.length;

    while (remainingLetters > 0 && numberOfTries > 0) {
        showPlayerProgress(answerArray);
        var guess = getGuess();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            updateGameState(guess, word, answerArray, remainingLetters)
        }
        numberOfTries--;
    }
    showAnswerAndCongradulatePlayer(answerArray);
}


launchHangmanGame();
