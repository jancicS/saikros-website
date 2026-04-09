import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";

/** App brand: Saikros. Firebase project id / domains may still use the legacy console slug until migrated. */
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyCNQlDyD_QL7N8glE4SeEdlXQTEU_a9pMg",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "joseph-ai-website.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "joseph-ai-website",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "joseph-ai-website.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "516946401675",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:516946401675:web:a0e661d13e4346813bb78e",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-N1Q5X95CCS",
};

export function getFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}
