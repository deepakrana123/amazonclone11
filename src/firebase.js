// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCjYIDnA80etXDs9zedXxc0YEYpIrcv2gg",
	authDomain: "clone-a2f90.firebaseapp.com",
	projectId: "clone-a2f90",
	storageBucket: "clone-a2f90.appspot.com",
	messagingSenderId: "826645595365",
	appId: "1:826645595365:web:6c01538ea56e2500a3800c",
	measurementId: "G-0PLCVMLTR5"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};
  


