// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAMbiiquFsXyEc7h_gfNLB2Jo-p993kcvg",
//   authDomain: "bazar-d3cb2.firebaseapp.com",
//   projectId: "bazar-d3cb2",
//   storageBucket: "bazar-d3cb2.appspot.com",
//   messagingSenderId: "290833778260",
//   appId: "1:290833778260:web:56aa636d4d6a3a38e48fc1",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHb16bbEQH_dJ6mWh2vIS1HLunHczP0qc",
  authDomain: "shopit-auth-95a92.firebaseapp.com",
  projectId: "shopit-auth-95a92",
  storageBucket: "shopit-auth-95a92.appspot.com",
  messagingSenderId: "944614367123",
  appId: "1:944614367123:web:7778cb7d6ef19c9eb75266",
  measurementId: "G-D1GF0SL9TZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();