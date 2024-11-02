const info = document.getElementById('info')
const e = "images/games/"
const p = '.png'
//array of items of ids

const images = {
    '1v1.lol': 'images/games/1v1.lol.png',
    '2048': 'images/games/2048.png',
    'cluster-rush': 'images/games/cluster-rush.png',
    'cookie-clicker': 'images/games/cookie-clicker.png',
    'crossy-road': 'images/games/crossy-road.png',
    'bitlife': 'images/games/bitlife.png',
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
    'launcha-libre': 'images/games/launcha-libre.png',
    'escape-the-closet'  :  e + 'escape-the-closet' + p,      
    'riddle-transfer'      : e + 'riddle-transfer' + p ,          
    'escape-the-freezer' : e + 'escape-the-freezer' + p ,
    'rogue-soul-2': e + 'rogue-soul-2' + p ,
    'achievement-unlocked-2'  : e + 'achievement-unlocked-2' + p,
    'escape-the-phonebooth'  : e +'escape-the-phonebooth' + p    ,
    'rogue-soul': e + 'rogue-soul'+ p,
    'achievement-unlocked-3' :    e +'achievement-unlocked-3' + p,
    'escape-the-shack'    : e + 'escape-the-shack'+ p     ,
    'stealing-the-diamond' :e + 'stealing-the-diamond'+ p,
    'achievement-unlocked'   : e +'achievement-unlocked' + p ,
    'escaping-the-prison'   : e + 'escaping-the-prison' + p   ,
    'stick-war' : e +'stick-war' + p ,
    'age-of-war-hacked'   :    e +  'age-of-war-hacked'+ p    ,
    'factory-balls'    : e + 'factory-balls'  + p       ,  
    'submachine-0'   : e +  'submachine-0'  + p  ,
    'age-of-war'   : e +'age-of-war'  + p           ,   
    'flash-chess'      :  e + 'flash-chess'+ p      ,   
    'submachine-10' : e + 'submachine-10' + p,
    'bloons-td-1'    :  e +'bloons-td-1' + p      ,    
    'fleeing-the-complex' : e +'fleeing-the-complex' + p  ,     
    'submachine-2': e + 'submachine-2' + p,
    'bloons-td-2'  : e + 'bloons-td-2' + p      ,       
    'gun-mayhem-2'  : e + 'gun-mayhem-2' + p       ,      
    'submachine-3': e + 'submachine-3' + p,
    'bloons-td-3'   : e + 'bloons-td-3' + p    ,        
    'gun-mayhem' : e + 'gun-mayhem' + p   ,             
    'submachine-32-chambers': e + 'submachine-32-chambers' + p,
    'bloons-td-4'       : e + 'bloons-td-4' + p   ,     
    'infiltrating-the-airship' : e + 'infiltrating-the-airship' + p  ,
    'submachine-4': e + 'submachine-4' + p,
    'bloons'      : e + 'bloons' + p ,              
    'learn-to-fly-2'  : e + 'learn-to-fly-2' + p   ,        
    'submachine-5': e + 'submachine-5' + p,
    'bloxorz'     : e + 'bloxorz' + p    ,           
    'learn-to-fly-3' : e + 'learn-to-fly-3' + p   ,         
    'submachine-6' : e + 'submachine-6' + p,
    'breaking-the-bank': e + 'breaking-the-bank' + p   ,       
    'learn-to-fly-idle': e + 'learn-to-fly-idle' + p     ,     
    'submachine-7': e + 'submachine-7' + p,
    'cat-ninja': e + 'cat-ninja' + p  ,                
    'learn-to-fly'  : e + 'learn-to-fly' + p    ,         
    'submachine-8'     :e + 'submachine-8' + p ,
    'creative-kill-chamber' :e + 'creative-kill-chamber' + p  ,  
    'papas-freezeria' :e + 'papas-freezeria' + p      ,      
    'submachine-9':e + 'submachine-9' + p ,
    'curveball' :e + 'curveball' + p,                
    'papas-pizzaria' :e + 'papas-pizzaria' + p    ,        
    'submachine-flf' :e + 'submachine-flf' + p,
    'dont-escape-2 ' :e + 'dont-escape-2' + p ,           
    'raft-wars-2':e + 'raft-wars-2' + p  ,             
    'submachine':e + 'submachine' + p ,
    'dont-escape-3':e + 'dont-escape-3' + p  ,            
    'raft-wars' :e + 'raft-wars' + p ,                
    'sugar-sugar':e + 'sugar-sugar' + p,
    'dont-escape'  :e + 'dont-escape' + p ,             
    'riddle-school-2' :e + 'riddle-school-2' + p  ,         
    'the-impossible-quiz':e + 'the-impossible-quiz' + p,
    'duck-life-2'     :e + 'duck-life-2' + p  ,         
    'riddle-school-3':e + 'riddle-school-2' + p,         
    'this-is-the-only-level-2' :e + 'this-is-the-only-level-2' + p,
    'duck-life-3' :e + 'duck-life-3' + p ,           
    'riddle-school-4'  :e + 'riddle-school-4' + p ,         
    'this-is-the-only-level':e + 'this-is-the-only-level' + p,
    'duck-life':e + 'duck-life' + p,                  
    'riddle-school-5' :e + 'riddle-school-5' + p ,         
    'ultimate-chess':e + 'ultimate-chess' + p,
    'escape-the-bathroom' :e + 'escape-the-bathroom' + p ,    
    'riddle-school':e + 'riddle-school' + p,
    'escape-the-car':e + 'escape-the-car' + p ,            
    'riddle-transfer-2':e + 'riddle-transfer-2' + p,
}


// Get keys and values of the images object
const itemIds = Object.keys(images);
const imagePaths = Object.values(images);

function updateItems() {
  for (let i = 0; i < itemIds.length; i++) {
    const itemId = itemIds[i]; // Use a descriptive variable name
    const imagePath = 'images/games/' + itemId + '.png';
    document.getElementById(itemId).addEventListener('mousemove', (e) => {
      console.log(`Item with ID: ${itemId}, Image Path: ${imagePath}`);
      console.log(`height ${e.clientY}, Image Path: ${window.innerHeight}`);
      info.src = imagePath
      info.style.top = e.clientY - 50 + 'px'
      console.log(window.scrollY)
      info.style.left = e.clientX + 50 + 'px'
      info.style.display = 'block'

      //border checkers
      if (parseFloat(info.style.left) > window.innerWidth - 100){
        info.style.left = e.clientX - 50 + 'px'
      }
      if (parseFloat(info.style.top) > window.innerHeight - 100){
        info.style.top = e.clientY - 100 + 'px'
      }
    });
    document.getElementById(itemId).addEventListener('mouseout', () => {
        info.style.display = 'none'
    });
  }
}

updateItems()
