import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAmgQ5Mol8DWcwnAkyuTX2AWBpQe-FN3QM",
    authDomain: "chat-web-app-feef6.firebaseapp.com",
    databaseURL: "https://chat-web-app-feef6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-web-app-feef6",
    storageBucket: "chat-web-app-feef6.appspot.com",
    messagingSenderId: "731805380337",
    appId: "1:731805380337:web:37f981f6eb9455fb9cc350"
  };

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();