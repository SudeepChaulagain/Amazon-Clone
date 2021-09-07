import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASDpE4XVnRYzI6BFj49x3ZRyXMYYZnyPI",
    authDomain: "clone-3a1bb.firebaseapp.com",
    projectId: "clone-3a1bb",
    storageBucket: "clone-3a1bb.appspot.com",
    messagingSenderId: "871649230855",
    appId: "1:871649230855:web:809eae286a46914fad2aa2",
    measurementId: "G-3MEVQDKKXN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  