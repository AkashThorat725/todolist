import firebase from "@firebase/app";
import  "@firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyD4x9LwgMNgIL7HSZ3X4cc3dUlmRSickDU",
    authDomain: "my-first-project-18282.firebaseapp.com",
    databaseURL: "https://my-first-project-18282.firebaseio.com",
    projectId: "my-first-project-18282",
    storageBucket: "my-first-project-18282.appspot.com",
    messagingSenderId: "164855197104",
    appId: "1:164855197104:web:c988f5160e3d0c2dd97a75",
    measurementId: "G-H3B2K32ZH2"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);}
  // firebase.analytics();
  export default firebase;
