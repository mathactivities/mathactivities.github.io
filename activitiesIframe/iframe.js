import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get, off, child } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSy5rlU8c-oPxLSHMAinW3vI9EhCkqlEE",
    authDomain: "science-work-de587.firebaseapp.com",
    databaseURL: "https://science-work-de587-default-rtdb.firebaseio.com",
    projectId: "science-work-de587",
    storageBucket: "science-work-de587.firebasestorage.app",
    messagingSenderId: "925820192132",
    appId: "1:925820192132:web:5876df20b0934367a209d1",
    measurementId: "G-L3LWT54PT5"
};

const userInfo = JSON.parse(localStorage.getItem("mathActivitiesSettings"))
const app = initializeApp(firebaseConfig);
const userUID = userInfo.mathActivitiesUid
const db = getDatabase(app);
const auth = getAuth(app);
let start = false
var fragmentIdentifier = window.location.hash.slice(1)
let totalError;
var flash = ['escape-the-closet',
    'riddle-transfer',
    'escape-the-freezer',
    'rogue-soul-2',
    'achievement-unlocked-2',
    'escape-the-phonebooth',
    'rogue-soul',
    'achievement-unlocked-3',
    'escape-the-shack',
    'stealing-the-diamond',
    'achievement-unlocked',
    'escaping-the-prison',
    'stick-war',
    'age-of-war-hacked',
    'factory-balls',
    'submachine-0',
    'age-of-war',
    'flash-chess',
    'submachine-10',
    'bloons-td-1',
    'fleeing-the-complex',
    'submachine-2',
    'bloons-td-2',
    'gun-mayhem-2',
    'submachine-3',
    'bloons-td-3',
    'gun-mayhem',
    'submachine-32-chambers',
    'bloons-td-4',
    'infiltrating-the-airship',
    'submachine-4',
    'bloons',
    'learn-to-fly-2',
    'submachine-5',
    'bloxorz',
    'learn-to-fly-3',
    'submachine-6',
    'breaking-the-bank',
    'learn-to-fly-idle',
    'submachine-7',
    'cat-ninja',
    'learn-to-fly',
    'submachine-8',
    'creative-kill-chamber',
    'papas-freezeria',
    'submachine-9',
    'curveball',
    'papas-pizzaria',
    'submachine-flf',
    'dont-escape-2 ',
    'raft-wars-2',
    'submachine',
    'dont-escape-3',
    'raft-wars',
    'sugar-sugar',
    'dont-escape',
    'riddle-school-2',
    'the-impossible-quiz',
    'duck-life-2',
    'riddle-school-3',
    'this-is-the-only-level-2',
    'duck-life-3',
    'riddle-school-4',
    'this-is-the-only-level',
    'duck-life',
    'riddle-school-5',
    'ultimate-chess',
    'escape-the-bathroom',
    'riddle-school',
    'escape-the-car',
    'riddle-transfer-2']

const other = ['boxing-random', 'chicken-jockey-clicker', 'eag1-11-2', 'escaperoad', 'escaperoad2', 'escaperoadcity2', 'gladis', 'monkey-mart', 'n-gon', 'only-up', 'paperio2', 'polytrack', 'precision-client', 'retro-bowl', 'slope', 'slope-2', 'slope-3', 'snow-rider', 'soccer-random', 'subway-surfers', 'super-liquid-soccer', 'super-mario-64', 'superhot', 'tag', 'temple-run-2', 'tetrs', 'time2', 'timeshooter3', 'tiny-fishing', 'topguns.io', 'tunnel-rush', 'vex7', 'w-flash', 'x-trench-run', 'yohoho', "tomb-of-the-mask", "ultimate-car-driving", "elastic-man", "slow-roads-io", "football-legends", "snow-ball-io", "armed-forces-io", "among-us", "war-strike", "csgo", "viking-clash", "deadly-decent"]
const external = {
    ublock: "https://bob-one-tau.vercel.app/",
    soundboard: "../activities/flash/soundboard.html",
    slope: "https://slope-game.github.io/",
    "slope-2": "https://slope2.github.io/",
    "slope-3": "https://slope3.github.io/",
    "super-mario-64": "https://sm64web.com/",
    "tomb-of-the-mask": "https://tomb-of-the-mask.github.io/",
    "ultimate-car-driving": "https://ultimate-car-driving.github.io/",
    "elastic-man": "https://elastic-man.github.io/",
    "slow-roads-io": "https://slowroads.io/",
    "football-legends": "https://football-legends.github.io/",
    "snow-ball-io": "https://snowball-io.github.io/",
    "armed-forces-io": "https://armedforces.io/",
    "among-us": "https://among-us-online.github.io/",
    "war-strike": "https://warstrike.io/",
    csgo: "https://csgo-online.github.io/",
    "viking-clash": "https://vikingclash.io/",
    "deadly-decent": "https://deadlydecent.github.io/",
    "boxing-random": "https://boxing-random.github.io/",
    "chicken-jockey-clicker": "https://chicken-jockey-clicker.github.io/",
    "eag1-11-2": "https://eag1-11-2.github.io/",
    escaperoad: "https://escaperoad.github.io/",
    escaperoad2: "https://escaperoad2.github.io/",
    escaperoadcity2: "https://escaperoadcity2.github.io/",
    gladis: "https://gladis.github.io/",
    "monkey-mart": "https://monkey-mart.github.io/",
    "n-gon": "https://n-gon.github.io/",
    "only-up": "https://only-up.github.io/",
    polytrack: "https://polytrack.github.io/",
    "precision-client": "https://precision-client.github.io/",
    "retro-bowl": "https://retro-bowl.github.io/",
    "snow-rider": "https://snow-rider.github.io/",
    "soccer-random": "https://soccer-random.github.io/",
    "subway-surfers": "https://subway-surfers.github.io/",
    "super-liquid-soccer": "https://super-liquid-soccer.github.io/",
    superhot: "https://superhot.github.io/",
    tag: "https://tag.github.io/",
    "temple-run-2": "https://temple-run-2.github.io/",
    tetrs: "https://tetrs.github.io/",
    time2: "https://time2.github.io/",
    timeshooter3: "https://timeshooter3.github.io/",
    "tiny-fishing": "https://tiny-fishing.github.io/",
    "topguns.io": "https://topguns.io/",
    "tunnel-rush": "https://tunnel-rush.github.io/",
    vex7: "https://vex7.github.io/",
    "w-flash": "https://w-flash.github.io/",
    "x-trench-run": "https://x-trench-run.github.io/",
    yohoho: "https://yohoho.github.io/"
}
const externalEntries = Object.entries(external)
var iframe = document.createElement('iframe');

iframe.src = "../activities/" + fragmentIdentifier

for (var i = 0; i < flash.length; i++) {
    if (fragmentIdentifier == flash[i]) {
        iframe.src = '../activities/flash/?game=' + fragmentIdentifier
    }
}

for (var i = 0; i < other.length; i++) {
    if (fragmentIdentifier == other[i]) {
        iframe.src = '../activities/' + fragmentIdentifier
    }
}

for (var i = 0; i < externalEntries.length; i++) {
    if (fragmentIdentifier == externalEntries[i][0]) {
        iframe.src = externalEntries[i][1]
    }
}

try {
    iframe.style.border = 'none';
    iframe.id = "iframe"
    iframe.style.width = '100%';
    iframe.style.height = "100vh"
    iframe.allowFullscreen = true
    iframe.style.margin = '0';
    iframe.style.position = "absolute"
    iframe.style.zIndex = "500"
    iframe.style.top = "0"
    iframe.referrerPolicy = "no-referrer"
    iframe.sandbox = "allow-forms allow-modals allow-pointer-lock allow-presentation allow-same-origin allow-scripts"
    document.body.append(iframe)
} catch (error) {
    document.body.remove(iframe)
    document.getElementById("error").style.translate = "0% 0"
    document.getElementById("error").style.fontFamily = "monospace"
    document.getElementById("error").style.width = "70%"
    document.getElementById("error").style.height = "fit-content"
    document.getElementById("error").style.fontSize = "15px"
    document.getElementById("error").style.color = "rgb(200, 0, 0)"
    document.getElementById("error").style.fontWeight = "none"
    document.getElementById("error").style.marginTop = "30px"
    document.getElementById("error").style.textAlign = "left"
    document.getElementById("error").style.backgroundColor = "rgb(200, 200, 200)"
    totalError = error + error.stack
    document.getElementById("error").textContent = totalError
}

iframe.focus()

var back = document.getElementById('return')
back.addEventListener('click', () => {
    window.location.href = '../activities/flash/main.html?savedata=true'
})

var fullscreen = document.getElementById('fullscreen')
fullscreen.addEventListener('click', () => {
    if (fullscreen.requestFullscreen) {
        iframe.requestFullscreen();
    }
})

iframe.onload = function () {
    document.getElementById("load").remove()
}


setInterval(function () {
    function getLocalStorageKeysAsJSON() {
        const keys = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            keys[key] = localStorage.getItem(key);
        }
        return JSON.stringify(keys);
    }
    const combinedJSON = getLocalStorageKeysAsJSON();
    writeUserData(JSON.stringify(combinedJSON))
}, 500)

function writeUserData(gta) {
    set(ref(db, `users/${userUID}/localstorageData`), gta)
}
