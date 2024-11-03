const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = Array.from(itemList.getElementsByTagName('li'));
console.log(items)
console.log(items.length)
document.getElementById("no-of-games").textContent = items.length + " GAMES"
const genres = {
    'hot': Array.from(itemList.getElementsByClassName('hot')),
    'shooting': Array.from(itemList.getElementsByClassName('shooting')),
    'car': Array.from(itemList.getElementsByClassName('car')),
    'multiplayer': Array.from(itemList.getElementsByClassName('multiplayer')),
    'singleplayer': Array.from(itemList.getElementsByClassName('singleplayer')),
    'flash': Array.from(itemList.getElementsByClassName('retro')),
    'parkour': Array.from(itemList.getElementsByClassName('parkour')),
    'sports': Array.from(itemList.getElementsByClassName('sport')),
    'sport': Array.from(itemList.getElementsByClassName('sport')),
}
const genreKeys = Object.keys(genres)
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();            
    for (var i = 0; i < genreKeys.length; i++) {
        if (searchTerm.startsWith("/cat ") && genreKeys[i] == searchTerm.substring(5)) {
            items.forEach(item => {
                item.style.display = item.classList.contains(genreKeys[i]) ? 'block' : 'none';
            });
        } else if (!searchTerm.startsWith("/cat ")) {
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
