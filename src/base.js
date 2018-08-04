import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCUR7MigbOifsQjri6YT7pgkIOrURAqTM0",
  authDomain: "catch-of-the-day-viral.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-viral.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
