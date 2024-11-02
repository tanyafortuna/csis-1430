var userName = prompt('Howdy. What is your name?');
var userAge = prompt('How old are you?');
var birthMonth = prompt('What month were you born in?');

var birthSeason = getBirthSeason(birthMonth);
var birthStone = getBirthStone(birthMonth);

var outputString =
  'Nice to meet you, ' +
  userName +
  '. Cool name, by the way. Since you are ' +
  userAge +
  ' years old, I hope you make the most of your remaining time. ' +
  'How do you like having a ' +
  birthSeason +
  ' birthday in ' +
  birthMonth +
  '? I hope for your next birthday you get a big ' +
  birthStone +
  ' ring, since that is your birthstone.';

alert(outputString);
stylePage(outputString, birthSeason);

function getBirthSeason(month) {
  if (month == 'December' || month == 'January' || month == 'February')
    return 'winter';
  else if (month == 'March' || month == 'April' || month == 'May')
    return 'spring';
  else if (month == 'June' || month == 'July' || month == 'August')
    return 'summer';
  else return 'fall';
}

function getBirthStone(month) {
  switch (month) {
    case 'January':
      return 'garnet';
      break;
    case 'February':
      return 'amethyst';
      break;
    case 'March':
      return 'aquamarine';
      break;
    case 'April':
      return 'diamond';
      break;
    case 'May':
      return 'emerald';
      break;
    case 'June':
      return 'pearl';
      break;
    case 'July':
      return 'ruby';
      break;
    case 'August':
      return 'peridot';
      break;
    case 'September':
      return 'sapphire';
      break;
    case 'October':
      return 'opal';
      break;
    case 'November':
      return 'golden topaz';
      break;
    case 'December':
      return 'blue topaz';
      break;
  }
}

function stylePage(output, season) {
  document.getElementById('output').innerHTML = '<p>' + output + '</p>';
  document.getElementById('output').className = 'styled ' + season;

  document.getElementById('img').className = 'show';
  switch (season) {
    case 'winter':
      document.getElementById('img').src = 'img/winter.jpg';
      break;
    case 'spring':
      document.getElementById('img').src = 'img/spring.webp';
      break;
    case 'summer':
      document.getElementById('img').src = 'img/summer.avif';
      break;
    case 'fall':
      document.getElementById('img').src = 'img/fall.jpg';
      break;
  }
}

