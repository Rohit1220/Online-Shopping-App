import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDMocYxYY_BQSxeWm1jx1OO6zlX-rGX3js",
  authDomain: "online-shopping-app-496c8.firebaseapp.com",
  databaseURL: "https://online-shopping-app-496c8-default-rtdb.firebaseio.com",
  projectId: "online-shopping-app-496c8",
  storageBucket: "online-shopping-app-496c8.appspot.com",
  messagingSenderId: "277190093028",
  appId: "1:277190093028:web:96b9a3dab70d134dcf64f1",
  measurementId: "G-D94HDBMBSX"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
