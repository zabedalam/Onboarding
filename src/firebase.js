import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDBPAe0D8Gyu-0UBI_X1Di0beFBkVf_4BY",
  authDomain: "onboarding-makeimpact-dev.firebaseapp.com",
  projectId: "onboarding-makeimpact-dev",
  storageBucket: "onboarding-makeimpact-dev.appspot.com",
  messagingSenderId: "858534476915",
  appId: "1:858534476915:web:c97ddac0b3459c50ff7e06"
});

 const auth = app.auth();
export { auth };
export default app;


