function listOfWords () {
    return [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "hugo",
        "overwhelmed",
        "neverguessme"
    ];
}


function randomOf(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ]
}


function lengthOf (element) {
    return element.length
}


function fillAnswersOf (element) {
    var array = [];
    for (var answer_index = 0; answer_index < element.length; answer_index++) {
        array[answer_index] = "_";
    }
    return array;
}


function launchGame (targetWord) {
    var answerArray = fillAnswersOf(targetWord);
    var numberOfTries = lengthOf(answerArray);
    var remainingLetters = lengthOf(targetWord);
    
    while (remainingLetters > 0 && numberOfTries > 0) {
        alert(answerArray.join(" "));

        var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            for (var word_index = 0; word_index < targetWord.length; word_index++) {
                if (targetWord[word_index] === guess && answerArray[word_index] === "_") {
                    answerArray[word_index] = guess;
                    remainingLetters--;
                }
            }
        }
        numberOfTries--;
    }

    alert(answerArray.join(" "));
    if (answerArray.join("") === targetWord) {
        alert("Good job! The answer was " + targetWord);
    } else {
        alert("You loose, please try again!");
    }    
}


launchGame(randomOf(listOfWords()));
