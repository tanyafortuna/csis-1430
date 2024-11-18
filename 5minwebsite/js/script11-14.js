function inject() {
  toBeInjected = '';
  for (var i = 0; i < 10; i++) {
    toBeInjected += '<div></div>';
  }

  document.getElementById('container').innerHTML = toBeInjected;
}
