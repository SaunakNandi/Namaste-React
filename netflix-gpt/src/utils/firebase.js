// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrimEw7nryZy6M2WB30nA6j0HWAWxN5eA",
  authDomain: "netflix-gpt-94176.firebaseapp.com",
  projectId: "netflix-gpt-94176",
  storageBucket: "netflix-gpt-94176.appspot.com",
  messagingSenderId: "333235881653",
  appId: "1:333235881653:web:575982c8e5a262110820fc",
  measurementId: "G-N7EG2KYFEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()