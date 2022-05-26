// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe7_3PoI0KCQZC7IbNXT6oKf5W_WzFO9Q",
  authDomain: "mn-firebase-auth.firebaseapp.com",
  projectId: "mn-firebase-auth",
  storageBucket: "mn-firebase-auth.appspot.com",
  messagingSenderId: "634869587015",
  appId: "1:634869587015:web:c5b2af5b1de21a9e5ba562"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//export default app;
let app;
if (firebase.app.length === 0){
  app = firebase.initializedApp(firebaseConfig);
}else{
  app = firebase.app()
}
const auth = firebase.auth()

export {auth};