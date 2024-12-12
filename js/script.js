var sounds = new Audio('sounds/ooh1.wav');

function activate(page) {
  // hide toggler dropdown
  document.getElementById('navbarSupportedContent').classList.remove('show');

  // reset all nav items
  var navItems = document.getElementsByClassName('nav-item');
  for (var i = 0; i < 4; i++) {
    navItems[i].classList.remove('active')
    navItems[i].removeAttribute('aria-current');
  }
  navItems[0].setAttribute('onclick', 'activate("index");')
  navItems[1].setAttribute('onclick', 'activate("portfolio");')
  navItems[2].setAttribute('onclick', 'activate("reflection");')
  navItems[3].setAttribute('onclick', 'activate("contact");')
  document.getElementById('index').classList.add('hidden');
  document.getElementById('portfolio').classList.add('hidden');
  document.getElementById('reflection').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');

  // update target nav item
  var target;
  switch (page) {
    case 'index':
      target = 0;
      break;
    case 'portfolio':
      target = 1;
      sounds.play();
      break;
    case 'reflection':
      target = 2;
      break;
    case 'contact':
      target = 3;
      break;
  }
  navItems[target].classList.add('active');
  navItems[target].setAttribute('aria-current', 'page');
  navItems[target].removeAttribute('onclick');
  document.getElementById(page).classList.remove('hidden');
}