var p1Name, p2Name;
var p1Score = 0;
var p2Score = 0;
var tieScore = 0;

function setPlayers() {
  p1Name = document.getElementById('p1').value;
  p2Name = document.getElementById('p2').value;

  document.getElementById('p1-name').innerHTML = '<p>' + p1Name + '</p>';
  document.getElementById('p2-name').innerHTML = '<p>' + p2Name + '</p>';
  document.getElementById('tie-name').innerHTML = '<p>Ties</p>';

  document.getElementById('p1-score').innerText = p1Score;
  document.getElementById('p2-score').innerText = p2Score;
  document.getElementById('tie-score').innerText = tieScore;

  document.getElementById('scoreboard').classList.toggle('hide');
  document.getElementById('player-setup').classList.toggle('hide');
}