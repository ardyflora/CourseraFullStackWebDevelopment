var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"]
var user_guess_input;
var guess_input;
var finished = false;
var countGuess = 0;
var bgColor;

function do_game() {
    guess_input = Math.floor(Math.random() * colors.length + 1);
    console.log("Guess color is: ", colors[guess_input - 1]);
    while (!finished) {
        user_guess_input = prompt("I am thinking of one of these colours: \n\n" +
            "blue, cyan, gold, gray, green, magenta, orange, red, white, yellow \n\n" +
            "What colour am I thinking of?");

        countGuess += 1;
        finished = check_user_guess_input();
        if (finished) {
            console.log("guess_input: ", colors[guess_input - 1]);
            document.body.style.backgroundColor = colors[guess_input - 1];

            alert("Congratulations, You have guessed the colour! \n\n" +
                "It took you " + countGuess + " guesses to finish the game! \n\n" +
                "You can see the color in the background ");
        }
    }
}


function check_user_guess_input() {
    if ((colors.indexOf(colors[guess_input - 1])) > (colors.indexOf(user_guess_input))) {

        alert("WARN: Wrong selection \n\n" +
            "HINT: Your colour is alphabetically smaller than mine \n\n" +
            "Please select one of the following: \n" +
            "blue, cyan, gold, gray, green, magenta, orange, red, white, yellow"
        );
        return false;

    }
    if ((colors.indexOf(colors[guess_input - 1])) < (colors.indexOf(user_guess_input))) {
        alert("WARN: Wrong selection \n\n" +
            "HINT: Your colour is alphabetically Higher than mine \n\n" +
            "Please select one of the following: \n" +
            "blue, cyan, gold, gray, green, magenta, orange, red, white, yellow"
        );
        return false;
    } else {
        return true;

    }
}
