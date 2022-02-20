// README: This is where my RPS game will be built, linked in the index.html file of this same folder
// All the script will be here (vs the page) so I can keep pages cleaner & have 1 version of the code to maintain

// Global Variables:
let playerSelection = "Pending"; // Added a string assignment and placed in global scope work to get out of "undefined
let computerSelection = "Pending";
let playerRoundsWon = 0; // initialized to their starting score
let cpuRoundsWon = 0; // initialized to their starting score
let result = "pending"; // created a variable to be re-assigned depeding on each round's outcome.
let gameResult = "Pending"; // Added a string assignment and placed in global scope work to get out of "undefined. Article: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting - "An exception will be thrown if a variable declared with let or const is read before it is initialized."
let overallWinner = "tbd"; // End game, assigned a string of the player with the highest score, or a tie

// Event Listner for all the buttons:
// Create an array from the nodelist of buttons on the HTML page:
const buttons = Array.from(document.querySelectorAll('.button')); 
// Add the E.L. to each button so we know when each is clicked:
buttons.forEach(button => button.addEventListener('click', playerPick));

// FUNCTION: PlayerPick
// Called by the Event Listener to assign a new Player pick. 
function playerPick(e) {
  playerSelection = e.target.id; // this grabs the HTML ID of the button ("rock", "paper", or "scissors"), aka, the players choice, and assigns it to the playerSelection variable.
  // "Add a div for displaying results (Did that on the .html) + change all console.logs into DOM methods.":
  const container1 = document.querySelector('#rpsResults'); // selects the target element of the DOM (where we want to manipulate)
  const resultsText = document.createElement('p'); // creates the p element in memory
  resultsText.textContent =  "The player selects " + playerSelection; // adds text to the p element in memory
  resultsText.style.color = 'blue'; // styles text to the p element in memory
  rpsResults.appendChild(resultsText); // adds the p element to the DOM (prints the playerSelection)
  computerSelection = computerPlay(); // Next, we ask the CPU to make a new choice. The value of the computerPlay fxn is assigned to this variable 'computerSelection'
  const container2 = document.querySelector('#rpsResults'); // selects the target element of the DOM (where we want to print the CPU selection)
  const resultsText2 = document.createElement('p'); // creates the p element in memory
  resultsText2.textContent =  "The CPU selects " + computerSelection; // adds text to the p element in memory
  resultsText2.style.color = 'yellow'; // styles text to the p element in memory
  rpsResults.appendChild(resultsText2); // adds the p element to the DOM (prints the playerSelection)
  // trigger the playRound fxn with parameters and assign value to a variable. 
  // FYI: When parameters are excluded, it evaluates to the "else" option! (Took 30 min to troubleshoot this)  
  gameResult = playRound(playerSelection, computerSelection); // play a round with the new selections, need to include the parameters, otherwise it uses the initial values.
  addScore();  // after we have the result, we tally the score
} // end of the playerPick fxn

// FUNCTION: computerPlay 
// Called by the playRound function to assign a new CPU guess. 
// It randomly return string: ‘Rock’, ‘Paper’ or ‘Scissors’, called in the `game` function in each round. 
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


// FUNCTION: playRound
  // Play a single round of RPS. Take 2 params "playerSelection" and "computerSelection"
  // "playerSelection" should be from the button.
  // return a string declaring the winner of the round

  function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("The computer wins!");
        result = "The computer wins!" // I think I have to create a variable because I'm getting "gameResult" as undefined
        return result;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It's a tie!");
        result = "It's a tie!";
        return result;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("The player wins!");
        result = "The player wins!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("The computer wins!");
        result = "The computer wins!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie!");
        result = "It's a tie!";
        return result;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("The player wins!");
        result = "The player wins!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("The computer wins!");
        result = "The computer wins!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie!");
        result = "It's a tie!";
        return result;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("The player wins!");
        result = "The player wins!";
        return result;
    } else {
        console.log("Not a valid choice!");
        result = "Not a valid choice!";
        return result;
    }
} //end of the playRound fxn
  

// FUNCTION: addScore 
function addScore() {  // helper function: add +1 to the winner after each round
  if (gameResult == "The computer wins!") {
    cpuRoundsWon = cpuRoundsWon + 1;
  } else if (gameResult == "The player wins!") {
    playerRoundsWon = playerRoundsWon + 1;
  } else {
    console.log("No points awarded");
  }
  console.log("Round score: Player: "+ playerRoundsWon + ", " + "CPU: "+cpuRoundsWon); // moved this inside the bracket and now it returns the updated score and not the initial values of 0.

  // Display the running score
  const container3 = document.querySelector('#rpsResults'); // selects the target element of the DOM (where we want to manipulate)
  const resultsText3 = document.createElement('p'); // creates the p element in memory
  resultsText3.textContent =  "Round result: " + gameResult + " Player points: "+ playerRoundsWon + ", " + "CPU points: "+cpuRoundsWon; // adds text to the p element in memory
  resultsText3.style.color = 'green'; // styles text to the p element in memory
  resultsText3.style.fontSize = "small"; // styles text to the p element in memory
  rpsResults.appendChild(resultsText3); // adds the p element to the DOM (prints the playerSelection)
  finalWinner() // checks for a final winner
} //end of the addScore fxn


// Announce an "overallWinner" of the game once one player reaches 5 points.

function finalWinner() {
  
  if (cpuRoundsWon > 4) {
    console.log("Game over");
    overallWinner = "The CPU wins the game!";
  } else if (playerRoundsWon > 4) {
    console.log("Game over");
    overallWinner = "The Player wins the game!";
  } else {
  console.log("continue");
  }

  if (overallWinner == "The CPU wins the game!" || overallWinner == "The Player wins the game!") {
    const container4 = document.querySelector('#winner'); // selects the target element of the DOM (where we want to manipulate)
    const resultsText4 = document.createElement('h2'); // creates the h2 element in memory
    resultsText4.textContent = "GAME OVER..." + overallWinner; // adds text to the p element in memory
    resultsText4.style.color = 'pink'; // styles text to the p element in memory
    winner.appendChild(resultsText4); // adds the p element to the DOM (prints the playerSelection)
  } else {
    // do nothing
  };

} // finalWinner fxn end

