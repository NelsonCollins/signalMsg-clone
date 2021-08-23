import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9oFNqWmKyHHivCfXuyxytrUfwzqbw7wY",
    authDomain: "signalmsg-clone.firebaseapp.com",
    projectId: "signalmsg-clone",
    storageBucket: "signalmsg-clone.appspot.com",
    messagingSenderId: "275040186825",
    appId: "1:275040186825:web:4a04ebe053dbe64502b818"
  };


  let app;

  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);

  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};
  
