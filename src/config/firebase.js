import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCuSfo4wCkn5PWMEtHU6MAzwZBtdnsKBYg",
    authDomain: "chat-app-45c37.firebaseapp.com",
    projectId: "chat-app-45c37",
    storageBucket: "chat-app-45c37.appspot.com",
    messagingSenderId: "478877910571",
    appId: "1:478877910571:web:8332d84ad1e9e5ed810c6e",
    measurementId: "G-WGG92H9E11"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;