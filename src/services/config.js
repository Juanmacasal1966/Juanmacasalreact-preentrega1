import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDqLgmsmRleBq8W2mjWibJ3FrLcwjDCzU",
  authDomain: "sneacon99.firebaseapp.com",
  projectId: "sneacon99",
  storageBucket: "sneacon99.appspot.com",
  messagingSenderId: "524239566595",
  appId: "1:524239566595:web:5a73589294c9f85ee85b36",
  measurementId: "G-2DYSFMM2B2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
