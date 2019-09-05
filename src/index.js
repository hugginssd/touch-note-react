import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyA8PF6muFWkIFKybMH8GfpW8yuefeK1qzo",
    authDomain: "touch-note-f582f.firebaseapp.com",
    databaseURL: "https://touch-note-f582f.firebaseio.com",
    projectId: "touch-note-f582f",
    storageBucket: "touch-note-f582f.appspot.com",
    messagingSenderId: "1082146798825",
    appId: "1:1082146798825:web:697f5f67413cf3a8724478"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
