import firebase from "firebase";

const firebaseConfig =  {
  apiKey: "AIzaSyA-1V0fWxS2k5ZkjW-y3rJ6cb2lCF5A5po",
  authDomain: "amozonweb.firebaseapp.com",
  databaseURL: "https://amozonweb.firebaseio.com",
  projectId: "amozonweb",
  storageBucket: "amozonweb.appspot.com",
  messagingSenderId: "299332513609",
  appId: "1:299332513609:web:83a7a93f5164273c237498",
  measurementId: "G-3535Q0DJ9D"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};