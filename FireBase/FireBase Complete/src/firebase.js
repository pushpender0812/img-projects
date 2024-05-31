import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB-i3IS-jH5NN1qJOEUJEQbrg0vKtCvCJ4",
    authDomain: "app-bf4db.firebaseapp.com",
    projectId: "app-bf4db",
    storageBucket: "app-bf4db.appspot.com",
    messagingSenderId: "906005026335",
    appId: "1:906005026335:web:c026779553c4b4d39e672a",
    databaseURL:"https://app-bf4db-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
 export  const app = initializeApp(firebaseConfig);