import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"; import { getDatabase, ref, set, onValue, get, off, child} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js"; import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

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
            
            function percentage(currentPercent, totalPercent) {
                const outOf100 = Math.min(Math.round((currentPercent / totalPercent) * 100), 100);
            
                // Debugging Output
                console.log(
                    `currentPercent: ${currentPercent}, totalPercent: ${totalPercent}, ` +
                    `outOf100: ${outOf100}`
                );
            
                // Update DOM
                document.getElementById("loading-percent-timer").textContent =
                    outOf100 + "% there";
            
                // Add 'Continue' button when complete
                if (currentPercent >= totalPercent) {
                    const continueButton = document.createElement("button");
                    continueButton.textContent = "Continue";
                    continueButton.id = "thethethe";
                    continueButton.onclick = function () {
                        document.getElementById("loading-wait").remove();
                    };
                    if (!document.getElementById("thethethe")) {
                        document.getElementById("loading-wait").appendChild(continueButton);
                    }
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
    //window.location.replace("../../401.html")
}
onValue(ref(db, `universalMessageHTML`), (snapshot) => {
    universalMessageHTML = snapshot.val()
}, {onlyOnce: true})


const getStreak = onValue(ref(db, `users/${userUID}/streak`), (snapshot) => {
    const val = snapshot.val()

    function isNextDay(previousDate) {
        const currentDate = new Date();
        const prevDate = new Date(previousDate);
        const currentWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const previousWithoutTime = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate());
        const nextDay = currentWithoutTime.getTime() > previousWithoutTime.getTime();
        return nextDay
    }

    if (val == null){
        const streakData = {
            lastLoggedIn: new Date().toISOString().slice(0, 19),
            streak: 1,
            custom: false
        }
        set(ref(db, `users/${userUID}/streak`), JSON.stringify(streakData))
        document.getElementById("streak").innerHTML = `1 Day Streak <i class="fa-solid fa-fire" style="color:rgb(255, 115, 0);"></i>`
    } else {
        const object = JSON.parse(val)
        let stuff
        if (typeof object == "string"){
            stuff = JSON.parse(object)
        } else if (typeof object == "object"){
            stuff = object
        }
        if (stuff.custom == null){
            stuff.custom = false
        }
        if (isNextDay(stuff.lastLoggedIn)){
            console.log("next day")
            if (stuff.custom == false){
                stuff.streak++
            }
            stuff.lastLoggedIn = new Date().toISOString().slice(0, 19)
            set(ref(db, `users/${userUID}/streak`), JSON.stringify(stuff))
        } else {
            console.log("not next day")
        }

        document.getElementById("streak").innerHTML = `${stuff.streak} Day Streak <i class="fa-solid fa-fire" style="color:rgb(255, 115, 0);"></i>`
    }
}, {onlyOnce: true})


const getStorageData = onValue(ref(db, `users/${userUID}/localstorageData`), (snapshot) => {
    if (localStorage.getItem("gatheredData") !== "true"){
        const value = snapshot.val();
        const isNewUser = localStorage.getItem("ISNEWUSER-MATHACTIVITIES")
        if (value == null){
            const image = document.getElementById("logo-into-welcome")
            const words = document.getElementById("ee")
            const imageSrc = JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesprofilePic
            image.src = imageSrc
            image.style.width = "150px"
            image.style.height = "150px"
            if (isNewUser == true){
                words.innerHTML =  `Welcome for the first time ${JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesdisplayName}! Go to this page: <span style = "color:rgb(0, 100, 200); cursor:pointer;"onclick = "window.location.href = 'about.html'">About</span> to learn more about what this website is! If you want to explore what this website has to offer go here: <span style = "color:rgb(0, 100, 200); cursor:pointer;"onclick = "window.location.href = 'about.html'">Explore</span>`
            }
            else {
                words.innerHTML =  `<span style = "font-size:45px;">Welcome ${JSON.parse(localStorage.getItem("mathActivitiesSettings")).mathActivitiesdisplayName}!</span> <br> ${universalMessageHTML}`
            }
            localStorage.setItem("gatheredData", true)
            localStorage.setItem("bestScore", 0)
            set(ref(db, `users/${userUID}/localstorageData`), getLocalStorageKeysAsJSON())
            document.getElementById("loading-wait").remove()
            off(ref(db, `users/${userUID}/localstorageData`), getStorageData)
        }

        console.log("this will not be displayed")
        console.log(value)
        let parseValue = JSON.parse(value);
        let totalString
        if (typeof parseValue=="string"){
            try {
                totalString = JSON.parse(parseValue)
            }
            catch (error) {
                console.error(error)
            }
        }
        else if (typeof parseValue == "object") {
            try {
                totalString = parseValue
            }
            catch (error) {
                console.error(error)
            }
        }
        const localStorageData = Object.keys(totalString).length
        for (var i = 0; i < localStorageData; i++) {
            try {
                const key = Object.keys(totalString)[i];
                console.log(`Processing key: ${key}, i: ${i}`);
                localStorage.setItem(key, totalString[key]); // Check if this line causes issues
                function percentage(currentPercent, totalPercent) {
                    const outOf100 = Math.min(Math.round((currentPercent / totalPercent) * 100), 100);
                
                    // Update DOM
                    document.getElementById("loading-percent-timer").textContent =
                        outOf100 + "% there";
                
                    if (currentPercent >= totalPercent) {
                        const continueButton = document.createElement("button");
                        continueButton.textContent = "Continue";
                        continueButton.id = "thethethe";
                        continueButton.onclick = function () {
                            document.getElementById("loading-wait").remove();
                            alert("By going on this website, you agree to the Terms and Policies")
                        };
                        if (!document.getElementById("thethethe")) {
                            document.getElementById("loading-wait").appendChild(continueButton);
                        }
                    }
                }
                
                
                
                percentage(i + 1, localStorageData)
            } catch (error) {
                console.error(`Error at iteration ${i}:`, error);
            }
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

console.log("started writing")
setInterval(setupWriting, 10000)

function setupWriting(){
    if (start == true){
        const combinedJSON = getLocalStorageKeysAsJSON();
        writeUserData("localstorage", JSON.stringify(combinedJSON))
    }
}

window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "s"){
        e.preventDefault()
        setupWriting()
    }
})


  let previousLocalstorage


function writeUserData(type, value) {
    if (type == "localstorage"){
        if (localStorage.getItem("totalstring-download") !== null){
            localStorage.removeItem("totalstring-download")
            set(ref(db, `users/${userUID}/localstorageData`), value)
        } else {
            localStorage.removeItem("totalstring-download")
            set(ref(db, `users/${userUID}/localstorageData`), value)
        }
    }
}


let profilePicDateURL;

fetch(userInfo.mathActivitiesprofilePic)
      .then(response => response.arrayBuffer())
      .then(buffer => {
          const base64String = btoa(
              new Uint8Array(buffer)
                  .reduce((data, byte) =>
                      data + String.fromCharCode(byte), '')
          );
          profilePicDateURL = "data:image/png;base64,"+base64String
});

function getLocalStorageKeysAsJSON() {
    localStorage.setItem("mathprofilepic", profilePicDateURL)
    const keys = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        keys[key] = localStorage.getItem(key);
    }
    return JSON.stringify(keys);
}

const queryString = window.location.search; // Get the query string from the URL
const urlParams = new URLSearchParams(queryString);

if (window.location.href.includes("?adminUser=true")){
    document.getElementById("adminSettings").classList.remove("hide")
}
else {
    document.getElementById("adminSettings").classList.add("hide")
}