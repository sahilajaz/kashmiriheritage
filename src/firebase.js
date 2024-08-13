import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: "kashmiriheritage-99a15.firebaseapp.com",
  projectId: "kashmiriheritage-99a15",
  storageBucket: "kashmiriheritage-99a15.appspot.com",
  messagingSenderId: "1043912303810",
  appId: "1:1043912303810:web:60f3c7c8a73cee0d6e475b",
  measurementId: "G-9TXP3D9GXY"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()