var quotes = [
  '\"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.\" - Patrick McKenzie, software engineer',
  '\"The more I study, the more insatiable do I feel my genius for it to be.\" - Ada Lovelace, the world\'s first computer programmer',
  '\"Tags, Attributes, Values\" - Jeff Stone',
  '\"Programming isn\'t about what you know; it\'s about what you can figure out.\" - Chris Pine, Learn to Program'
];
var num = 0;


function updateQuote() {
  document.getElementById('quote-text').innerText = quotes[num];

  num++;
  if (num == quotes.length) num = 0;
}