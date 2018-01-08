function computerPlay(){
  let play_num = Math.floor( Math.random() * 3 );
  
  let turn;

  switch( play_num ){
    case 0:
      turn = "rock";
      break;
    case 1:
      turn = "scissor";
      break;
    case 2:
      turn = "paper";
      break;
  }

  return turn;      
}

function play( playerselection, computerselection ){
  playerselection = playerselection.toLowerCase();
  let playerWin;

  if(playerselection === computerselection){
    playerWin = 0;
  }else if( playerselection === "rock" && computerselection === "paper" ){
    playerWin = -1;
  }else if( playerselection === "rock" && computerselection === "scissor" ){
    playerWin = 1;
  }else if( playerselection === "paper" && computerselection === "scissor" ){
    playerWin = -1;
  }else if( playerselection === "paper" && computerselection === "rock" ){
    playerWin = 1;
  }else if( playerselection === "scissor" && computerselection === "rock" ){
    playerWin = -1;
  }else if( playerselection === "scissor" && computerselection === "paper" ){
    playerWin = 1;
  }

  return playerWin; 
}

var computerScore = 0;
var userScore = 0;
function singlePlay(){
  let userInput = prompt("Type your turn");
  let compInput = computerPlay();
  let win = play( userInput, compInput );
  
  console.log( `Computer: ${compInput} || You: ${userInput}` )
  switch( win ){
    case 0:
      console.log("DRAW");
      break;
    case 1:
      console.log("YOU WIN!!!");
      userScore++;
      break;
    case -1:
      console.log("YOU LOSE!!!");
      computerScore++;
      break;
  }
}
for( i = 0; i <= 4; i++)
  singlePlay();

console.log(`COMPUTER: ${computerScore}`);
console.log(`YOU: ${userScore}`);
