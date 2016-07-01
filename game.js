emojione = require('emojione');

// const character = emojione.toImage(':grinning:');
// document.getElementById('game').innerHTML = character;

window.onkeyup = function(e) {
  switch(e.keyCode) {
    case 37:
      console.log('pressed left');
      break;
    case 38:
      console.log('pressed up');
      break;
    case 39:
      console.log('pressed right');
      break;
    case 40:
      console.log('pressed down');
      break;
  }
}

const draw = function() {
  let content = ""
  const width = 7;
  const height = 7;

  for (i = 0; i <= width; i++) {
    for (j = 0; j <= height; j++) {
      if (i == 0 && j == height) {
        content = content + '#<br>';
      } else if (i == 0 || j == 0 ) {
        content = content + '#';
      } else if (i == width) {
        content = content + '#';
      } else if (j == height) {
        content = content + '#<br>';
      } else {
        content = content + '.';
      }
    }
  }
  document.getElementById('game').innerHTML = content;
};

draw();
