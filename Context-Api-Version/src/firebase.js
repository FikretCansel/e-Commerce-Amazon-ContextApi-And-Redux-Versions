import firebase from "firebase";

const firebaseConfig =  {
  yourKEY
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};
