var labelsCamping = [
  "Person's name",
  'Noun',
  'Verb',
  'Emotion',
  'Verb',
  'Emotion',
  'Animal',
  'Adjective',
  'Verb (-ing)',
  'Adverb',
  'Number',
  'Length of time (plural)',
  'Color',
  'Animal',
  'Number',
  'Language',
  'Noun (plural)',
];
var labelsHospital = [];
var labelsForest = [];

var numbers = ['18', '3', '14', '7', '5', '8', '40'];
var nouns = [
  'piano',
  'money',
  'garbage',
  'salad',
  'cellphone',
  'book',
  'apple',
];
var nounsPlural = [
  'pillows',
  'footballs',
  'photos',
  'hot dogs',
  'gifts',
  'shirts',
  'shoes',
];
var names = [
  'Albert Einstein',
  'Taylor Swift',
  'Queen Elizabeth',
  'David Attenborough',
  'King Tut',
  'George Washington',
  'Babe Ruth',
];
var adjectives = [
  'orange',
  'immense',
  'scary',
  'spiffy',
  'shy',
  'stinky',
  'crazy',
];
var verbs = ['die', 'travel', 'scream', 'sleep', 'bathe', 'fart', 'blink'];
var verbIngs = [
  'running',
  'dying',
  'shouting',
  'eating',
  'drinking',
  'squeezing',
  'texting',
];
var emotions = [
  'happy',
  'sad',
  'excited',
  'reluctant',
  'concerned',
  'afraid',
  'uncomfortable',
];
var animals = [
  'chameleon',
  'weasel',
  'raccoon',
  'dolphin',
  'shark',
  'bat',
  'tarantula',
];
var adverbs = [
  'blissfully',
  'stupidly',
  'silently',
  'intensely',
  'triumphantly',
  'knowledgeably',
  'wearily',
];
var measuresOfTime = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'months',
  'years',
  'decades',
];
var colors = ['crimson', 'teal', 'magenta', 'gold', 'violet', 'lime', 'tan'];
var monsters = [
  'vampire',
  'zombie',
  'bigfoot',
  'ghost',
  'chupacabra',
  'werewolf',
  'bogeyman',
];
var languages = [
  'Javascript',
  'Polish',
  'Spanish',
  'Pascal',
  'Ancient Egyptian',
  'Chinese',
  'C++',
];

function initializePage() {
  addClass('background', 'campfire'); //TODO
}

function createForm() {
  // TODO
  var formHTML = '<form action="javascript:void(0);">';
  formHTML +=
    '<button id="random" type="button" onclick="provideRandomWords();">Random words</button>';

  for (var i = 0; i < 17; i++) {
    formHTML += '<div>';
    formHTML += '<label for="input=' + i + '">' + labelsCamping[i] + '</label>';
    formHTML +=
      '<input type="text" id="input-' + i + '" onkeyup="isFilledOut();">';
    formHTML += '</div>';
  }
  formHTML +=
    '<button id="submit" class="unclickable" type="submit" onclick="updatePage();">Tell my story!</button>';

  formHTML += '</form>';
  document.getElementById('words').innerHTML = formHTML;
}

function updatePage() {
  addClass('random', 'unclickable');
  addClass('submit', 'unclickable');
  removeAttribute('random', 'onclick');
  removeAttribute('submit', 'onclick');

  for (var i = 0; i < 17; i++) {
    removeAttribute('input-' + i, 'onkeyup');
    document.getElementById('input-' + i).setAttribute('readonly', '');
  }

  replaceTheme('The Camping Trip'); //TODO
  addClass('background', 'campfire'); //TODO
  addClass('output', 'transparent');
  createStoryHTML();
  typeStory(createStoryText());
}

function createStoryHTML() {
  var storyHTML = '';

  for (var i = 0; i < 34; i = i + 2) {
    storyHTML += '<span class="text" id="story-' + i + '"></span>';
    storyHTML += '<span class="entry" id="story-' + (i + 1) + '"></span>';
  }
  storyHTML += '<span class="text" id="story-34"></span>';

  document.getElementById('story-text').innerHTML = storyHTML;
}

function createStoryText() {
  // TODO
  var storyText;
  var entries = [];
  for (var i = 0; i < 17; i++) {
    entries[i] = document.getElementById('input-' + i).value;
  }

  storyText = 'This weekend I am going camping with ';
  storyText += '<' + entries[0] + '>.';
  storyText += ' I packed my lantern, sleeping bag, and ';
  storyText += '<' + entries[1] + '>.';
  storyText += ' If I ';
  storyText += '<' + entries[2] + '>';
  storyText += ' in my tent I will be so ';
  storyText += '<' + entries[3] + '>.';
  storyText += ' We are going to hike, fish, and ';
  storyText += '<' + entries[4] + '>.';
  storyText += ' I am ';
  storyText += '<' + entries[5] + '>';
  storyText += ' we might see a ';
  storyText += '<' + entries[6] + '>,';
  storyText += ' they are kind of dangerous. I have heard that the ';
  storyText += '<' + entries[7] + '>';
  storyText += ' lake is great for ';
  storyText += '<' + entries[8] + '>.';
  storyText += ' After that we will ';
  storyText += '<' + entries[9] + '>';
  storyText += ' hike through the forest for ';
  storyText += '<' + entries[10] + '>';
  storyText += ' ';
  storyText += '<' + entries[11] + '>.';
  storyText += ' If I see a ';
  storyText += '<' + entries[12] + '>';
  storyText += ' ';
  storyText += '<' + entries[13] + '>';
  storyText += ' while hiking, I am going to bring it home as a pet!';
  storyText += ' At night we will tell ';
  storyText += '<' + entries[14] + '>';
  storyText += ' stories in ';
  storyText += '<' + entries[15] + '>';
  storyText += ' and roast ';
  storyText += '<' + entries[16] + '>';
  storyText += ' around the campfire!';

  return storyText;
}

function provideRandomWords() {
  // TODO
  var rand = Math.floor(Math.random() * 7);

  document.getElementById('input-0').value = names[rand];
  document.getElementById('input-1').value = nouns[rand];
  document.getElementById('input-2').value = verbs[rand];
  document.getElementById('input-3').value = emotions[rand];
  document.getElementById('input-4').value = verbs[(rand + 1) % 7];
  document.getElementById('input-5').value = emotions[(rand + 1) % 7];
  document.getElementById('input-6').value = animals[rand];
  document.getElementById('input-7').value = adjectives[rand];
  document.getElementById('input-8').value = verbIngs[rand];
  document.getElementById('input-9').value = adverbs[rand];
  document.getElementById('input-10').value = numbers[rand];
  document.getElementById('input-11').value = measuresOfTime[rand];
  document.getElementById('input-12').value = colors[rand];
  document.getElementById('input-13').value = animals[(rand + 1) % 7];
  document.getElementById('input-14').value = numbers[(rand + 1) % 7];
  document.getElementById('input-15').value = languages[rand];
  document.getElementById('input-16').value = nounsPlural[rand];

  document.getElementById('submit').classList.remove('unclickable');
}

function isFilledOut() {
  if (
    document.getElementById('input-0').value &&
    document.getElementById('input-1').value &&
    document.getElementById('input-2').value &&
    document.getElementById('input-3').value &&
    document.getElementById('input-4').value &&
    document.getElementById('input-5').value &&
    document.getElementById('input-6').value &&
    document.getElementById('input-7').value &&
    document.getElementById('input-8').value &&
    document.getElementById('input-9').value &&
    document.getElementById('input-10').value &&
    document.getElementById('input-11').value &&
    document.getElementById('input-12').value &&
    document.getElementById('input-13').value &&
    document.getElementById('input-14').value &&
    document.getElementById('input-15').value &&
    document.getElementById('input-16').value
  )
    document.getElementById('submit').classList.remove('unclickable');
  else document.getElementById('submit').classList.add('unclickable');
}

function typeStory(story, start = 2500, delay = 50) {
  var letters = story.split('');
  var num = 0;
  var skips = 0;

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == '<') {
      skips++;
      num++;
      setTimeout(
        addClass,
        start + delay * (i + 1 - skips),
        'story-' + num,
        'revealed'
      );
    } else if (letters[i] == '>') {
      skips++;
      num++;
    } else {
      setTimeout(
        appendLetter,
        start + delay * (i + 1 - skips),
        letters[i],
        'story-' + num
      );
    }
  }
}

function replaceTheme(theme, delay = 50) {
  var letters = theme.split('');
  var textLength = letters.length;

  for (var i = 0; i < textLength; i++) {
    letters.pop();
    setTimeout(updateInnerHTML, delay * (i + 1), letters.join(''), 'secret');
  }
  setTimeout(addClass, delay * textLength, 'secret', 'shown');
  letters = theme.split('');
  for (var i = 0; i < textLength; i++) {
    setTimeout(
      appendLetter,
      delay * (textLength + i + 1),
      letters[i],
      'secret'
    );
  }
}

function appendLetter(letter, elementID) {
  document.getElementById(elementID).innerHTML += letter;
}

function updateInnerHTML(letters, elementID) {
  document.getElementById(elementID).innerHTML = letters;
}

function addClass(elementID, c) {
  document.getElementById(elementID).classList.add(c);
}

function removeAttribute(elementID, a) {
  document.getElementById(elementID).removeAttribute(a);
}