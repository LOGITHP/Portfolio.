import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  databaseURL: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  projectId: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  storageBucket: "zzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  messagingSenderId: "ffffffffffffffffffffffffffffffffff",
  appId: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  measurementId: "eeeeeeeeeeeeeeeeeeeeeeee"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
