import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
let userSettings

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
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)

async function createIframe() {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });      
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.email);
      
      const isNewUser = getAdditionalUserInfo(result).isNewUser;
      localStorage.setItem("ISNEWUSER-MATHACTIVITIES", isNewUser);
      userSettings = setInfo(isNewUser, user.uid, user.email, user.photoURL, user.displayName);
      localStorage.setItem("mathActivitiesSettings", JSON.stringify(userSettings));
      
      if (isNewUser) {
        localStorage.setItem("bestScore", 0);
        function getLocalStorageKeysAsJSON() {
          const keys = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            keys[key] = localStorage.getItem(key);
          }
          return JSON.stringify(keys);
        }
        const combinedJSON = getLocalStorageKeysAsJSON();
        set(ref(db, `users/${user.uid}/localstorageData`), combinedJSON);
        localStorage.removeItem("bestScore");
      }
      
      const allowedExceptions = ["krupalt78@gmail.com", "jebba272727@gmail.com"];
      const isAdmin = (user.email === "591496@stu.sandi.net" || allowedExceptions.includes(user.email));
      loadGames(isAdmin);
      
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
}

function loadGames(isAdmin){
    const iframe = document.createElement("iframe");
    iframe.src = isAdmin ? "activities/flash/main.html?adminUser=true" : "activities/flash/main.html";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.zIndex = "5000";
    document.body.style.overflow = "hidden";
    window.scrollTo({
        top: 0,
        left: 0,
    });
    document.body.appendChild(iframe);
    iframe.focus();
}

document.getElementById("thingy").addEventListener("click", createIframe)

function setInfo(isNewUser, uid, email, profilePic, displayName){
  return {
    "mathActivitiesIsNewUser": isNewUser,
    "mathActivitiesUid": uid,
    "mathActivitiesemail": email,
    "mathActivitiesprofilePic": profilePic,
    "mathActivitiesdisplayName": displayName,
  }
}
