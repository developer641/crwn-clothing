import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB39OIvW5S95bX_ObwqxI44mHL-XHrOU-A",
    authDomain: "crwn-db-8f43c.firebaseapp.com",
    projectId: "crwn-db-8f43c",
    storageBucket: "crwn-db-8f43c.appspot.com",
    messagingSenderId: "754026025282",
    appId: "1:754026025282:web:91af6615cf23017edb38db"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({displayName, email, createAt, ...additionalData})
        }catch (error){
            console.log('Error Creating user', error.message)
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
