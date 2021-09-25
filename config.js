import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA5ysQGzjbsw_UxRFpsQp1cxYBl3IpCask",
    authDomain: "c-73-b6b96.firebaseapp.com",
    projectId: "c-73-b6b96",
    storageBucket: "c-73-b6b96.appspot.com",
    messagingSenderId: "266484289586",
    appId: "1:266484289586:web:9bdf3f56dbd0e4f61c2c2b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

