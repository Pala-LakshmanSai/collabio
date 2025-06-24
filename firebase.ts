import {initializeApp, getApps, getApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBg93RXdg1nCxP7fvTi0Yx6Q-Ie2QhNlZI",
  authDomain: "collabio-187dd.firebaseapp.com",
  projectId: "collabio-187dd",
  storageBucket: "collabio-187dd.firebasestorage.app",
  messagingSenderId: "508675045276",
  appId: "1:508675045276:web:1985d3ac296d9005a6fa59",
  measurementId: "G-EWCZ483DV6"
};

// Initialize Firebase
const app = getApps.length === 0? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export {db}