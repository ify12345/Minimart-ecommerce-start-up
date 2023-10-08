
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAjm3MHOerYStAGeBAwXg4BrUC-Mxbdlbw",
  authDomain: "minmart-5e380.firebaseapp.com",
  projectId: "minmart-5e380",
  storageBucket: "minmart-5e380.appspot.com",
  messagingSenderId: "649567154070",
  appId: "1:649567154070:web:b45dbe3ce86f475b8337b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;