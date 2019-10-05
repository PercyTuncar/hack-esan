import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAjUK3zTxLWqf86CsAx3fXCXVUzCGM9oFE",
    authDomain: "serious-truck-234806.firebaseapp.com",
    databaseURL: "https://serious-truck-234806.firebaseio.com",
    projectId: "serious-truck-234806",
    storageBucket: "",
    messagingSenderId: "715953102361",
    appId: "1:715953102361:web:398dbc42899a285f869488"
  };


  firebase.initializeApp(config);

  export const {auth} = firebase;
  export const provider = new provider.auth.FacebookAuthProvider();