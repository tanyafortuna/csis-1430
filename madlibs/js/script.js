var labelsCamping = [
  "Person's name",
  'Noun',
  'Emotion',
  'Verb',
  'Emotion',
  'Animal',
  'Verb',
  'Adjective',
  'Verb (-ing)',
  'Adverb',
  'Number',
  'Length of time (plural)',
  'Color',
  'Animal',
  'Number',
  'Monster',
  'Noun (plural)',
];

var numbers = ['2', '3', '14', '9', '5', '8', '42'];
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
var colors = ['crimson', 'teal', 'magenta', 'gold', 'indigo', 'lime', 'tan'];
var monsters = [
  'vampire',
  'zombie',
  'bigfoot',
  'ghost',
  'chupacabra',
  'werewolf',
  'bogeyman',
];

function createForm() {
  var formHTML = '<form action="javascript:void(0);">';
  formHTML +=
    '<button type="button" onclick="provideRandomWords();">Random words</button>';

  for (var i = 0; i < 17; i++) {
    formHTML += '<div>';
    formHTML += '<label for="input=' + i + '">' + labelsCamping[i] + '</label>';
    formHTML += '<input type="text" id="input-' + i + '">';
    formHTML += '</div>';
  }
  formHTML +=
    '<button type="submit" onclick="updatePage();">Tell my story!</button>';

  formHTML += '</form>';
  document.getElementById('words').innerHTML = formHTML;
}

function updatePage() {
  document.getElementById('secret').classList.add('shown');
  document.getElementById('story').classList.add('campfire');
  updateStory();
}

function updateStory() {
  var entries = [];
  for (var i = 0; i < 17; i++) {
    entries[i] = document.getElementById('input-' + i).value;
  }

  var storyHTML = '<div>';

  storyHTML += 'This weekend I am going camping with ';
  storyHTML += '<span class="entry">' + entries[0] + '</span>';
  storyHTML += '. I packed my lantern, sleeping bag, and ';
  storyHTML += '<span class="entry">' + entries[1] + '</span>';
  storyHTML += '. I am so ';
  storyHTML += '<span class="entry">' + entries[2] + '</span>';
  storyHTML += ' to ';
  storyHTML += '<span class="entry">' + entries[3] + '</span>';
  storyHTML += ' in a tent. I am ';
  storyHTML += '<span class="entry">' + entries[4] + '</span>';
  storyHTML += ' we might see a ';
  storyHTML += '<span class="entry">' + entries[5] + '</span>';
  storyHTML += ', they are kind of dangerous.';
  storyHTML += ' We are going to hike, fish, and ';
  storyHTML += '<span class="entry">' + entries[6] + '</span>';
  storyHTML += '. I have heard that the ';
  storyHTML += '<span class="entry">' + entries[7] + '</span>';
  storyHTML += ' lake is great for ';
  storyHTML += '<span class="entry">' + entries[8] + '</span>';
  storyHTML += '. Then we will ';
  storyHTML += '<span class="entry">' + entries[9] + '</span>';
  storyHTML += ' hike through the forest for ';
  storyHTML += '<span class="entry">' + entries[10] + '</span>';
  storyHTML += ' ';
  storyHTML += '<span class="entry">' + entries[11] + '</span>';
  storyHTML += '. If I see a ';
  storyHTML += '<span class="entry">' + entries[12] + '</span>';
  storyHTML += ' ';
  storyHTML += '<span class="entry">' + entries[13] + '</span>';
  storyHTML += ' while hiking, I am going to bring it home as a pet!';
  storyHTML += ' At night we will tell ';
  storyHTML += '<span class="entry">' + entries[14] + '</span>';
  storyHTML += ' ';
  storyHTML += '<span class="entry">' + entries[15] + '</span>';
  storyHTML += ' stories and roast ';
  storyHTML += '<span class="entry">' + entries[16] + '</span>';
  storyHTML += ' around the campfire!';
  storyHTML += '</div>';

  document.getElementById('story').innerHTML += storyHTML;
}

function provideRandomWords() {
  var rand = Math.floor(Math.random() * 7);

  document.getElementById('input-0').value = names[rand];
  document.getElementById('input-1').value = nouns[rand];
  document.getElementById('input-2').value = emotions[rand];
  document.getElementById('input-3').value = verbs[rand];
  document.getElementById('input-4').value = emotions[(rand + 1) % 7];
  document.getElementById('input-5').value = animals[rand];
  document.getElementById('input-6').value = verbs[(rand + 1) % 7];
  document.getElementById('input-7').value = adjectives[rand];
  document.getElementById('input-8').value = verbIngs[rand];
  document.getElementById('input-9').value = adverbs[rand];
  document.getElementById('input-10').value = numbers[rand];
  document.getElementById('input-11').value = measuresOfTime[rand];
  document.getElementById('input-12').value = colors[rand];
  document.getElementById('input-13').value = animals[(rand + 1) % 7];
  document.getElementById('input-14').value = numbers[(rand + 1) % 7];
  document.getElementById('input-15').value = monsters[rand];
  document.getElementById('input-16').value = nounsPlural[rand];
}
