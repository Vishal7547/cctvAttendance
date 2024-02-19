import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRx-mCA1iBnIagMfKfo4n2n_WvsqJv8qU",
  authDomain: "cctvattendence.firebaseapp.com",
  projectId: "cctvattendence",
  storageBucket: "cctvattendence.appspot.com",
  messagingSenderId: "46386124775",
  appId: "1:46386124775:web:121674b0df8080341d8f42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
