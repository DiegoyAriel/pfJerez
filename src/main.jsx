import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDccZwIATlFhyUT0XCkeCWPhBmptZm1ZK0",
  authDomain: "maltese-corner.firebaseapp.com",
  projectId: "maltese-corner",
  storageBucket: "maltese-corner.firebasestorage.app",
  messagingSenderId: "265152410161",
  appId: "1:265152410161:web:52f9da9ea916f2fb001b10"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
