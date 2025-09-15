const searchInput = document.getElementById('searchInput');
const bkaldl123dkd = document.getElementById('itemList');
const items = Array.from(bkaldl123dkd.getElementsByTagName('li'));
console.log(items)
console.log(items.length)
document.getElementById("no-of-games").textContent = items.length + " GAMES"
const genres = {
    'hot': Array.from(bkaldl123dkd.getElementsByClassName('hot')),
    'shoot': Array.from(bkaldl123dkd.getElementsByClassName('shooting')),
    'car': Array.from(bkaldl123dkd.getElementsByClassName('car')),
    'multiplayer': Array.from(bkaldl123dkd.getElementsByClassName('multiplayer')),
    'singleplayer': Array.from(bkaldl123dkd.getElementsByClassName('singleplayer')),
    'flash': Array.from(bkaldl123dkd.getElementsByClassName('retro')),
    'parkour': Array.from(bkaldl123dkd.getElementsByClassName('parkour')),
    'sport': Array.from(bkaldl123dkd.getElementsByClassName('sport')),
}
const genreKeys = Object.keys(genres)
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();            
    for (var i = 0; i < genreKeys.length; i++) {
        if (searchTerm.startsWith("/cat ") && genreKeys[i] == searchTerm.substring(5)) {
            items.forEach(item => {
                if (item.classList.contains(genreKeys[i])){
                    item.classList.remove('hide')
                }
                else {
                    item.classList.add('hide')
                }
            });
        } 
        else 
        if (!searchTerm.startsWith("/cat ")) {
            items.forEach(function(item) {
                const itemName = item.textContent.toLowerCase();
                if (itemName.includes(searchTerm)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        } 
    }
    
});
