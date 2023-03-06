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

const players = {
  player1: "player1",
  player2: "player2",
};

const playersSelection = {
  player1: choicesEnum.papper,
  player2: choicesEnum.papper,
};

// returns a random element in choices variable
function getComputerChoice() {
  return choicesEnum.getRandomChoice();
}

//get players
const player1DOM = document.getElementById("player1");
const player2DOM = document.getElementById("player2");

//set player1 selection buttons
const player1Buttons = player1DOM.getElementsByClassName("selection-item");

//set player2 selection buttons
const player2Buttons = player2DOM.getElementsByClassName("selection-item");

//set Players Name
players.player1 = getPlayerName(player1DOM);
players.player2 = getPlayerName(player2DOM);

//set

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
    winner = players.player1;
  } else {
    winner = players.player2;
  }
  return winner;
}

//updates player1Score and player2Score
function updateScore(winner) {
  if (winner == players.player1) {
    player1Score++;
  } else if (winner == players.player2) {
    player2Score++;
  }
}

//Return the players name in string
function getPlayerName(dom) {
  return dom.getElementsByClassName("player-name")[0].getInnerHTML();
}

function showPlayerSelection(buttons, selected) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selection-item-selected");
  }

  if (selected == choicesEnum.rock) {
    buttons[0].classList.add("selection-item-selected");
  } else if (selected == choicesEnum.papper) {
    buttons[1].classList.add("selection-item-selected");
  } else if (selected == choicesEnum.scissors) {
    buttons[2].classList.add("selection-item-selected");
  }
}

function enablePlayerButtons(buttons){
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("selection-item-en");
  }
}