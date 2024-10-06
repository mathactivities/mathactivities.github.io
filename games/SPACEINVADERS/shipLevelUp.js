function changeShipCostume() {
    if (window.score == 70) {
        ship.style.width = 0.08 * parseInt(window.innerWidth) + 50 + "px";
        ship.style.height = ship.style.width
        ship.style.backgroundImage = "url('images/spaceship1.png')"
    } 
    else if (window.score == 150) {
        ship.style.width = 0.06 * parseInt(window.innerWidth) + 50 + "px";
        ship.style.height = ship.style.width
        ship.style.backgroundImage = "url('images/spaceship2.png')"
    }
    else if (window.score == 250) {
        ship.style.width = 0.08 * parseInt(window.innerWidth) + 50 + "px";
        ship.style.height = ship.style.width
        ship.style.backgroundImage = "url('images/spaceship3.png')"
    }
    else if (window.score == 600) {
        ship.style.width = 0.12 * parseInt(window.innerWidth) + 50 + "px";
        ship.style.height = ship.style.width
        ship.style.backgroundImage = "url('images/spaceship.png')"
    }
}

setInterval(changeShipCostume, 0)