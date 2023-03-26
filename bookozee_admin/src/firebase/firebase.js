import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCv6EZQbVML1fdqmhqfApBP1LiNGJrQVus",
  authDomain: "bookozee.firebaseapp.com",
  projectId: "bookozee",
  storageBucket: "bookozee.appspot.com",
  messagingSenderId: "249390923526",
  appId: "1:249390923526:web:1302e29acd3df2464ea887",
  measurementId: "G-PK2MRSDP2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
