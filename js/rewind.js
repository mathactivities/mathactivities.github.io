import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"; import { getDatabase, ref, set, onValue, get, off, child} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js"; import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

let numbers = []
function loading(is, percent, maxpercent){
    if (is){
        if (localStorage.getItem("gatheredData") !== "true"){
            console.log("still running")
            const div = document.createElement("div")
            div.id = "loading-wait"
            div.innerHTML = "<img width = '300' style = 'border-radius:50%;'src = '../../images/gorrilamonk.png'><span style = 'font-size:50px;'>Gathering Data...</span><span style = 'font-size:30px;' id = 'loading-percent-timer'>0% there</span>"
            document.body.appendChild(div)
        }
    }
    else if (is == false){
        if (localStorage.getItem("gatheredData") !== "true"){
            const div = document.getElementById("loading-wait")
            
            function percentage(currentPercent, totalPercent){
                const e = currentPercent * 100
                let outOf100 = e / totalPercent
                numbers.push(outOf100)
                if (outOf100 !== document.getElementById("loading-percent-timer").textContent.split("%")[0] && numbers.length > 2){
                    document.getElementById("loading-percent-timer").textContent = numbers[numbers.length - 2] + "% there"
                }
                if (currentPercent/totalPercent == 1){
                    const the = document.createElement("button")
                    the.textContent = "Continue"
                    the.id = "thethethe"
                    the.onclick = function(){
                        document.getElementById("loading-wait").remove()
                    }
                    document.getElementById("loading-wait").appendChild(the)
                }
            }
            percentage(percent, maxpercent)
        }
    }
    if (is == "no"){
        document.getElementById("thingy").remove()
    }
}

const yoyoyo = document.getElementById("thingy")
console.log(yoyoyo)
function getInfo(){
    
}
if (localStorage.getItem("gatheredData") !== "true"){
    loading(true)
    console.log("yay")
}
if (localStorage.getItem("gatheredData") == "true") {
    loading("no")
}
getInfo()
console.log()
console.log(localStorage.getItem("gatheredData"))
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
let universalMessageHTML
if (window.top.location.href.includes("/activities/flash/")){
    window.location.replace("../../401.html")
}
onValue(ref(db, `universalMessageHTML`), (snapshot) => {
    universalMessageHTML = snapshot.val()
}, {onlyOnce: true})


onValue(ref(db, `users/${userUID}/localstorageData`), (snapshot) => {
    if (localStorage.getItem("gatheredData") !== "true"){
        const value = snapshot.val();
        const isNewUser = localStorage.getItem("ISNEWUSER-MATHACTIVITIES")
        const parseValue = JSON.parse(value);
        console.log(parseValue)
        const e = parseValue
        let totalString = ""
       //console.log(parseValue)
        //console.log("Parsed Data:", Object.keys(e));
        for (var i = 0; i < Object.keys(e).length; i++){
           const key = Object.keys(e)[i]
             //console.log(key)
            totalString += parseValue[key]
            if (localStorage.getItem("gatheredData") !== true){
               loading(false, i, Object.keys(e).length - 1)
            }
            /*if (localStorage.getItem("gatheredData") !== true){
                loadingPercentage(i + 1, Object.keys(e).length, true)
            }*/
              
                
            //console.log(totalString)
        }
        totalString = JSON.parse(totalString)
        localStorage.setItem("totalstring-download", JSON.stringify(totalString))
        //console.log(totalString.length)
        //console.log(Object.keys(totalString))
        for (var i = 0; i < Object.keys(totalString).length; i++){
            const key = Object.keys(totalString)[i]
            //console.log(key)
            localStorage.setItem(key, totalString[key])
             
        }
        const image = document.getElementById("logo-into-welcome")
        const words = document.getElementById("ee")
        const imageSrc = JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesprofilePic
        image.src = imageSrc
        image.style.width = "150px"
        image.style.height = "150px"
        //console.log(imageSrc)
        if (isNewUser == true){
            words.innerHTML =  `Welcome for the first time ${JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesdisplayName}! Go to this page: <span style = "color:rgb(0, 100, 200); cursor:pointer;"onclick = "window.location.href = 'about.html'">About</span> to learn more about what this website is! If you want to explore what this website has to offer go here: <span style = "color:rgb(0, 100, 200); cursor:pointer;"onclick = "window.location.href = 'about.html'">Explore</span>`
        }
        else {
            words.innerHTML =  `<span style = "font-size:45px;">Welcome ${JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesdisplayName}!</span> <br> ${universalMessageHTML}`
        }
        localStorage.setItem("gatheredData", true)
        start = true
    }
    else {
        start = true
    }
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


const queryString = window.location.search; // Get the query string from the URL
const urlParams = new URLSearchParams(queryString);

if (window.location.href.includes("?adminUser=true")){
    document.getElementById("adminSettings").classList.remove("hide")
}
else {
    document.getElementById("adminSettings").classList.add("hide")
}
