var count;
do {
  count = parseInt(prompt('How many lotto numbers would you like to draw?'));
  if (count < 1 || count > 8 || isNaN(count))
    alert('Whoops - the number has to be between 1 and 8. Try again.');
} while (count < 1 || count > 8 || isNaN(count));

var numbers = [];

updateNumbers();

function updateNumbers() {
  for (var i = 0; i < count; i++) {
    numbers[i] = Math.ceil(Math.random() * 99);
  }
  var numbersString = styleNumbers(numbers);

  document.getElementById('numbers').innerHTML = '<p>' + numbersString + '</p>';
  document.getElementById('button').className = 'show';
}

function styleNumbers(numbers) {
  var numbersString = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    numbersString += '-' + numbers[i];
  }

  return numbersString;
}
