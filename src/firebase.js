import firebase from './firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA2G3MgdGF-nI4DtLRRzZi0Qwd0f45-2lg",
    authDomain: "reactfirebase-77a93.firebaseapp.com",
    databaseURL: "https://reactfirebase-77a93-default-rtdb.firebaseio.com",
    projectId: "reactfirebase-77a93",
    storageBucket: "reactfirebase-77a93.appspot.com",
    messagingSenderId: "862136806006",
    appId: "1:862136806006:web:081659a58271521ae94d57"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db;