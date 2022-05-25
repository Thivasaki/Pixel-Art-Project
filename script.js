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

colorPalette();
createGridPixels();

window.onload = startBlack();

// const whatColor = document.getElementsByClassName('color');

// function clickToAddColor() {
// }

// for (let i = 0; i < whatColor.length; i += 1) {
//   whatColor[i].addEventListener('click', clickToAddColor)
// }
