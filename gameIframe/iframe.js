var fragmentIdentifier = window.location.hash.slice(1)
var games = ['rocket-league', 'subway-surfers', 'snow-rider', 'gun-spin', 'launcha-libre']
var iframe = document.createElement('iframe');

iframe.src = "../games/"+ fragmentIdentifier
for (var i = 0; i < games.length; i++){
    if (fragmentIdentifier == games[i]){
        iframe.src = '../' + fragmentIdentifier
    }
}

iframe.style.border='none';
iframe.style.width = '100%' ;
iframe.style.height = "100vw"
iframe.style.margin = '0';

document.body.appendChild(iframe);

iframe.focus()

var back = document.getElementById('return')
back.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})
