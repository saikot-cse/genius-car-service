// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZiWMcWjHPui9x5hdHcKCFoKmm5hsXOcM",
  authDomain: "genius-car-service-b76e3.firebaseapp.com",
  projectId: "genius-car-service-b76e3",
  storageBucket: "genius-car-service-b76e3.appspot.com",
  messagingSenderId: "156594768842",
  appId: "1:156594768842:web:f0576514fcd61687dcdd33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;