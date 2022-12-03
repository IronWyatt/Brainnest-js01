// Rock Paper Scissor Game

//declared list with rock, paper & scissors
const rps = ['rock', 'paper', 'scissors'];
let pVic = 0;
let cVic = 0;

//function that choose random item for computer and return it
function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

//const to try playround fucntion
const pSelectionTwo = 'paper';
const cSelectionTwo = computerPlay();

//Playround function
function playRound(pSelection, cSelection) {
  let cleanPSelection = pSelection.toLowerCase().trim();
  let pWin = 'You win!';
  let cWins = 'The machine wins!';
  let draw = 'Draw!';
  if (rps.includes(cleanPSelection) == true) {
    if (cleanPSelection == cSelection) {
      console.log(draw);
      return draw;
    } else if (cleanPSelection == 'rock' && cSelection == 'scissors') {
      console.log(pWin);
      ++pVic;
      return pWin;
    } else if (cleanPSelection == 'rock' && cSelection == 'paper') {
      console.log(cWins);
      ++cVic;
      return cWins;
    } else if (cleanPSelection == 'paper' && cSelection == 'scissors') {
      console.log(cWins);
      ++cVic;
      return cWins;
    } else if (cleanPSelection == 'paper' && cSelection == 'rock') {
      console.log(pWin);
      ++pVic;
      return pWin;
    } else if (cleanPSelection == 'scissors' && cSelection == 'rock') {
      console.log(cWins);
      ++cVic;
      return cWins;
    } else if (cleanPSelection == 'scissors' && cSelection == 'paper') {
      console.log(pWin);
      ++pVic;
      return pWin;
    }
  } else {
    let errorMsg = 'Please choose between Rock, Paper or Scissor <3';
    console.log(errorMsg);
    return errorMsg;
  }
}

function game(nRounds) {
  for (let i = 0; i < nRounds; i++) {
    let browserUserSelec = prompt(
      'Choose between Rock, Paper & Scissors please'
    );
    playRound(browserUserSelec, computerPlay());
  }
  console.log(
    `End of the game the score after ${nRounds} rounds, the score is ${pVic} for you and ${cVic} for the machine`
  );
}

let browserRounds = prompt('How many rounds would you like to play?');
game(parseInt(browserRounds));
