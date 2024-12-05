import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get, off, child} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

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

if (window.top.location.href.includes("/activities/flash/")){
    window.location.replace("../../401.html")
}


onValue(ref(db, `users/${userUID}/localstorageData`), (snapshot) => {
    const value = snapshot.val();
    const parseValue = JSON.parse(value);
    const e = parseValue
    let totalString = ""
    console.log(parseValue)
    console.log("Parsed Data:", Object.keys(e));
    for (var i = 0; i < Object.keys(e).length; i++){
        const key = Object.keys(e)[i]
        console.log(key)
        totalString += parseValue[key]
        console.log(totalString)
    }
    totalString = JSON.parse(totalString)
    console.log(totalString)
    console.log(Object.keys(totalString))
    for (var i = 0; i < Object.keys(totalString).length; i++){
        const key = Object.keys(totalString)[i]
        console.log(key)
        localStorage.setItem(key, totalString[key])
    }
    start = true
  }, {
    onlyOnce: true
  });

setInterval(function(){
    if (start == true){
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
    }
}, 500)

function writeUserData(gta) {
    set(ref(db, `users/${userUID}/localstorageData`), gta)
}