
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgPxcyW2hruEAyIBDXu5mk6oE_sM9f0qw",
  authDomain: "shopnest-6dedf.firebaseapp.com",
  projectId: "shopnest-6dedf",
  storageBucket: "shopnest-6dedf.appspot.com",
  messagingSenderId: "104079961518",
  appId: "1:104079961518:web:bee308d84a05c89afeac3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;