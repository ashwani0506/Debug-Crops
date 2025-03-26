import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAL3wVX4unkjGSt1bT2J-MAjreL530TKzc",
  authDomain: "debug-crops.firebaseapp.com",
  projectId: "debug-crops",
  storageBucket: "debug-crops.firebasestorage.app",
  messagingSenderId: "561225346386",
  appId: "1:561225346386:web:4dfdbaf7c1da9585619e8b",
  measurementId: "G-TREPT8CJ5T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;