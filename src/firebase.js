import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrNhtMR1n5eHtzt9K-bAqQjEWVLo1JnJM",
  authDomain: "chatloop-47825.firebaseapp.com",
  databaseURL: "https://chatloop-47825-default-rtdb.firebaseio.com",
  projectId: "chatloop-47825",
  storageBucket: "chatloop-47825.firebasestorage.app",
  messagingSenderId: "24261375804",
  appId: "1:24261375804:web:2c50ff11cefd1e48ae5039",
  measurementId: "G-8YXDQVT3S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);