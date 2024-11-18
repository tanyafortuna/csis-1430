function processNumber() {
  var userInput = parseInt(document.getElementById('input-number').value);

  if (userInput == 1) console.log('one');
  else if (userInput == 2) console.log('two');
  else if (userInput == 3) console.log('three');
  else if (userInput > 3) console.error('too high');
}
