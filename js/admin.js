import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"; import { getDatabase, ref, set, onValue, get, off, child} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js"; import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

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
console.log(window.location)


window.addEventListener("keydown", (e) => {
    if (e.ctrlKey){
        e.stopPropagation();
        e.preventDefault()
    }
    if (window.location.href.includes("view-source:")){
        window.replace("//classroom.google.com")
    }
})
window.addEventListener("click", () => {
    if (window.location.href.includes("view-source:")){
        window.location.href.replace("//classroom.google.com")
    }
})
window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
})
window.addEventListener('keydown', (e) => {
    if (e.key=='`'){
        window.top.location.replace('https://classroom.google.com')
    }
})

if (localStorage.getItem("ISADMINFORMATHACTIVITIES") == "true"){
    console.log(true)
    document.getElementById("send").addEventListener("click", () => {
        try {
            set(ref(db, `universalMessageHTML`), document.getElementById("universalmessage").value)
            alert("successfuly sent")
        }
        catch(error){
            alert(error)
        }
    })
}

else {
    window.location.href = "about:blank";
}

const iframe = document.getElementById("iframe");
const universalMessage = document.getElementById("universalmessage");

function previewCode() {
    const codeEditor = document.getElementById('universalmessage');
    const codePreview = document.getElementById('iframe');

    const htmlCode = codeEditor.value;
    codePreview.contentDocument.body.innerHTML = htmlCode;
}

universalMessage.addEventListener("input", previewCode)