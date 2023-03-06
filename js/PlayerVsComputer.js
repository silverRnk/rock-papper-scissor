const winnerDisplay = document.getElementById("game-announcement");

const player1ScoreDisplay = document.getElementById("player1Score");

const player2ScoreDisplay = document.getElementById("player2Score");

function updateScoreDisplay(winner) {
  updateScore(winner);
  player1ScoreDisplay.innerHTML = `${player1Score}`;
  player2ScoreDisplay.innerHTML = `${player2Score}`;
}

//enable player1 Button
enablePlayerButtons(player1Buttons);

//listen to Player 1 Selection
//rock button
player1Buttons[0].addEventListener("click", () => {
  playersSelection.player1 = choicesEnum.rock;
  playGame();
});
player1Buttons[1].addEventListener("click", () => {
  playersSelection.player1 = choicesEnum.papper;
  playGame();
});
player1Buttons[2].addEventListener("click", () => {
  playersSelection.player1 = choicesEnum.scissors;
  playGame();
});

//play a game
function playGame() {
  let roundWinner;
  playersSelection.player2 = getComputerChoice();

  showPlayerSelection(player1Buttons, playersSelection.player1);

  showPlayerSelection(player2Buttons, playersSelection.player2);

  //Play a game
  roundWinner = playOneRockPaperScissorGame(
    playersSelection.player1,
    playersSelection.player2
  );

  //Display the Winner
  if (roundWinner.toLowerCase() != "tie") {
    updateScoreDisplay(roundWinner);
    winnerDisplay.style.visibility = "visible";
    winnerDisplay.innerHTML = roundWinner + " Wins";
  } else {
    winnerDisplay.style.visibility = "visible";
    winnerDisplay.innerHTML = "It' a Tie";
  }
}
