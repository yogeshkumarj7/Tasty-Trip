// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkVC0sH46EbOQQpHfNzeZLf5OYrmxMKKY",
//   authDomain: "tasty-trip.firebaseapp.com",
//   projectId: "tasty-trip",
//   storageBucket: "tasty-trip.firebasestorage.app",
//   messagingSenderId: "589619379421",
//   appId: "1:589619379421:web:279741a1e397f71db66f34",
//   measurementId: "G-GGQY2V9YFX",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//..............................

// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkVC0sH46EbOQQpHfNzeZLf5OYrmxMKKY",
  authDomain: "tasty-trip.firebaseapp.com",
  projectId: "tasty-trip",
  storageBucket: "tasty-trip.appspot.com",
  messagingSenderId: "589619379421",
  appId: "1:589619379421:web:279741a1e397f71db66f34",
  measurementId: "G-GGQY2V9YFX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

const authStateListener = (callback) => onAuthStateChanged(auth, callback);

export {
  auth,
  googleProvider,
  signUp,
  login,
  loginWithGoogle,
  logout,
  authStateListener,
};
