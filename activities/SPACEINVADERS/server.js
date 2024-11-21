import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

var user;
var username;
const firebaseConfig = {
  apiKey: "AIzaSyApTeCWxzOKgR9sfAYa1WxBp5TvCI1tL5k",
  authDomain: "attackofpirates.firebaseapp.com",
  databaseURL: "https://attackofpirates-default-rtdb.firebaseio.com",
  projectId: "attackofpirates",
  storageBucket: "attackofpirates.appspot.com",
  messagingSenderId: "1054510462705",
  appId: "1:1054510462705:web:f54bc3754f8f40e891db50",
  measurementId: "G-HMV1XEN6NN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
var data = null
let userHighscore;

const highscoreRef = ref(db, 'highscore')
onValue(highscoreRef, (snapshot) => {
  data = snapshot.val();
  console.log('recieved score data:', data)
  document.getElementById('highscore').innerHTML = "<br><span id = 'tikey'>World Wide Highscore: </span>  <br>" + "<span id = 'windowgo'>" + data + "</span>";
});

function writeUserData(highscore) {
  set(ref(db, 'highscore'), highscore)
}

function extractScore(string) {
  const pattern = /:\s+(\d+)/;
  const match = string.match(pattern);
  return match ? parseInt(match[1]) : null;
}
//see if user score is currently greater than highscore
function highscore() {
  if (window.score * 100 > extractScore(data)) {
    writeUserData(username + ': ' + window.score * 100);
  }
  if (window.score * 100 > parseFloat(document.getElementById('actual-user-score').innerHTML)){
    document.getElementById('actual-user-score').innerHTML = window.score * 100
    if (user.uid == null){
      document.getElementById('actual-user-score').innerHTML = window.score * 100
    } else {
      set(ref(db, 'users/' + user.uid), {
        userName: username,
        highscore: window.score * 100,
        email: user.email
      })
      document.getElementById('actual-user-score').innerHTML = window.score * 100
    }
  }
}

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    user = result.user;
    const isNewUser = getAdditionalUserInfo(result).isNewUser;
    if (isNewUser) {
      //set a new space for the user if the user is new
      set(ref(db, 'users/' + user.uid), {
        userName: username,
        highscore: 0,
        email: user.email
      })
      console.log("User is new!");
    } else {
      //recieve data from database if user is already existing
      const usersRef = ref(db, "users/" + user.uid)
      get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          username = usersData.userName
          userHighscore = usersData.highscore
          document.getElementById('actual-user-score').innerHTML = userHighscore
          document.getElementById('user-name').innerHTML = username
          localStorage.setItem('player', username)
          localStorage.setItem('userHighscore', userHighscore)
          console.log(usersData);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      console.log("User already exists!");
    }
    //change html to user settings
    console.log(user)
    document.getElementById('signwithgle').style.display = "none"
    document.getElementById('user-name').innerHTML = username
    
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
}
//assigning a default username that is "Player_ + random id given"
const guestNumber = Math.floor(Math.random() * 10000000)
localStorage.setItem('player', "Player_"+guestNumber)
username = localStorage.getItem('player')
document.getElementById('user-name').innerHTML = username;

//event listeners and loops
window.setInterval(highscore, 0);
document.getElementById('signwithgle').addEventListener("click", signInWithGoogle)
