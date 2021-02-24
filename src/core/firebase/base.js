import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB7GY15QatWVjVh7fAQZb1PzyzAR3GoQQ8",
  authDomain: "x-drive-4fe6b.firebaseapp.com",
  databaseURL: "https://x-drive-4fe6b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "x-drive-4fe6b",
  storageBucket: "x-drive-4fe6b.appspot.com",
  messagingSenderId: "154080130394",
  appId: "1:154080130394:web:83a22c936bb07f065aaf63",
  measurementId: "G-KTVMNYJ0TW"
};

  // Initialize Firebase
export const base = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
export const rootQuestions = database.ref('/questions');
