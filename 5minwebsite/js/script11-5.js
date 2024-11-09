function updateMessage() {
  var userName = document.getElementById('name').value;
  var userAge = document.getElementById('age').value;

  document.getElementById('message').innerHTML =
    '<p>Hello ' +
    userName +
    '. What is it like being ' +
    userAge +
    ' years old?</p>';
}
