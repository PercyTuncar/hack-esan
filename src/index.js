import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
const config = {
    apiKey: "AIzaSyAjUK3zTxLWqf86CsAx3fXCXVUzCGM9oFE",
    authDomain: "serious-truck-234806.firebaseapp.com",
    databaseURL: "https://serious-truck-234806.firebaseio.com",
    projectId: "serious-truck-234806",
    storageBucket: "",
    messagingSenderId: "715953102361",
    appId: "1:715953102361:web:398dbc42899a285f869488"
  };

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
