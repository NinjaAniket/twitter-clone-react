import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCl1TnU51uaElP5d_Je3tUoHs_pjm6XdAs",
  authDomain: "twitter-clone-b7d28.firebaseapp.com",
  databaseURL: "https://twitter-clone-b7d28.firebaseio.com",
  projectId: "twitter-clone-b7d28",
  storageBucket: "twitter-clone-b7d28.appspot.com",
  messagingSenderId: "107530750483",
  appId: "1:107530750483:web:2c0ef933a4e817b001cde6",
  measurementId: "G-2WKJG3VYB5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
