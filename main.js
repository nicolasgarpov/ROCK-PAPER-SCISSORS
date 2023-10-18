const computerElement = document.getElementById('computer-choice');
const playerElement = document.getElementById('user-choice');
const resultElement = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

let computerWins = 0;
let playerWins = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  playerElement.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  playRound();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = '  Rock 🪨';
  } else if (randomNumber === 2) {
    computerChoice = '  Paper 📃';
  } else if (randomNumber === 3) {
    computerChoice = '  Swords ⚔️';
  }
  computerElement.innerHTML = computerChoice;
}

function getResult() {
  const formattedUserChoice = userChoice.trim(); // Eliminar espacios alrededor del userChoice
  const formattedComputerChoice = computerChoice.trim(); // Eliminar espacios alrededor del computerChoice

  if (formattedComputerChoice === formattedUserChoice) {
    resultElement.innerHTML = '  Its a draw!';
  } else if (
    (formattedComputerChoice === 'Rock 🪨' && formattedUserChoice === 'Paper 📃') ||
    (formattedComputerChoice === 'Paper 📃' && formattedUserChoice === 'Swords ⚔️') ||
    (formattedComputerChoice === 'Swords ⚔️' && formattedUserChoice === 'Rock 🪨')
  ) {
    resultElement.innerHTML = ' Computer Wins +1 point';
    computerWins++;
  } else {
    resultElement.innerHTML = ' You Win +1 point';
    playerWins++;
  }
}


function playRound() {
  if (computerWins === 5) {
    alert(' 🖥️Computer Wins, You Lose!');
    resetGame();
  } else if (playerWins === 5) {
    alert(' 🏆You Win, You Defeat Computer!');
    resetGame();
  }
}

function resetGame() {
  computerWins = 0;
  playerWins = 0;
}

