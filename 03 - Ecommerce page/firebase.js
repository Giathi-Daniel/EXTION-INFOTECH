import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD5bVktbWFH_SA205LeHXvC15-HY8wdDs",
  authDomain: "smartshop-a852b.firebaseapp.com",
  projectId: "smartshop-a852b",
  storageBucket: "smartshop-a852b.appspot.com",
  messagingSenderId: "487294174041",
  appId: "1:487294174041:web:38a312db53b29faf33c248"
};

initializeApp(firebaseConfig)
export const db = getFirestore();