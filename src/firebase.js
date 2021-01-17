import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
       {
        apiKey: "AIzaSyAu4-V5czpSVJFFalmqqzf2VHZcB2CKwXo",
        authDomain: "insta-clone-f627e.firebaseapp.com",
        databaseURL: "https://insta-clone-f627e-default-rtdb.firebaseio.com",
        projectId: "insta-clone-f627e",
        storageBucket: "insta-clone-f627e.appspot.com",
        messagingSenderId: "811586744871",
        appId: "1:811586744871:web:eea687ff27bf9ee1ca5402",
        measurementId: "G-ZY0Z98ZCFJ"
      }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};
