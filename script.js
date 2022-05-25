const colors = document.getElementsByClassName('color');

function colorPalette() {
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'aqua';
  colors[2].style.backgroundColor = 'red';
  colors[3].style.backgroundColor = 'green';
}

window.onload = colorPalette;
