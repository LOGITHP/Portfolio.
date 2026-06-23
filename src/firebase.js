import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAVybkIbphKrU6xq2cdX0iE6MK-04UEKs",
  authDomain: "portfolio-67769.firebaseapp.com",
  databaseURL: "https://portfolio-67769-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-67769",
  storageBucket: "portfolio-67769.firebasestorage.app",
  messagingSenderId: "723505469304",
  appId: "1:723505469304:web:02999bb2e9ae30c38eda8d",
  measurementId: "G-ZSN66XQ4LT"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
