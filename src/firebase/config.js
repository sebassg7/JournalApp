// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'; //lite => no ofrece todas las funcionalidades
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-uAdFoy_oywOhbwaWEdugB1DydoB9NQ",
  authDomain: "react-journalapp-592ff.firebaseapp.com",
  projectId: "react-journalapp-592ff",
  storageBucket: "react-journalapp-592ff.appspot.com",
  messagingSenderId: "377108498251",
  appId: "1:377108498251:web:5177a1460c7329c1a30ace"
};

// Initialize Firebase //Testing
export const FirebaseApp  = initializeApp( firebaseConfig );

//Autenticación
export const FirebaseAuth = getAuth( FirebaseApp );

//Acceso a la base de datos - fire store
export const FirebaseDB   = getFirestore( FirebaseApp ); //DB => data base

