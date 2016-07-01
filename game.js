emojione = require('emojione');

// const character = emojione.toImage(':grinning:');
// document.getElementById('game').innerHTML = character;

class PlayerCharacter {
  constructor() {
    this.y = 3;
    this.x = 3;
  }
}

character = new PlayerCharacter;

window.onkeyup = function(e) {
  switch(e.keyCode) {
    case 37:
      character.x = character.x - 1;
      draw(character);
      break;
    case 38:
      character.y = character.y - 1;
      draw(character);
      break;
    case 39:
      character.x = character.x + 1;
      draw(character);
      break;
    case 40:
      character.y = character.y + 1;
      draw(character);
      break;
  }
}

const draw = function(char) {
  let content = ""
  const width = 7;
  const height = 7;

  for (i = 0; i <= width; i++) {
    for (j = 0; j <= height; j++) {
      if (i == char.y && j == char.x) {
        content = content + '@';
      } else if (i == 0 && j == height) {
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

draw(character);
