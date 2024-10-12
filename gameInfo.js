console.log(items)
var item;
const info = document.getElementById('info')
//array of items of ids

const images = {
    '1v1.lol': 'images/games/1v1.lol.png',
    '2048': 'images/games/2048.png',
    'cluster-rush': 'images/games/cluster-rush.png',
    'cookie-clicker': 'images/games/cookie-clicker.png',
    'crossy-road': 'images/games/crossy-road.png',
    'bitlife': 'images/games/bitlife.jpg',
    'chrome-dino': 'images/games/chrome-dino.png',
    'doge-miner': 'images/games/doge-miner.png',
    'drive-mad': 'images/games/drive-mad.png',
    'doodle-jump': 'images/games/doodle-jump.png',
    'drift-boss': 'images/games/drift-boss.png',
    'dune': 'images/games/dune.png',
    '1.5.2': 'images/games/eaglercraft.png',
    '1.8.8': 'images/games/eaglercraft.png',
    'flappy-bird': 'images/games/flappy-bird.png',
    'getaway-shootout': 'images/games/getaway-shootout.png',
    'mario-game': 'images/games/mario-game.png',
    'monkey-mart': 'images/games/monkey-mart.png',
    'ovo': 'images/games/ovo.png',
    'ovo-2': 'images/games/ovo.png',
    'retro-bowl': 'images/games/retro-bowl.png',
    'rocket-league': 'images/games/rocket-league.png',
    'slope': 'images/games/slope.png',
    'snow-rider': 'images/games/snow-rider.png',
    'space-invaders': 'images/games/space-invaders.png',
    'stickman-hook': 'images/games/stickman-hook.png',
    'subway-surfers': 'images/games/subway-surfers.png',
    'time-shooter-3': 'images/games/time-shooter-3.png',
    'tiny-fishing': 'images/games/tiny-fishing.png',
    'tunnel-rush': 'images/games/tunnel-rush.png',
    'vex-7': 'images/games/vex-7.png',
    'x-trench-run': 'images/games/x-trench-run.png',
    'yohoho': 'images/games/yohoho.png',
    'gun-spin': 'images/games/gun-spin.png',
}


// Get keys and values of the images object
const itemIds = Object.keys(images);
const imagePaths = Object.values(images);

function updateItems() {
  for (let i = 0; i < itemIds.length; i++) {
    const itemId = itemIds[i]; // Use a descriptive variable name
    const imagePath = imagePaths[i];

    document.getElementById(itemId).addEventListener('mouseover', (e) => {
      console.log(`Item with ID: ${itemId}, Image Path: ${imagePath}`);
      info.src = imagePath
      info.style.top = e.clientY - 30 + 'px'
      //info.style.left = e.clientX - 50 - (10/100 * window.innerWidth) + 'px'
      info.style.display = 'block'
      console.log(info.style.height)
    });
    document.getElementById(itemId).addEventListener('mouseout', (e) => {
        info.style.display = 'none'
      });
  }
}

// Call updateItems directly (no need for timer)
updateItems();
