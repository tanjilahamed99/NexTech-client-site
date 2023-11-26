// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId
    apiKey: "AIzaSyDVNRJMFidLZFqZjeW573DcV7SUH1lw8Eg",
    authDomain: "nextech-4bdaf.firebaseapp.com",
    projectId: "nextech-4bdaf",
    storageBucket: "nextech-4bdaf.appspot.com",
    messagingSenderId: "1001023433056",
    appId: "1:1001023433056:web:d6b66ae96fbe6850d31605"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth