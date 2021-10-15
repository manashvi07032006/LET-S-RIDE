import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAYS_nZKsjUs5DRFCkmxeLLNDKHLrhA1hc",
  authDomain: "cycle-transaction-46844.firebaseapp.com",
  projectId: "cycle-transaction-46844",
  storageBucket: "cycle-transaction-46844.appspot.com",
  messagingSenderId: "892455509963",
  appId: "1:892455509963:web:c29b0116f7cd3ede68e04e"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();