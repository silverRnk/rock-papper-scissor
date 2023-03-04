let gameCount, player1Score, player2Score;
player1Score = 0;
player2Score = 0;
const choices = ['rock', 'papper', 'scissors'];

const choicesEnum = {
    rock: 'rock',
    papper: 'papper',
    scissors: 'scissors'
}



// returns a random element in choices variable
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

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
function playOneRockPaperScissorGame(player1, player2){
    let winner = '';
    if(player1 == player2){

        winner = 'tie';
    }else if(
        ((player1 == choicesEnum.papper) && (player2 == choicesEnum.rock)) ||
        ((player1 == choicesEnum.scissors) && (player2 == choicesEnum.papper)) ||
        ((player1 == choicesEnum.rock) && (player2 == choicesEnum.scissors))){
        winner = 'player1'
    }else{
        winner = 'player2'
    }

    return winner;
}

alert('Play a game');

while(true){
   let x = prompt("Enter the number of games: ");
   gameCount = Number(x);
   if (isNaN(gameCount)) {
        alert('Invalid Input');
        continue;
   }else{
    break;
   }
    
}


for(let i=0; i<gameCount; i++){
    let player1Choice, roundWinner;
    while(true){
        player1Choice = prompt(`Round ${i} `+'Rock, Papper, or Scissors. Pick One: ').toLowerCase();
        if(choices.includes(player1Choice)){
            break;
        }else{
            alert('Invalid Choice');
            continue;
        }
    }

    roundWinner = playOneRockPaperScissorGame(
        player1=player1Choice,
        player2=getComputerChoice()).toLowerCase();

    if(roundWinner == 'player1'){
        alert("Player 1 Wins Round " + i);
        player1Score++;
    }else if(roundWinner == 'player2'){
        alert("Player 2 Wins Round " + i);
        player2Score++;
    }else {
        alert("Tie");
    }
    
}

if(player1Score>player2Score){
    alert('Player 1 Wins');
}else if(player1Score<player2Score){
    alert('Player 2 Wins');
}else {
    alert('It\'s a tie');
}









