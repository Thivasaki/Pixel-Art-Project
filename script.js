const colors = document.getElementsByClassName('color');
const pixelGrid = document.getElementById('pixel-board');
const pixelToColor = document.getElementsByClassName('pixel');

function colorPalette() {
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'aqua';
  colors[2].style.backgroundColor = 'red';
  colors[3].style.backgroundColor = 'green';
}

function createGridPixels() {
  for (let i = 0; i < 25; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelGrid.appendChild(createPixel);
  }
}

function startBlack() {
  colors[0].classList.add('selected');
  return alert('COMEÇA COM A COR PRETA');
}

function selectColor(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      colors[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

colorPalette();
createGridPixels();

window.onload = startBlack;

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}
