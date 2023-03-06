alert("Play a game");

//Get Number of Rounds
while (true) {
  let x = prompt("Enter the number of games: ");
  gameCount = Number(x);
  if (isNaN(gameCount)) {
    alert("Invalid Input");
    continue;
  } else {
    break;
  }
}

//Play a Game
for (let i = 1; i <= gameCount; i++) {
  let player1Choice, roundWinner;
  while (true) {
    player1Choice = prompt(
      `Round ${i} ` + "Rock, Papper, or Scissors. Pick One: "
    ).toLowerCase();
    if (choicesEnum.doesContains(player1Choice)) {
      break;
    } else {
      alert("Invalid Choice");
      continue;
    }
  }

  roundWinner = playOneRockPaperScissorGame(
    player1 = player1Choice,
    player2 = getComputerChoice())
    .toLowerCase();

  if (roundWinner == "player1") {
    alert("Player 1 Wins Round " + i);
    updateScore(roundWinner);
  } else if (roundWinner == "player2") {
    alert("Computer Wins Round " + i);
    updateScore(roundWinner);
  } else {
    alert("Tie");
  }
}

if (player1Score > player2Score) {
  alert("Player 1 Wins");
} else if (player1Score < player2Score) {
  alert("Computer Wins");
} else {
  alert("It's a tie");
}