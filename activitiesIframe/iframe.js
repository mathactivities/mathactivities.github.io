var fragmentIdentifier = window.location.hash.slice(1)
var games = ['rocket-league', 'subway-surfers', 'snow-rider', 'gun-spin', 'n-gon', 'soccer-random', 'basket-random', 'super-liquid-soccer']
var flash = ['escape-the-closet'    ,      
    'riddle-transfer'              ,          
    'escape-the-freezer'         ,
    'rogue-soul-2',
    'achievement-unlocked-2'     ,
    'escape-the-phonebooth'      ,
    'rogue-soul',
    'achievement-unlocked-3'     ,
    'escape-the-shack'           ,
    'stealing-the-diamond',
    'achievement-unlocked'       ,
    'escaping-the-prison'        ,
    'stick-war',
    'age-of-war-hacked'          ,
    'factory-balls'            ,  
    'submachine-0',
    'age-of-war'              ,   
    'flash-chess'             ,   
    'submachine-10',
    'bloons-td-1'            ,    
    'fleeing-the-complex'   ,     
    'submachine-2',
    'bloons-td-2'         ,       
    'gun-mayhem-2'         ,      
    'submachine-3',
    'bloons-td-3'       ,        
    'gun-mayhem'    ,             
    'submachine-32-chambers',
    'bloons-td-4'          ,     
    'infiltrating-the-airship'   ,
    'submachine-4',
    'bloons'       ,              
    'learn-to-fly-2'     ,        
    'submachine-5',
    'bloxorz'         ,           
    'learn-to-fly-3'    ,         
    'submachine-6' ,
    'breaking-the-bank'   ,       
    'learn-to-fly-idle'     ,     
    'submachine-7',
    'cat-ninja'  ,                
    'learn-to-fly'      ,         
    'submachine-8' ,
    'creative-kill-chamber'   ,  
    'papas-freezeria'       ,      
    'submachine-9' ,
    'curveball' ,                
    'papas-pizzaria'     ,        
    'submachine-flf' ,
    'dont-escape-2 '  ,           
    'raft-wars-2'  ,             
    'submachine' ,
    'dont-escape-3'  ,            
    'raft-wars'  ,                
    'sugar-sugar',
    'dont-escape'   ,             
    'riddle-school-2'   ,         
    'the-impossible-quiz',
    'duck-life-2'       ,         
    'riddle-school-3',         
    'this-is-the-only-level-2',
    'duck-life-3'  ,           
    'riddle-school-4'   ,         
    'this-is-the-only-level',
    'duck-life',                  
    'riddle-school-5'  ,         
    'ultimate-chess',
    'escape-the-bathroom'  ,    
    'riddle-school',
    'escape-the-car' ,            
   'riddle-transfer-2']
var iframe = document.createElement('iframe');

iframe.src = "../activities/"+ fragmentIdentifier
for (var i = 0; i < games.length; i++){
    if (fragmentIdentifier == games[i]){
        iframe.src = '../' + fragmentIdentifier
    }
}

for (var i = 0; i < flash.length; i++){
    if (fragmentIdentifier == flash[i]){
        iframe.src = '../activities/flash/?game=' + fragmentIdentifier
    }
}

iframe.style.border='none';
iframe.style.width = '100%' ;
iframe.style.height = "100vh"
iframe.allowFullscreen = true
iframe.style.margin = '0';

document.body.appendChild(iframe);

iframe.focus()

var back = document.getElementById('return')
back.addEventListener('click', ()=>{
    window.location.href = '../activities/flash/main.html'
})

var fullscreen = document.getElementById('fullscreen')
fullscreen.addEventListener('click', ()=>{
    if (fullscreen.requestFullscreen) {
        iframe.requestFullscreen();
      }
})
