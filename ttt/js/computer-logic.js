var weights = [];

function resetComputer() {
  for (var i = 0; i < 9; i++) {
    weights[i] = 0;
  }
}

function playComputerTurn() {
  var spotNum = pickSpot();
  var spotElement = document.getElementById('gb-' + (pickSpot() + 1));
  setTimeout(() => { playGame(spotElement, 2 ** spotNum) }, 2500);
}

function pickSpot() {
  for (var n = 0; n < 9; n++) {
    var ele = document.getElementById('gb-' + (n + 1));
    weights[n] = 0;

    if (ele.innerText != 'X' && ele.innerText != 'O') {
      // rank winning spots
      if (isWin(totals[1] + 2 ** n)) {
        weights[n] += 100;
      }
      // rank blocking spots
      if (isWin(totals[0] + 2 ** n)) {
        weights[n] += 25;
      }
      // rank other spots
      if (n == 4) weights[n] += 4;               // center
      else if (n % 2 == 0) weights[n] += 3;      // corners
      else weights[n] += 2;                      // edges
    }
  }

  return weights.indexOf(Math.max(...weights));
}