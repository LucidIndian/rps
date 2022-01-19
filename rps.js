// This is where my RPS game will be built, linked in the HTML file
// all the script will be here (vs the page) so I can keep pages cleaner and have only 1 version of the RPS code to maintain

// Global Variables
let playerSelection = "Pending"; // Added a string assignment and placed in global scope work to get out of "undefined
let computerSelection = "Pending";
let playerRoundsWon = 0; // initialized to their starting score
let cpuRoundsWon = 0; // initialized to their starting score
let result = "pending"; // created a variable to be re-assigned depeding on each round's outcome.
let gameResult = "Pending"; // Added a string assignment and placed in global scope work to get out of "undefined. Article: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting - "An exception will be thrown if a variable declared with let or const is read before it is initialized."
let theWinner = "tbd"; // End game, assigned a string of the player with the highest score, or a tie


// FUNCTION A: computerPlay 
// A fxn called "computerPlay" - randomly return a string: ‘Rock’, ‘Paper’ or ‘Scissors’, called in the `game` function in each round. 
function computerPlay() {
  randomNumber = Math.random(); // doens't need `let` so it's not hoisted and randomNumber is declared and initialized before it's used.
  if (randomNumber > 0.66) { // ~top 33% of the random #s
    return "rock";
    } else if (randomNumber < 0.33) { // ~lower 33% of the random #s
    return "paper";
    } else { 
    return "scissors"; // ~middle 33% of the random #s
  }
} //end of the computerPlay fxn


// FUNCTION D: addScore 
function addScore() {  // helper function: add +1 to the winner after each round
  if (gameResult == "The computer wins!") {
    cpuRoundsWon = cpuRoundsWon + 1;
  } else if (gameResult == "The player wins!") {
    playerRoundsWon = playerRoundsWon + 1;
  } else {
    console.log("No points awarded");
  }
} //end of the addScore fxn


// FUNCTION C: game
// Use the previous function inside of this one to play a 5-round game that keeps score:
function game() {

  // FUNCTION B: playRound
  // Play a single round of RPS. Take 2 params "playerSelection" and "computerSelection"
  // "playerSelection" should be case insensitive & defined by `prompt()`. Syntax: result = window.prompt(message, default);
  // return a string declaring the winner of the round

  function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        // console.log("The computer wins!");
        result = "The computer wins!" // I think I have to create a variable because I'm getting "gameResult" as undefined
        return result;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        // console.log("It's a tie!");
        result = "It's a tie!";
        return result;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        // console.log("The player wins!");
        result = "The player wins!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        // console.log("The computer wins!");
         result = "The computer wins!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        // console.log("It's a tie!");
         result = "It's a tie!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        // console.log("The player wins!");
         result = "The player wins!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        // console.log("The computer wins!");
         result = "The computer wins!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        // console.log("It's a tie!");
         result = "It's a tie!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        // console.log("The player wins!");
        result = "The player wins!";
        return result;
    } else {
        // console.log("Not a valid choice!");
         result = "Not a valid choice!";
        return result;
    }
  } //end of the playRound fxn
  

  // Round 1: Run the 1-round fxn then console.log() the results 
    // trigger the playRound fxn with parameters and assign value to a variable. 
    // FYI: When parameters are excluded, it evaluates to the "else" option! (Took 30 min to troubleshoot this)
    playerSelection = prompt().toLowerCase(); // player types a new choice put this inside the fxn so it's run whenever it's
    console.log("Player selection for round 1 is "+ playerSelection);

    computerSelection = computerPlay(); // CPU chooses a new choice. The value of the computerPlay fxn is assigned to this variable 'computerSelection'
    console.log("CPU selection for round 1 is "+ computerSelection);

    gameResult = playRound(playerSelection, computerSelection); // huge win! This variable was "undefined" until I used the 'return' for the string in the upstream playRound function! Before that, it did not return anything (undefined), I was only console loggin it. BIG win. 
    console.log("Game 1's result is: " + gameResult);

    addScore();
    console.log("Round 1 score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

  // Round 2: Run the 1-round fxn, add +1 to the winner, then console.log() the results 
    playerSelection = prompt().toLowerCase(); // player types a new choice put this inside the fxn so it's run whenever it's
    console.log("Player selection for round 2 is "+ playerSelection);

    computerSelection = computerPlay(); // CPU chooses a new choice
    console.log("CPU selection for round 2 is "+ computerSelection);

    gameResult = playRound(playerSelection, computerSelection); // huge win! This variable was "undefined" until I used the 'return' for the string in the upstream playRound function! Before that, it did not return anything (undefined), I was only console loggin it. BIG win. 
    console.log("Game 2's result is: " + gameResult);

    addScore();
    console.log("Round 2 score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

    // Round 3: Run the 1-round fxn, add +1 to the winner, then console.log() the results 
    playerSelection = prompt().toLowerCase(); // player types a new choice put this inside the fxn so it's run whenever it's
    console.log("Player selection for round 3 is "+ playerSelection);

    computerSelection = computerPlay(); // CPU chooses a new choice
    console.log("CPU selection for round 3 is "+ computerSelection);

    gameResult = playRound(playerSelection, computerSelection); // huge win! This variable was "undefined" until I used the 'return' for the string in the upstream playRound function! Before that, it did not return anything (undefined), I was only console loggin it. BIG win. 
    console.log("Game 3's result is: " + gameResult);

    addScore();
    console.log("Round 3 score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

    // Round 4: Run the 1-round fxn, add +1 to the winner, then console.log() the results 
    playerSelection = prompt().toLowerCase(); // player types a new choice put this inside the fxn so it's run whenever it's
    console.log("Player selection for round 4 is "+ playerSelection);

    computerSelection = computerPlay(); // CPU chooses a new choice
    console.log("CPU selection for round 4 is "+ computerSelection);

    gameResult = playRound(playerSelection, computerSelection); // huge win! This variable was "undefined" until I used the 'return' for the string in the upstream playRound function! Before that, it did not return anything (undefined), I was only console loggin it. BIG win. 
    console.log("Game 4's result is: " + gameResult);

    addScore();
    console.log("Round 4 score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

    // Round 5: Run the 1-round fxn, add +1 to the winner, then console.log() the results
    playerSelection = prompt().toLowerCase(); // player types a new choice put this inside the fxn so it's run whenever it's
    console.log("Player selection for round 5 is "+ playerSelection);

    computerSelection = computerPlay(); // CPU chooses a new choice
    console.log("CPU selection for round 5 is "+ computerSelection);

    gameResult = playRound(playerSelection, computerSelection); // huge win! This variable was "undefined" until I used the 'return' for the string in the upstream playRound function! Before that, it did not return anything (undefined), I was only console loggin it. BIG win. 
    console.log("Game 5's result is: " + gameResult);

    addScore();
    console.log("Round 5 score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

    if (playerRoundsWon > cpuRoundsWon) {
      theWinner = "The PLayer wins";
    } else if (cpuRoundsWon > playerRoundsWon) {
      theWinner = "The CPU wins";
    } else {
      theWinner = "It's an overall tie! lol";
    }

  console.log(theWinner); // Return and console.log() the winner at the end (highest number of wins) 
  return theWinner;

} // this is the end of the game fxn
game();