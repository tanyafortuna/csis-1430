var names = ["", "", "Ties"];   // p1, p2, ties
var wins = [0, 0, 0];           // p1, p2, ties
var totals = [0, 0];            // p1, p2
var whoseTurn;                  // 0 = p1, 1 = p2
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];

function setPlayers() {
  names[0] = document.getElementById('p1').value;
  names[1] = document.getElementById('p2').value;

  document.getElementById('p1-name').innerHTML = '<p>' + names[0] + '</p>';
  document.getElementById('p2-name').innerHTML = '<p>' + names[1] + '</p>';
  document.getElementById('tie-name').innerHTML = '<p>' + names[2] + '</p>';

  resetGame();
}

function updateWins() {
  document.getElementById('p1-score').innerText = wins[0];
  document.getElementById('p2-score').innerText = wins[1];
  document.getElementById('tie-score').innerText = wins[2];
}

function playGame(clickedDiv, divValue) {
  // add x or o
  if ((wins[0] + wins[1] + wins[2]) % 2 == 0) 
    clickedDiv.innerText = whoseTurn ? 'O' : 'X';
  else
    clickedDiv.innerText = whoseTurn ? 'X' : 'O';

  // increment player's total
  totals[whoseTurn] += divValue;

  if (isWin()) {
    // declare winner
    document.getElementById('winner').innerText = names[whoseTurn] + " wins!";
    document.getElementById('scoreboard').classList.add('hide');
    document.getElementById('win-message').classList.remove('hide');

    // increment scores
    wins[whoseTurn]++;

    // make all divs unclickable
    for (var i = 0; i < 9; i++) {
      document.getElementById('gb-' + (i + 1)).removeAttribute('onclick');
      document.getElementById('gb-' + (i + 1)).classList.remove('clickable');
    }
  }
  else if (isCatsGame()) {
    // declare a tie
    document.getElementById('winner').innerText = "Tie game!";
    document.getElementById('scoreboard').classList.add('hide');
    document.getElementById('win-message').classList.remove('hide');

    // increment scores
    wins[2]++;

    // make last div unclickable
    clickedDiv.removeAttribute('onclick');
  }
  else {
    // toggle player turn
    changeTurn();

    // prevent clicking on the same div again
    clickedDiv.removeAttribute('onclick');
    clickedDiv.classList.remove('clickable');
  }
}

function changeTurn(startFresh = false) {
  if (startFresh) {
    if ((wins[0] + wins[1] + wins[2]) % 2 == 0) {
      whoseTurn = 0;
      document.getElementById('p1-symbol').classList.add('active');
      document.getElementById('p2-symbol').classList.remove('active');
    }
    else {
      whoseTurn = 1;
      document.getElementById('p1-symbol').classList.remove('active');
      document.getElementById('p2-symbol').classList.add('active');
    }
  }
  else {
    whoseTurn ? whoseTurn = 0 : whoseTurn = 1;
    document.getElementById('p1-symbol').classList.toggle('active');
    document.getElementById('p2-symbol').classList.toggle('active');
  }
}

function isWin() {
  for (var i = 0; i < winCodes.length; i++) {
    if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) 
      return true;
  }

  return false;
}

function isCatsGame() {
  if (totals[0] + totals[1] == 511) 
    return true;
  else 
    return false;
}

function resetGame(playAgain = false) {
  updateWins();
  changeTurn(true);

  // change who goes first every other time
  if ((wins[0] + wins[1] + wins[2]) % 2 == 0) {
    document.getElementById('p1-symbol').innerHTML = '<p>X</p>';
    document.getElementById('p2-symbol').innerHTML = '<p>O</p>';
  }
  else {
    document.getElementById('p1-symbol').innerHTML = '<p>O</p>';
    document.getElementById('p2-symbol').innerHTML = '<p>X</p>';

  }

  document.getElementById('scoreboard').classList.toggle('hide');
  if (playAgain) {    // game has already been played, so hide win message
    document.getElementById('win-message').classList.toggle('hide');
    totals[0] = 0;    // also reset totals
    totals[1] = 0;
  }
  else                // game is fresh, so hide player setup
    document.getElementById('player-setup').classList.toggle('hide');

  // reset grid
  for (var i = 0; i < 9; i++) {
    square = document.getElementById('gb-' + (i + 1));

    square.setAttribute('onclick', 'playGame(this, ' + (2 ** i) + ');');
    square.classList.add('clickable');
    square.innerText = "";
  }
}

function endGame() {
  updateWins();
  document.getElementById('scoreboard').classList.toggle('hide');
  document.getElementById('win-message').classList.toggle('hide');

  document.getElementById('game-over').innerText = "Game over!";
  document.getElementById('game-over').classList.add('banner');
  document.getElementById('p1-symbol').remove();
  document.getElementById('p2-symbol').remove();
}