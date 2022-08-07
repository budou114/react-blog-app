import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBE32BZZa-nsMj0x2cOdex5u2DxAeLrxk",
  authDomain: "blog-fcb0b.firebaseapp.com",
  projectId: "blog-fcb0b",
  storageBucket: "blog-fcb0b.appspot.com",
  messagingSenderId: "154229763212",
  appId: "1:154229763212:web:c14233bfdbed83f2231fa9",
  measurementId: "G-FKPEHXPWKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };