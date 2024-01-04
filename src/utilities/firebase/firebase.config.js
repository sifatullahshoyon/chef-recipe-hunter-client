// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApT_R7zRIEavG2i9RlF6j-M_zPQFF7_-o",
  authDomain: "chef-recipe-hunter-clien-65b2d.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-65b2d",
  storageBucket: "chef-recipe-hunter-clien-65b2d.appspot.com",
  messagingSenderId: "1030767412656",
  appId: "1:1030767412656:web:fdddbd458ba2744fc94275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;