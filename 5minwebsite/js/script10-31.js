// First example
var userInput1 = prompt('Enter a number');
var userInput2 = prompt('Enter a second number');
var userInput3 = prompt('Enter a third number');

console.log(add(userInput1, userInput2, userInput3));

function add(n1, n2, n3) {
  return parseInt(n1) + parseInt(n2) + parseInt(n3);
}

// Second example
function addThem() {
  var a = parseInt(document.getElementById('num1').value);
  var b = parseInt(document.getElementById('num2').value);
  var c = parseInt(document.getElementById('num3').value);

  document.getElementById('result').innerHTML =
    '<p>The total is ' + (a + b + c) + '</p>';
}

// Third example
function pauseBall() {
  var ball = document.getElementById('ball');
  var button = document.getElementById('playpause');

  // ball.style.animationPlayState = 'paused'; // Advanced way

  if (ball.className == 'paused') {
    ball.className = 'play';
    button.innerText = 'Pause';
  } else {
    ball.className = 'paused';
    button.innerText = 'Play';
  }
}
