var labelsCamping = [
  'Person\'s name',
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
var labelsHospital = [
  'Number',
  'Length of time (plural)',
  'Mode of transportation',
  'Adjective',
  'Adjective',
  'Noun (plural)',
  'Color',
  'Body part (plural)',
  'Verb',
  'Number',
  'Noun (plural)',
  'Noun',
  'Body part',
  'Verb',
  'Noun (plural)',
  'Adjective',
  'Monster'
];
var labelsForest = [
  'Person\'s name',
  'Adjective',
  'Color',
  'Animal',
  'Place',
  'Adjective',
  'Magical creatures',
  'Room in a house',
  'Noun (plural)',
  'Noun',
  'Adjective',
  'Magical creatures',
  'Number',
  'Length of time (plural)',
  'Verb (-ing)',
  'Adjective',
  'Monster'
];

var storyCamping = [
  'This weekend I am going camping with <',
  '>. I packed my lantern, sleeping bag, and <',
  '>. If I <',
  '> in my tent I will be so <',
  '>. We are going to hike, fish, and <',
  '>. I am <',
  '> we might see a <',
  '>, they are kind of dangerous. I have heard that the <',
  '> lake is great for <',
  '>. After that we will <',
  '> hike through the forest for <',
  '> <',
  '>. If I see a <',
  '> <',
  '> while hiking, I am going to bring it home as a pet! At night we will tell <',
  '> stories in <',
  '> and roast <',
  '> around the campfire!',
];
var storyHospital = [
  'It was about <',
  '> <',
  '> ago when I came to the hospital in a <',
  '>. It\'s <',
  '> here because of all the <',
  '> <',
  '>. There are nurses here who have <',
  '> <',
  '>. If someone wants to come into my room I told them that they have to <',
  '> first. I have decorated my room with <',
  '> <',
  '>. Today a doctor came into my room and they were wearing a <',
  '> on their <',
  '>. I heard that all doctors <',
  '> <',
  '> every day during breakfast. The craziest thing about being in the hospital is the <',
  '> <',
  '> in the room next door!'
];
var storyForest = [
  'Dear <',
  '>, I am writing to you from a <',
  '> castle in an enchanted forest. I found myself here one day after befriending a <',
  '> <',
  '> in <',
  '>. There are <',
  '> <',
  '> here! In the <',
  '> there is a pool full of <',
  '>. I fall asleep each night on a <',
  '> and dream of <',
  '> <',
  '>. It feels as though I have lived here for <',
  '> <',
  '>. I hope one day you can visit, although the only way to get here now is <',
  '> on a <',
  '> <',
  '>!'
];

var adjectives = ['tiny', 'huge', 'scary', 'spiffy', 'shy', 'stinky', 'silly'];
var adverbs = ['blissfully', 'stupidly', 'silently', 'intensely', 'triumphantly', 'knowledgeably', 'wearily'];
var animals = ['chameleon', 'weasel', 'raccoon', 'dolphin', 'shark', 'bat', 'tarantula'];
var bodyParts = ['elbow', 'nose', 'hair', 'appendix', 'toe', 'beard', 'neck'];
var bodyPartsPlural = ['eyes', 'feet', 'hands', 'knees', 'intestines', 'teeth', 'kidneys'];
var colors = ['crimson', 'teal', 'magenta', 'gold', 'violet', 'lime', 'beige'];
var emotions = ['happy', 'sad', 'excited', 'reluctant', 'concerned', 'afraid', 'uncomfortable'];
var languages = ['Javascript', 'Polish', 'Spanish', 'Pascal', 'Ancient Egyptian', 'Chinese', 'C++'];
var magicalCreatures = ['unicorns', 'fairies', 'leprechauns', 'elves', 'gnomes', 'dragons', 'mermaids'];
var monsters = ['vampire', 'zombie', 'bigfoot', 'ghost', 'chupacabra', 'werewolf', 'bogeyman'];
var names = ['Albert Einstein', 'Taylor Swift', 'Queen Elizabeth', 'David Attenborough', 'King Tut', 'George Washington', 'Babe Ruth'];
var nouns = ['piano', 'dollar bill', 'roller skate', 'salad', 'cellphone', 'book', 'banana'];
var nounsPlural = ['pillows', 'footballs', 'photos', 'hot dogs', 'gifts', 'shirts', 'shoes'];
var numbers = ['18', '3', '14', '7', '5', '8', '40'];
var places = ['school', 'London', 'Japan', 'Provo', 'Africa', 'hell', 'grandma\'s house'];
var rooms = ['bedroom', 'bathroom', 'kitchen', 'basement', 'closet', 'attic', 'garage'];
var time = ['seconds', 'minutes', 'hours', 'days', 'months', 'years', 'decades'];
var transportation = ['tractor', 'moped', 'train', 'plane', 'clown car', 'ship', 'yacht'];
var verbs = ['kill', 'chew', 'scream', 'slap', 'bathe', 'fart', 'shove'];
var verbIngs = ['running', 'dying', 'shouting', 'eating', 'drinking', 'squeezing', 'texting'];

function initializePage(whichStory) {
  switch (whichStory) {
    case 'camping': { document.getElementById('secret').innerHTML = 'I\'m Going Camping!'; break; }
    case 'hospital': { document.getElementById('secret').innerHTML = 'My Hospital Visit'; break; }
    case 'forest': { document.getElementById('secret').innerHTML = 'The Enchanted Forest'; break; }
  }

  document.getElementById('body').classList.remove('no-scroll');

  document.getElementById('prompt').classList.add('hidden', 'collapsed');
  document.getElementById('story-choices').classList.add('hidden', 'collapsed');

  document.getElementById('words').classList.remove('hidden', 'collapsed');
  document.getElementById('background').classList.remove('hidden', 'collapsed');
  document.getElementById('output').classList.remove('hidden', 'collapsed');
  document.getElementById('legend').classList.remove('hidden', 'collapsed');

  document.getElementById('background').classList.add(whichStory);
  createForm(whichStory);
}

function createForm(whichStory) {
  var formHTML = '<form action="javascript:void(0);">';
  formHTML += '<button id="random" type="button" onclick="getRandomWords(\'';
  formHTML += whichStory;
  formHTML += '\');">Random words</button>';

  for (var i = 0; i < 17; i++) {
    formHTML += '<div>';
    formHTML += '<label for="input-' + i + '">';
    switch (whichStory) {
      case 'camping': { formHTML += labelsCamping[i]; break; }
      case 'hospital': { formHTML += labelsHospital[i]; break; }
      case 'forest': { formHTML += labelsForest[i]; break; }
    }
    formHTML += '</label>';
    formHTML += '<input type="text" id="input-' + i;
    formHTML += '" onkeyup="isFilledOut();">';
    formHTML += '</div>';
  }
  formHTML += '<button id="submit" class="hidden" onclick="updatePage(\'';
  formHTML += whichStory;
  formHTML += '\');" type="submit">Tell my story!</button>';
  formHTML += '</form>';

  document.getElementById('words').innerHTML = formHTML;
}

function updatePage(whichStory) {
  document.getElementById('random').classList.add('hidden');
  document.getElementById('submit').classList.add('hidden');
  document.getElementById('random').removeAttribute('onclick');
  document.getElementById('submit').removeAttribute('onclick');

  for (var i = 0; i < 17; i++) {
    document.getElementById('input-' + i).removeAttribute('onkeyup');
    document.getElementById('input-' + i).setAttribute('readonly', '');
  }

  createStoryHTML();
  document.getElementById('output').classList.add('transparent');
  replaceTheme();
  typeStory(createStoryText(whichStory));
  setTimeout(() => { document.getElementById('redo').classList.remove('collapsed', 'hidden'); }, 32500);
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

function createStoryText(whichStory) {
  var entries = [];
  for (var i = 0; i < 17; i++) {
    entries[i] = document.getElementById('input-' + i).value;
  }

  var storyText = '';
  for (var i = 0; i < 18; i++) {
    switch (whichStory) {
      case 'camping': { storyText += storyCamping[i]; break; }
      case 'hospital': { storyText += storyHospital[i]; break; }
      case 'forest': { storyText += storyForest[i]; break; }
    }
    if (i == 17) break;
    storyText += entries[i];
  }

  return storyText;
}

function getRandomWords(whichStory) {
  var wordTypes;
  switch (whichStory) {
    case 'camping': { wordTypes = labelsCamping; break; }
    case 'hospital': { wordTypes = labelsHospital; break; }
    case 'forest': { wordTypes = labelsForest; break; }
  }

  var randNum;
  var randEntry;
  for (var i = 0; i < wordTypes.length; i++) {
    randNum = Math.floor(Math.random() * 7);
    switch (wordTypes[i]) {
      case 'Adverb': { randEntry = adverbs[randNum]; break; }
      case 'Adjective': { randEntry = adjectives[randNum]; break; }
      case 'Animal': { randEntry = animals[randNum]; break; }
      case 'Body part': { randEntry = bodyParts[randNum]; break; }
      case 'Body part (plural)': { randEntry = bodyPartsPlural[randNum]; break; }
      case 'Color': { randEntry = colors[randNum]; break; }
      case 'Emotion': { randEntry = emotions[randNum]; break; }
      case 'Language': { randEntry = languages[randNum]; break; }
      case 'Length of time (plural)': { randEntry = time[randNum]; break; }
      case 'Magical creatures': { randEntry = magicalCreatures[randNum]; break; }
      case 'Mode of transportation': { randEntry = transportation[randNum]; break; }
      case 'Monster': { randEntry = monsters[randNum]; break; }
      case 'Noun': { randEntry = nouns[randNum]; break; }
      case 'Noun (plural)': { randEntry = nounsPlural[randNum]; break; }
      case 'Number': { randEntry = numbers[randNum]; break; }
      case 'Person\'s name': { randEntry = names[randNum]; break; }
      case 'Place': { randEntry = places[randNum]; break; }
      case 'Room in a house': { randEntry = rooms[randNum]; break; }
      case 'Verb': { randEntry = verbs[randNum]; break; }
      case 'Verb (-ing)': { randEntry = verbIngs[randNum]; break; }
    }
    document.getElementById('input-' + i).value = randEntry;
  }

  document.getElementById('submit').classList.remove('hidden');
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
    document.getElementById('submit').classList.remove('hidden');
  else document.getElementById('submit').classList.add('hidden');
}

//GOOD fix
function typeStory(story, start = 2500, delay = 50) {
  var letters = story.split('');
  var num = 0;

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == '<') {
      num++;
      setTimeout(
        addClass,
        start + delay * (i + 1),
        'story-' + num,
        'revealed'
      );
    } else if (letters[i] == '>') {
      num++;
    } else {
      setTimeout(
        appendLetter,
        start + delay * (i + 1),
        'story-' + num,
        letters[i]
      );
    }
  }
}

//GOOD fix
function replaceTheme(delay = 50) {
  var theme = document.getElementById('secret').innerText;
  var letters = theme.split('');
  var textLength = letters.length;

  for (var i = 0; i < textLength; i++) {
    letters.pop();
    setTimeout(updateInnerHTML, delay * (i + 1), 'secret', letters.join(''));
  }
  setTimeout(addClass, delay * textLength, 'secret', 'shown');
  letters = theme.split('');
  for (var i = 0; i < textLength; i++) {
    setTimeout(
      appendLetter,
      delay * (textLength + i + 1),
      'secret',
      letters[i]
    );
  }
}

function appendLetter(elementID, x) {
  document.getElementById(elementID).innerHTML += x;
}

function updateInnerHTML(elementID, x) {
  document.getElementById(elementID).innerHTML = x;
}

function addClass(elementID, x) {
  document.getElementById(elementID).classList.add(x);
}