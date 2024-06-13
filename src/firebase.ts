import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoLzBhePPob5dEmTgEj4QOMNzxa88sIPk",
  authDomain: "furniro-d2c17.firebaseapp.com",
  projectId: "furniro-d2c17",
  storageBucket: "furniro-d2c17.appspot.com",
  messagingSenderId: "994055793530",
  appId: "1:994055793530:web:c7c6a18f3c6556d39704c3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
