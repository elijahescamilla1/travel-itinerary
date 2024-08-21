import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9eWGVtB0M0H4jTWeh4jWPKM4eKDuAnzw",
  authDomain: "travel-itinerary-cdcf2.firebaseapp.com",
  projectId: "travel-itinerary-cdcf2",
  storageBucket: "travel-itinerary-cdcf2.appspot.com",
  messagingSenderId: "479930354951",
  appId: "1:479930354951:web:e988c3dceb194571c449a2",
  measurementId: "G-4RR52W30MR"  // Remove if not using Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication and get a reference to the service

// Export the necessary Firebase services
export { auth };
