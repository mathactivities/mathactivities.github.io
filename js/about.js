if (window.location.hash == null) {
	window.location.innerHTML = 
	` <header>
	<div id = "navBg"></div>
	<div class = "welcome-text"> 
		<div id="right">
	  <div class="logo">
			<img src="images/gorrilamonk.png" draggable="false">
	  </div>
	  <h1><span>Become a</span> Gorrrilla Monk</h1>
			<div id="links">
			<img onclick = "window.location.href = 'https://' + window.location.hostname" id = "logo"src="images/gorrilamonk.png" alt="logo">
			<span onclick = "window.location.href = 'https://' + window.location.hostname" id = "name">Gorrrila Monk</span>
			<span onclick="about()" id = "about">About</span>
			<span onclick = "contact()"id = "contact">Contact</span>
			</div>
				<input type="text" id="searchInput" placeholder="Search Games...">
		</div>   
	
	<ul id="itemList">
	  <li id = "slope"onclick="window.location.href='gameIframe/#slope'">Slope</li>
	  <li id = "cluster-rush"onclick="window.location.href='gameIframe/#clusterrush'">Cluster Rush</li>
	  <li id = "1v1.lol"onclick="window.location.href='gameIframe/#1v1.lol'">1v1.lol</li>
	  <li id = "time-shooter-3"onclick="window.location.href='gameIframe/#timeshooter3'">Timeshooter 3</li>
	  <li id = "yohoho"onclick="window.location.href='gameIframe/#yohoho'">Yohoho</li>
	  <li id = "cookie-clicker" onclick="window.location.href='gameIframe/#cookieclicker'">Cookie Clicker</li>
	  <li id = "x-trench-run"onclick="window.location.href='gameIframe/#x-trench-run'">X Trench Run</li>
	  <li id = "vex-7"onclick="window.location.href='gameIframe/#vex7'">Vex 7</li>
	  <li id= "1.8.8"onclick="window.location.href='gameIframe/#1.8.8'">Eaglercraft 1.8.8 with single player</li>
	  <li id = "stickman-hook"onclick="window.location.href='gameIframe/#stickman-hook'">Stickman Hook</li>
	  <li id = "retro-bowl" onclick="window.location.href='gameIframe/#retro-bowl'">Retro Bowl</li>
	  <li id = "monkey-mart"onclick="window.location.href='gameIframe/#monkey-mart'">Monkey Mart</li>
	  <li id = "1.5.2"onclick="window.location.href='gameIframe/#precision-client'">Eaglercraft with mods (1.5.2)</li>
	  <li id = "getaway-shootout"onclick="window.location.href='gameIframe/#getaway-shootout'">Getaway Shootout</li>
	  <li id = "dune"onclick="window.location.href='gameIframe/#dune'">Dune</li>
	  <li id = "drift-boss"onclick="window.location.href='gameIframe/#drift-boss'">Drift Boss</li>
	  <li id = "doodle-jump"onclick="window.location.href='gameIframe/#doodle-jump'">Doodle Jump</li>
	  <li id = "bitlife"onclick="window.location.href='gameIframe/#bit-life'">Bit Life</li>
	  <li id = "2048"onclick="window.location.href='gameIframe/#2048'">2048</li>
	  <li id = "chrome-dino"onclick="window.location.href='gameIframe/#chrome-dino'">Chrome Dino</li>
	  <li id = "drive-mad"onclick="window.location.href='gameIframe/#drive-mad'">Drive Mad</li>
	  <li id = "space-invaders"onclick="window.location.href='gameIframe/#SPACEINVADERS'">Space Invaders</li>
	  <li id = "ovo"onclick="window.location.href='gameIframe/#ovo/1.4.4'">OvO</li>
	  <li id = "ovo-2"onclick="window.location.href='gameIframe/#ovo/2.0.2alpha'">OvO 2</li>
	  <li id='tunnel-rush'onclick="window.location.href='gameIframe/#tunnel-rush'">Tunnel Rush</li>
	  <li id = "tiny-fishing" onclick="window.location.href='gameIframe/#tiny-fishing'">Tiny Fishing</li>
	  <li id = "mario-game"onclick="window.location.href='gameIframe/#mario-game'">Mario Game</li>
	  <li id='flappy-bird'onclick="window.location.href='gameIframe/#flappy-bird'">Flappy Bird</li>
	  <li id='doge-miner'onclick="window.location.href='gameIframe/#doge-miner'">Doge Miner</li>
	  <li id='crossy-road'onclick="window.location.href='gameIframe/#doge-miner'">Crossy Road</li>
	  <li id = "rocket-league" onclick="window.location.href='gameIframe/#rocket-league'">Rocket League</li>
	  <li id = 'subway-surfers' onclick="window.location.href='gameIframe/#subway-surfers'">Subway Surfers</li>
	  <li id = "snow-rider" onclick="window.location.href='gameIframe/#snow-rider'">Snow Rider 3d</li>
	  <li id = "gun-spin" onclick="window.location.href='gameIframe/#gun-spin'">Gun Spin</li>
	</ul>
	<img id= "info" src = "images/games/1v1.lol.png">

	</div>
	
</header>
<script>
	const searchInput = document.getElementById('searchInput');
	const itemList = document.getElementById('itemList');
	const items = Array.from(itemList.getElementsByTagName('li'));
	console.log(items)
	console.log(items.length)
	searchInput.addEventListener('input', function() {
	const searchTerm = searchInput.value.toLowerCase();
		items.forEach(function(item) {
			const itemName = item.textContent.toLowerCase();
			if (itemName.includes(searchTerm)) {
				item.classList.remove('hide');
			} else {
				item.classList.add('hide');
			}
		});
	});
</script>  

<script src="js/gameInfo.js"></script>
<script src="js/about.js"></script>
<script src="js/contact.js"></script> `
}

function about() {
	
	window.location.hash = 'about'
	document.body.innerHTML = `
<header>
        <div id = "navBg"></div>
        <div class = "welcome-text"> 
            <div id="right">
          <div class="logo">
                <img src="images/gorrilamonk.png" draggable="false">
          </div>
          <h1><span>What is</span> Gorrrilla Monk</h1>
                <div id="links">
                <img onclick = "window.location.href = 'https://' + window.location.hostname" id = "logo"src="images/gorrilamonk.png" alt="logo">
                <span onclick = "window.location.href = 'https://' + window.location.hostname" id = "name">Gorrrila Monk</span>
                <span onclick="about()" id = "about">About</span>
                </div>
			</div>   
        
		
		<div id = "about-info">
		Gorrrila Monk is dedicated to provide innocent young children happiness when all of their freedom is pulled away by their schools. We want to give students a new modern-looking platform to game. This is a website created only by one creator who is anonymous. They are fascinated by technology and biology, starting off their life with a simple platform to game.
		</div>

        </div>
		
    </header>
`
}

if (window.location.hash.slice(1) == 'about'){
	document.body.innerHTML = `
<header>
        <div id = "navBg"></div>
        <div class = "welcome-text"> 
            <div id="right">
          <div class="logo">
                <img src="images/gorrilamonk.png" draggable="false">
          </div>
          <h1><span>What is</span> Gorrrilla Monk</h1>
                <div id="links">
                <img onclick = "window.location.href = 'https://' + window.location.hostname" id = "logo"src="images/gorrilamonk.png" alt="logo">
                <span onclick = "window.location.href = 'https://' + window.location.hostname" id = "name">Gorrrila Monk</span>
                <span onclick="about()" id = "about">About</span>
                </div>
			</div>   
        
		
		<div id = "about-info">
		Gorrrila Monk is dedicated to provide innocent young children happiness when all of their freedom is pulled away by their schools. We want to give students a new modern-looking platform to game. This is a website created only by one creator who is anonymous. They are fascinated by technology and biology, starting off their life with a simple platform to game.
		</div>

        </div>
		
    </header>`
}

console.log(window.location.hash)