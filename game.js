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
  let content = "##### \
  <br> #...# \
  <br> #...# \
  <br> #...# \
  <br> #...# \
  <br> #####";
  document.getElementById('game').innerHTML = content;
};

draw();
