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

function singlePlay( userInput, compInput ){
  let win = play( userInput, compInput );
   
  return win; 
}

const playButtons = Array.from( document.querySelectorAll('button') );
playButtons.forEach( playButton => playButton.addEventListener( 'click', playRound ) );

function playRound( e ){

  let computerTurn = computerPlay();
  let userTurn = e.target.id;
  let result;

  const computerTurnDiv = document.querySelector('#computerPlay');
  const singlePlayResultDiv = document.querySelector('#singlePlayResult');
  const scoreDiv = document.querySelector('#score');

  switch( play( userTurn, computerTurn ) ){
    case 0:
      result = "It's DRAW";
      break;
    case 1:
      result = "You WIN!!!";
      userScore++;
      computerPlay
      break;
    case -1:
      result = "You LOSE!!!";
      computerScore++;
      break;
  }
  
  computerTurnDiv.textContent = `Computer's move is ${computerTurn}`;
  singlePlayResultDiv.textContent = result;
  scoreDiv.textContent = `User: ${userScore}  || Computer: ${computerScore}`; 
   
  if( Math.max( computerScore, userScore ) >= 5 ){
    scoreDiv.textContent = "The winner is : " + ( userScore > computerScore ? "YOU" : "Computer" ) + ". Game will reset";
    
    userScore = 0;
    computerScore = 0;
  }

}
