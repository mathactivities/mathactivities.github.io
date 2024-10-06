window.moveship = true

var ship = document.getElementById("spaceShip");
ship.style.height = 0.12 * parseInt(window.innerWidth) + 50 + "px";
var bullets = [];
window.shootInterval;

window.addEventListener("mousemove", mousemove)

function mousemove(event) {
  ship.style.left = event.clientX + "px";
}

var movement = {
  left: false,
  right: false,
  space: false
};

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

function handleKeyDown(e) {
  switch (e.key) {
    case "ArrowLeft":
      movement.left = true;
      break;
    case "ArrowRight":
      movement.right = true;
      break;
    case " ":
      if (!movement.space) {
        movement.space = true;
        var speedeee = 150/window.speed * 6
        window.shootInterval = setInterval(shoot, speedeee);
        
      }
      break;
    default:
      break;
  }
}

function handleKeyUp(e) {
  switch (e.key) {
    case 'ArrowLeft':
      ship.style.transform = "rotate(0deg)";
      movement.left = false;
      break;
    case 'ArrowRight':
      ship.style.transform = "rotate(0deg)";
      movement.right = false;
      break;
    case ' ':
      if (movement.space) {
        movement.space = false;
        clearInterval(shootInterval);
      }
      break;
    default:
      break;
  }
}

function shoot() {
  if (window.score < 350){
    var bullet = document.getElementById("bullet");
    var bulletClone = bullet.cloneNode(true);
    bulletClone.style.visibility = "visible";
    bulletClone.style.top = ship.offsetTop + 20 + "px";
    bulletClone.style.left = ship.offsetLeft + ship.offsetWidth / 2 - bullet.offsetWidth / 2 + "px";
    document.getElementById("gameArea").appendChild(bulletClone);
    bullets.push(bulletClone);
  } 
  else {
    // Shoot two bullets with 30px horizontal separation
    for (var i = 0; i < 2; i++) {
      var bullet = document.getElementById("bullet");
      var bulletClone = bullet.cloneNode(true);
      bulletClone.style.visibility = "visible";
      var bulletLeft = ship.offsetLeft + ship.offsetWidth / 2 - bullet.offsetWidth / 2;
      bulletClone.style.top = ship.offsetTop + 20 + "px";
      if (i == 0){
        bulletClone.style.left = bulletLeft + (i * -35) + "px";
      }
      else if (i > 0){
        bulletClone.style.left = bulletLeft + (i * 15) + "px";
      }
      document.getElementById("gameArea").appendChild(bulletClone);
      bullets.push(bulletClone);
    }
  }
}

function updateBullets() {
  for (var i = 0; i < bullets.length; i++) {
    var bullet = bullets[i];
    bullet.style.top = parseInt(bullet.style.top) - 10 + "px";
    if (parseInt(bullet.style.top) < 0) {
      bullet.remove();
      bullets.splice(i, 1);
      i--;
    }
  }
}

function updatemovement() {
  if (movement.left && parseInt(ship.style.left) > 0) {
    ship.style.transform = "rotate(-10deg)";
    ship.style.left = parseInt(ship.style.left) - (window.speed + 2) + "px";
  }
  if (movement.right && parseInt(ship.style.left) + 0.12 * window.innerWidth + 50 < parseInt(window.innerWidth)) {
    ship.style.transform = "rotate(10deg)";
    ship.style.left = parseInt(ship.style.left) + (window.speed + 2) + "px";
  }
  updateBullets()
  window.playerFrameId = window.requestAnimationFrame(updatemovement);
}

updatemovement();
