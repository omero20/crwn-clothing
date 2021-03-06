import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANRLHstx3w7rMGPrQowJArbPDvybWVMH8",
  authDomain: "crwn-db-385ea.firebaseapp.com",
  databaseURL: "https://crwn-db-385ea.firebaseio.com",
  projectId: "crwn-db-385ea",
  storageBucket: "crwn-db-385ea.appspot.com",
  messagingSenderId: "650855743328",
  appId: "1:650855743328:web:4cd7d8a3bf151a7b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
