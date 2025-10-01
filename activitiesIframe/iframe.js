import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get, off, child } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPoYZZ4uJSkZytTUNAstPrWKyhYF9wmLc",
    authDomain: "thingy-2f35d.firebaseapp.com",
    databaseURL: "https://thingy-2f35d-default-rtdb.firebaseio.com",
    projectId: "thingy-2f35d",
    storageBucket: "thingy-2f35d.firebasestorage.app",
    messagingSenderId: "93295196463",
    appId: "1:93295196463:web:cf072dae28eeaf692989da",
    measurementId: "G-CT1NYQ5W3L"
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
    soundboard: "../activities/flash/soundboard.html"
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
        iframe.src = '../other/' + fragmentIdentifier
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

const onlineRef = ref(db, `onlineUsers/${userUID}`);
set(onlineRef, { online: true, lastActive: Date.now() });

// Remove user from online list when they leave
window.addEventListener("beforeunload", () => {
  set(onlineRef, null);
});

const getStreak = onValue(ref(db, `users/${userUID}/streak`), (snapshot) => {
    const val = snapshot.val();

    function daysBetween(date1, date2) {
        const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        const diffTime = d2 - d1;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    if (val == null) {
        const streakData = {
            lastLoggedIn: new Date().toISOString().slice(0, 19),
            streak: 1,
            custom: false
        };
        set(ref(db, `users/${userUID}/streak`), JSON.stringify(streakData));
    } else {
        let object = val;
        if (typeof object === "string") object = JSON.parse(object);
        let stuff = object;
        if (typeof stuff === "string") stuff = JSON.parse(stuff);

        if (stuff.custom == null) stuff.custom = false;

        const lastDate = new Date(stuff.lastLoggedIn);
        const today = new Date();
        const diffDays = daysBetween(lastDate, today);

        if (diffDays === 1) {
            if (!stuff.custom) stuff.streak++;
            stuff.lastLoggedIn = today.toISOString().slice(0, 19);
            set(ref(db, `users/${userUID}/streak`), JSON.stringify(stuff));
            console.log("next day → streak incremented");
        } else if (diffDays > 1) {
            stuff.streak = 1;
            stuff.lastLoggedIn = today.toISOString().slice(0, 19);
            set(ref(db, `users/${userUID}/streak`), JSON.stringify(stuff));
            console.log("missed days → streak reset to 1");
        } else {
            console.log("already logged today → streak unchanged");
        }
    }
}, { onlyOnce: true });
