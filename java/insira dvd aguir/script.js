const quadrado = document.getElementById('quadrado');

let posX = 0;
let posY = 0;
let velX = 3;
let velY = 3;

const maxX = window.innerWidth - quadrado.offsetWidth;
const maxY = window.innerHeight - quadrado.offsetHeight;

function move() {
  posX += velX;
  posY += velY;

  if (posX <= 0 || posX >= maxX) {
    velX *= -1;
  }
  if (posY <= 0 || posY >= maxY) {
    velY *= -1;
  }

  quadrado.style.left = posX + 'px';
  quadrado.style.top = posY + 'px';

  requestAnimationFrame(move);
}

move();






