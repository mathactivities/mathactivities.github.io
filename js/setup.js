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
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.photoURL)
      

      console.log(user)
      if (!user.email.includes("@stu")){
        window.location.href = "401.html"
      }
      else {
        e()
        const isNewUser = getAdditionalUserInfo(result).isNewUser
        localStorage.setItem("ISNEWUSER-MATHACTIVITIES", isNewUser)
        userSettings = setInfo(isNewUser, user.uid, user.email, user.photoURL, user.displayName)
        localStorage.setItem("mathActivitiesSettings", JSON.stringify(userSettings))
        if (isNewUser){
          function getLocalStorageKeysAsJSON() {
            const keys = {};
            console.log(localStorage.length)
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              console.log(key)
              keys[key] = localStorage.getItem(key);
              console.log(keys)
            }
            return JSON.stringify(keys);
          }
          
          // Example usage:
          const combinedJSON = getLocalStorageKeysAsJSON();
          console.log(combinedJSON)
          set(ref(db, `users/${user.uid}/localstorageData`), combinedJSON)
        }
      }
      
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
}

function e(){
    const thing = navigator.userAgent
    const iframe = document.createElement("iframe")
    iframe.src = "activities/flash/main.html"
    iframe.style.width = "100%"
    iframe.style.height = "100vh"
    iframe.style.border = "none"
    iframe.style.position = "absolute"
    iframe.style.top = "0"
    iframe.style.zIndex = "5000"
    document.body.style.overflow = "hidden"
    window.scrollTo({
        top: 0,
        left: 0,
    });
    document.body.appendChild(iframe)
    iframe.focus()
}

document.getElementById("thingy").addEventListener("click", createIframe)

function setInfo(isNewUser, uid, email, profilePic, displayName){
  return {
    "mathActivitiesIsNewUser": isNewUser,
    "mathActivitiesUid": uid,
    "mathActivitiesemail": email,
    "mathActivitiesprofilePic": profilePic,
    "mathActivitiesdisplayName": displayName
  }
}
