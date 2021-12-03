import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEwt11d89CfxJGWNVdBbhUSmCrktAV9-4",
    authDomain: "tare5d.firebaseapp.com",
    projectId: "tare5d",
    storageBucket: "tare5d.appspot.com",
    messagingSenderId: "769954633739",
    appId: "1:769954633739:web:e2b091d9efcdbfbd14cf0e"
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;