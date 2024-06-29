// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-clone-cf359.firebaseapp.com",
  projectId: "instagram-clone-cf359",
  storageBucket: "instagram-clone-cf359.appspot.com",
  messagingSenderId: "1065401774253",
  appId: "1:1065401774253:web:361e5245e3441080759624",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/**
 * Rulles
 * 
 * service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if 
      request.resource.size < 2 * 1024 * 1024 && 
      request.resource.contentType.matches('image/.*')
    }
  }
}
 */
