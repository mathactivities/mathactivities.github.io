var fragmentIdentifier = window.location.hash.slice(1)
var games = ['rocket-league', 'subway-surfers', 'snow-rider']
var iframe = document.createElement('iframe');

iframe.src = "https://" + window.location.hostname + '/games/' + fragmentIdentifier
for (var i = 0; i < games.length; i++){
    if (fragmentIdentifier == games[i]){
        iframe.src = 'https://' + window.location.hostname + '/' + fragmentIdentifier
    }
}

iframe.style.border='none';
iframe.style.width = '100%' ;
iframe.style.height = "100vh"
iframe.style.margin = '0';

document.body.appendChild(iframe);

iframe.focus()

var back = document.getElementById('return')
back.addEventListener('click', ()=>{
    window.location.href = "https://" + window.location.hostname
})
