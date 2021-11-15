import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcI7ddn6SK5yg0weYetk7b4ovj-zOzNyQ",
    authDomain: "twitter-clone-93139.firebaseapp.com",
    projectId: "twitter-clone-93139",
    storageBucket: "twitter-clone-93139.appspot.com",
    messagingSenderId: "622584230415",
    appId: "1:622584230415:web:5a373d0f8e0e55788e297a",
    measurementId: "G-80EDGYSLXT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  export default db;