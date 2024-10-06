enemies = document.querySelectorAll(".enemies")
var moveCount = 0
var frames;
var x = true;
var speed = window.speed
window.animationFrameId
function move() {
    if (enemies.length > 0){
        if (x==true && parseFloat(enemies[enemies.length - 1].style.left) + parseFloat(enemies[0].style.width) < window.innerWidth){
            moveCount = 0
            for (var i = 0; i < enemies.length; i++){
                var enemy = enemies[i];
                var currentLeft = parseFloat(enemy.style.left) || 0
                enemy.style.left = currentLeft + speed + 'px';

            }
        } 
        else {
            x = false;
            moveCount = 1
            for (var j = 0; j < enemies.length; j++){
                var enemy = enemies[j];
                var currentLeft = parseFloat(enemy.style.left)
                enemy.style.left = currentLeft - speed + 'px';
            }
        }
        if (x==false && parseFloat(enemies[0].style.left) <= -(parseFloat(enemies[0].style.width))) {
            x= true
        }

        if (parseFloat(enemies[0].style.left) <= -(parseFloat(enemies[0].style.width))){
            for (var k = 0; k < enemies.length; k++){
                enemies[k].style.top = parseFloat(enemies[k].style.top) + 50 + "px" || 0 + 50 + "px"
            }

        } 

        if (parseFloat(enemies[enemies.length - 1].style.left)  + parseFloat(enemies[0].style.width)> window.innerWidth){
            for (var k = 0; k < enemies.length; k++){
                enemies[k].style.top = parseFloat(enemies[k].style.top) + 50 + "px" || 0 + 50 + "px"
            }
            
        } 
    }

   
    
    window.enemyFrameId = window.requestAnimationFrame(move)
}
  
move();

function newDupMove(){
    if (enemies.length == 0 ){
        enemies = document.querySelectorAll(".enemies")
    }
}

setInterval(newDupMove, 0);



