import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm2fhWL3Ackaz7EZH2BhP8jGEh_K7KH40",
  authDomain: "slack-clone-d2718.firebaseapp.com",
  databaseURL: "https://slack-clone-d2718.firebaseio.com",
  projectId: "slack-clone-d2718",
  storageBucket: "slack-clone-d2718.appspot.com",
  messagingSenderId: "1022822855731",
  appId: "1:1022822855731:web:4b58c2162c02adc6541f46",
  measurementId: "G-WLP2XZD739",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; //import { db } from 'firebase';
export default db; //import db from 'firebase';
