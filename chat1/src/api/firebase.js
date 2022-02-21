
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAz13FkQkf9ApljtaDBU9rk78vb5aZVWq8",
  authDomain: "gb-lesson-chat.firebaseapp.com",
  databaseURL: "https://gb-lesson-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-lesson-chat",
  storageBucket: "gb-lesson-chat.appspot.com",
  messagingSenderId: "188010838229",
  appId: "1:188010838229:web:4a47cbfe61f899ba60ca5c",
  measurementId: "G-J95RHQ205Q"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();