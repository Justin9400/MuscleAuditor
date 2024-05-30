  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA93KlJ-ccqQAiFDjnhqiLcOsEx85n1sbg",
    authDomain: "muscle-auditor.firebaseapp.com",
    projectId: "muscle-auditor",
    storageBucket: "muscle-auditor.appspot.com",
    messagingSenderId: "1050697292799",
    appId: "1:1050697292799:web:17f98c6d92070fe62465ca",
    measurementId: "G-NGQW0FC7DZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);