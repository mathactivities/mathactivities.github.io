var enemyShips = document.getElementById("enemyShips")
var enemyClone;
var enemyTop = 0
var columnCounter = 0
var enemies;
var bulletsNum;
window.score =0
var randomWidth
var goodShip = document.getElementById("spaceShip")
 window.speed =6
var lost = false;
 

function duplicate(randomColumn, randomWidth){
   while (columnCounter < randomColumn){
      for (var i = 1; i <  Math.abs(Math.floor(window.innerWidth/enemyShips.width - 20)); i++){
         enemyShips.src = "images/enemy" + Math.floor(Math.random() * 9 + 1) + ".png"
         enemyShips.style.visibility = "hidden"
         enemyShips.style.display = "block"
         enemyClone = enemyShips.cloneNode(true)
         enemyClone.id = ""
         enemyClone.style.visibility = "visible"
         enemyClone.style.width = enemyShips.style.width
         enemyClone.style.height = enemyShips.style.height
         enemyClone.style.left = parseInt(enemyShips.style.width) * i + 10 + "px"
         enemyClone.style.top = parseInt(enemyTop) + (30 * columnCounter) + "px"
         document.getElementById("gameArea").appendChild(enemyClone)
         console.log(Math.abs(Math.floor(window.innerWidth/enemyShips.width - 20)))

      }
      columnCounter++
   }

   columnCounter = 0
}


duplicate(Math.floor(Math.random()*6 + 1))

function ifEnemiesLessThanOne(){
   if (enemies.length == 0){
      duplicate(Math.floor(Math.random()*6 + 1),)
      window.speed = window.speed + 0.5
   }
}

function remove() {
   enemies = document.querySelectorAll(".enemies")
   if (enemies.length > 0){
      if (parseInt(enemies[enemies.length - 1].style.top) > window.innerHeight){
         for (var i = 1; i < enemies.length; i++) {
            var enemy = enemies[i]
            document.getElementById("gameArea").removeChild(enemy)
         }
         
      }
   }
   if (lost == false){
      ifEnemiesLessThanOne()
   }
}

function ifTouchingBullet() {
   bulletsNum = bullets;
   enemies = document.querySelectorAll(".enemies");
 
   for (var i = 0; i < enemies.length; i++) {
     var enemy = enemies[i];
 
     for (var b = 0; b < bulletsNum.length; b++) {
       var bullet = bulletsNum[b];
       var enemyRect = enemy.getBoundingClientRect();
       var bulletRect = bullet.getBoundingClientRect();
 
       if (
         bulletRect.left <= enemyRect.right &&
         bulletRect.right >= enemyRect.left &&
         bulletRect.top <= enemyRect.bottom &&
         bulletRect.bottom >= enemyRect.top
       ) {
         if (enemy.parentNode) {
            window.score++
            enemy.parentNode.removeChild(enemy);
            document.getElementById("score").innerHTML = "Score: " + window.score * 100
            console.log(`Score: ${window.score}!`)
          }
          
          if (bullet.parentNode) {
            bullet.parentNode.removeChild(bullet);
          }
       }
     }
   }
 }
 
 function removeAll(){
   for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i]
      document.getElementById("gameArea").removeChild(enemy)
   }
}

 function ifTouchingSpaceShip() {
   if (enemies.length > 1){
      enemies = document.querySelectorAll(".enemies");
      var enemy = enemies[1];
      var bullet = goodShip;
      if (enemies.length > 1){
      var enemyRect = enemy.getBoundingClientRect();
      }
      var bulletRect = bullet.getBoundingClientRect();
      if (enemies.length > 1){
         if (
               
               bulletRect.top + 20 <= enemyRect.bottom &&
               bulletRect.bottom - 20 >= enemyRect.top
         ) {
            document.querySelector("#lost").style.visibility = "visible"
            removeAll()
            document.querySelector("#lost span").textContent = window.score * 100
            lost = true
         }
      }
   }
 }


setInterval(remove, 0)

setInterval(ifTouchingSpaceShip, 0)
setInterval(ifTouchingBullet, 0)

function resetGame() {
   // Reset variables and game elements as needed
   window.score = 0;
   document.getElementById("score").innerHTML = "Score: " + window.score * 100;
 
   // Remove existing enemies
   var existingEnemies = document.querySelectorAll(".enemies");
   existingEnemies.forEach(function (enemy) {
     document.getElementById("gameArea").removeChild(enemy);
   });
   window.speed = 6
   ship.style.backgroundImage = "url('images/spaceship.png')"
   ship.style.width = 0.12 * parseInt(window.innerWidth) + 50 + "px";
   ship.style.height = ship.style.width
   document.getElementById("lost").style.visibility = "hidden"
   duplicate(Math.floor(Math.random() * 6 + 1));
 }

 document.getElementById('restart1').addEventListener('click', resetGame)

