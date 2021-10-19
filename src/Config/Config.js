import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
            apiKey: "AIzaSyAGPnSk7tklgok4MkFOP0DL1M8sIdBYAdE",
	    authDomain: "minor-project-e-commerce.firebaseapp.com",
	    projectId: "minor-project-e-commerce",
	    storageBucket: "minor-project-e-commerce.appspot.com",
	    messagingSenderId: "381020291343",
	    appId: "1:381020291343:web:6cc69d1b936026f99afe7a",
	    measurementId: "G-9XK0Q5P5YW"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
