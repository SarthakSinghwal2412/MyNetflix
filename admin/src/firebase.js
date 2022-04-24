// Import the functions you need from the SDKs you need

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqBweBzLnP2tLFdtc02G6t_LtU2U06QCI",
    authDomain: "netflixmain-6966b.firebaseapp.com",
    projectId: "netflixmain-6966b",
    storageBucket: "netflixmain-6966b.appspot.com",
    messagingSenderId: "1008458263276",
    appId: "1:1008458263276:web:d6801dcd066efa4eb513c9",
    measurementId: "G-513TW2DYT2"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;