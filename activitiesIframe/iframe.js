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
var fragmentIdentifier = window.location.hash.slice(1)
let totalError;
var flash = ['escape-the-closet'    ,      
    'riddle-transfer'              ,          
    'escape-the-freezer'         ,
    'rogue-soul-2',
    'achievement-unlocked-2'     ,
    'escape-the-phonebooth'      ,
    'rogue-soul',
    'achievement-unlocked-3'     ,
    'escape-the-shack'           ,
    'stealing-the-diamond',
    'achievement-unlocked'       ,
    'escaping-the-prison'        ,
    'stick-war',
    'age-of-war-hacked'          ,
    'factory-balls'            ,  
    'submachine-0',
    'age-of-war'              ,   
    'flash-chess'             ,   
    'submachine-10',
    'bloons-td-1'            ,    
    'fleeing-the-complex'   ,     
    'submachine-2',
    'bloons-td-2'         ,       
    'gun-mayhem-2'         ,      
    'submachine-3',
    'bloons-td-3'       ,        
    'gun-mayhem'    ,             
    'submachine-32-chambers',
    'bloons-td-4'          ,     
    'infiltrating-the-airship'   ,
    'submachine-4',
    'bloons'       ,              
    'learn-to-fly-2'     ,        
    'submachine-5',
    'bloxorz'         ,           
    'learn-to-fly-3'    ,         
    'submachine-6' ,
    'breaking-the-bank'   ,       
    'learn-to-fly-idle'     ,     
    'submachine-7',
    'cat-ninja'  ,                
    'learn-to-fly'      ,         
    'submachine-8' ,
    'creative-kill-chamber'   ,  
    'papas-freezeria'       ,      
    'submachine-9' ,
    'curveball' ,                
    'papas-pizzaria'     ,        
    'submachine-flf' ,
    'dont-escape-2 '  ,           
    'raft-wars-2'  ,             
    'submachine' ,
    'dont-escape-3'  ,            
    'raft-wars'  ,                
    'sugar-sugar',
    'dont-escape'   ,             
    'riddle-school-2'   ,         
    'the-impossible-quiz',
    'duck-life-2'       ,         
    'riddle-school-3',         
    'this-is-the-only-level-2',
    'duck-life-3'  ,           
    'riddle-school-4'   ,         
    'this-is-the-only-level',
    'duck-life',                  
    'riddle-school-5'  ,         
    'ultimate-chess',
    'escape-the-bathroom'  ,    
    'riddle-school',
    'escape-the-car' ,            
   'riddle-transfer-2']

const other = ["time2", "gladis"]
var iframe = document.createElement('iframe');

iframe.src = "../activities/"+ fragmentIdentifier

for (var i = 0; i < flash.length; i++){
    if (fragmentIdentifier == flash[i]){
        iframe.src = '../activities/flash/?game=' + fragmentIdentifier
    }
}

for (var i = 0; i < other.length; i++){
    if (fragmentIdentifier == other[i]){
        iframe.src = '../other/' + fragmentIdentifier
    }
}

try {
    iframe.style.border='none';
    iframe.id = "iframe"
    iframe.style.width = '100%' ;
    iframe.style.height = "100vh"
    iframe.allowFullscreen = true
    iframe.style.margin = '0';
    iframe.style.position = "absolute"
    iframe.style.zIndex = "500"
    iframe.style.top = "0"
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
back.addEventListener('click', ()=>{
    window.location.href = '../activities/flash/main.html?savedata=true'
})

var fullscreen = document.getElementById('fullscreen')
fullscreen.addEventListener('click', ()=>{
    if (fullscreen.requestFullscreen) {
        iframe.requestFullscreen();
      }
})

iframe.onload = function(){
    document.getElementById("load").remove()
}


setInterval(function(){
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