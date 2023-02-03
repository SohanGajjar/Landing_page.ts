// Import the functions you need from the SDKs you need
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD6ZkbRCvohlVeQZrJWOOrsBTnQO8AZrcM",
  authDomain: "darwinsheet.firebaseapp.com",
  projectId: "darwinsheet",
  storageBucket: "darwinsheet.appspot.com",
  messagingSenderId: "796821453677",
  appId: "1:796821453677:web:44e02f9ebe20bdde567864",
  measurementId: "G-QGW8D2RNXX"
};

firebase.initializeApp(firebaseConfig);

export {firebase};