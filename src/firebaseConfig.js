// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Comment this line if not needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9eWGVtB0M0H4jTWeh4jWPKM4eKDuAnzw",
  authDomain: "travel-itinerary-cdcf2.firebaseapp.com",
  projectId: "travel-itinerary-cdcf2",
  storageBucket: "travel-itinerary-cdcf2.appspot.com",
  messagingSenderId: "479930354951",
  appId: "1:479930354951:web:e988c3dceb194571c449a2",
  measurementId: "G-4RR52W30MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Comment this line if not needed
const auth = getAuth(app);  // Initialize auth

// Export auth
export { auth };
