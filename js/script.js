let gameCount, player1Score, player2Score;
player1Score = 0;
player2Score = 0;

const choicesEnum = {
  rock: "rock",
  papper: "papper",
  scissors: "scissors",
  //returns a either rock paper or scissors
  getRandomChoice() {
    const item = ["rock", "papper", "scissors"];
    return item[Math.floor(Math.random() * item.length)];
  },
  // returns true if choice is an element of the choices
  doesContains(choice) {
    const item = ["rock", "papper", "scissors"];
    return item.includes(choice);
  },
};

// returns a random element in choices variable
function getComputerChoice() {
  return choicesEnum.getRandomChoice();
}

const players = {
  player1: "player1",
  player2: "player2"
}

const player1 =

/*
+----------+-------------------------------------------+
|          |                  Player 1                 |
+----------+----------+----------+----------+----------+
| Player 2 |          | Rock     | Papper   | Scissors |
|          +----------+----------+----------+----------+
|          | Rock     | Tie      | Player 1 | Player 2 |
|          +----------+----------+----------+----------+
|          | Papper   | Player 2 | Tie      | Player 1 |
|          +----------+----------+----------+----------+
|          | Scissors | Player 1 | Player 2 | Tie      |
+----------+----------+----------+----------+----------+

*/

// if Player 1 win return 'player1' else if Player2 wins 'player2' else tie
function playOneRockPaperScissorGame(player1, player2) {
  let winner = "";
  if (player1 == player2) {
    winner = "tie";
  } else if (
    (player1 == choicesEnum.papper && player2 == choicesEnum.rock) ||
    (player1 == choicesEnum.scissors && player2 == choicesEnum.papper) ||
    (player1 == choicesEnum.rock && player2 == choicesEnum.scissors)
  ) {
    winner = "player1";
  } else {
    winner = "player2";
  }
  return winner;
}

//updates player1Score and player2Score
function updateScore(winner) {
  if (winner == "player1") {
    player1Score++;
  } else if (winner == "player2") {
    player2Score++;
  }
}


