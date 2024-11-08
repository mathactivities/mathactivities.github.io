const info = document.getElementById('info')
const e = "images/games/"
const p = '.png'

const itemIds = ['2048', '1v1.lol', 'cluster-rush', 'cookie-clicker', 'crossy-road', 'bitlife', 'chrome-dino', 'rocket-league', 'doge-miner', 'drive-mad', 'doodle-jump', 'drift-boss', 'dune', 'space-invaders', 'stickman-hook', '1.5.2', '1.8.8', 'flappy-bird', 'getaway-shootout', 'mario-game', 'monkey-mart', 'ovo', 'ovo-2', 'retro-bowl', 'slope', 'snow-rider', 'subway-surfers', 'time-shooter-3', 'tiny-fishing', 'tunnel-rush', 'vex-7', 'x-trench-run', 'yohoho', 'gun-spin', 'launcha-libre', 'escape-the-closet', 'riddle-transfer', 'escape-the-freezer', 'rogue-soul-2', 'achievement-unlocked-2', 'escape-the-phonebooth', 'rogue-soul', 'achievement-unlocked-3', 'escape-the-shack', 'stealing-the-diamond', 'achievement-unlocked', 'escaping-the-prison', 'stick-war', 'age-of-war-hacked', 'factory-balls', 'submachine-0', 'age-of-war', 'flash-chess', 'submachine-10', 'bloons-td-1', 'fleeing-the-complex', 'submachine-2', 'bloons-td-2', 'gun-mayhem-2', 'submachine-3', 'bloons-td-3', 'gun-mayhem', 'submachine-32-chambers', 'bloons-td-4', 'infiltrating-the-airship', 'submachine-4', 'bloons', 'learn-to-fly-2', 'submachine-5', 'bloxorz', 'learn-to-fly-3', 'submachine-6', 'breaking-the-bank', 'learn-to-fly-idle', 'submachine-7', 'cat-ninja', 'learn-to-fly', 'submachine-8', 'creative-kill-chamber', 'papas-freezeria', 'submachine-9', 'curveball', 'papas-pizzaria', 'submachine-flf', 'dont-escape-2 ', 'raft-wars-2', 'submachine', 'dont-escape-3', 'raft-wars', 'sugar-sugar', 'dont-escape', 'riddle-school-2', 'the-impossible-quiz', 'duck-life-2', 'riddle-school-3', 'this-is-the-only-level-2', 'duck-life-3', 'riddle-school-4', 'this-is-the-only-level', 'duck-life', 'riddle-school-5', 'ultimate-chess', 'escape-the-bathroom', 'riddle-school', 'escape-the-car', 'riddle-transfer-2']

const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    console.log(`Item with ID: ${item.id}, Image Path: ${'images/games/' + item.id + '.png'}`);
      info.src = 'images/games/' + item.id + '.png'
      info.style.top = e.clientY - 50 + 'px'
      console.log(window.scrollY)
      info.style.left = e.clientX + 30+ 'px'
      info.style.display = 'block'
      if (parseFloat(info.style.top) > window.innerHeight - 100){
        info.style.top = e.clientY - 100 + 'px'
      }
  });
  item.addEventListener('mouseout', (e) => {
    info.style.display = 'none'
  });
});
