let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
}

updateScoreElement()
/*
if (!score) {
score = {
  wins : 0,
  losses : 0,
  ties : 0
}
}
*/
console.log(JSON.parse(localStorage.getItem('score')))

function playgame(playerMove) {
const computerMove = pickComputerMove() 
let result = ''; 

if (playerMove === 'scissors') {  
  if (computerMove === 'rock') {
    result = 'You lose.'
  } else if (computerMove === 'paper') {
    result = 'You win!'
  } else if (computerMove === 'scissors') {
    result = 'Tie.'
  }

} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win!'
  } else if (computerMove === 'paper') {
    result = 'Tie.'
  } else if (computerMove === 'scissors') {
    result = 'You lose.'
  }

} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.'
  } else if (computerMove === 'paper') {
    result = 'You lose.'
  } else if (computerMove === 'scissors') {
    result = 'You win!'
  }
}

//(NEW STEP ADDED BELOW) 
if (result === 'You win!') {
  score.wins += 1;
} else if (result === 'You lose.') {
  score.losses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result
document.querySelector('.js-moves').innerHTML = `You
<img src="rock-paper-scissors-assets/${playerMove}-emoji.png" alt="${playerMove}" class="emojis">
<img src="rock-paper-scissors-assets/${computerMove}-emoji.png" alt="${computerMove}" class="emojis">
Computer`


}
// (NEW STEP ADDED ABOVE)

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
 computerMove = 'rock'
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
 computerMove = 'paper'
} else if (randomNumber >= 2/3 && randomNumber < 1) {
 computerMove = 'scissors'
}     

return computerMove;
}

// Algorithm 1. Computer randomly selection a move, 2. Compare to get result, 3. Update a score (NEW STEP ADDED), 4. Display result and score in a popup