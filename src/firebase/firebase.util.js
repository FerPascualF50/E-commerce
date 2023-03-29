//import firebase from "firebase/app";
//import "firebase/firestore ";
//import "firebase/auth ";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyB0DIQfSn7wvMnVBFGGmIa8ZaJEn8SJR-I",
  authDomain: "fir-app-react-e0426.firebaseapp.com",
  projectId: "fir-app-react-e0426",
  storageBucket: "fir-app-react-e0426.appspot.com",
  messagingSenderId: "986340679767",
  appId: "1:986340679767:web:e5ed7e109b2bc06dde4312"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

// detected auth state

onAuthStateChanged (auth, user => {
  if(user != null) {
    if (!snapshot.exists) {
      const { displayName, email } = auth;
      const createdAt = new Date();
      try {
        snapshot({
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    
      return snapshot;
    }
    console.log('logged in!')
  } else {
    console.log('No User')
  }
});


const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const segnInWhitGoogle = () => auth.signInWhithPopup(provider);
//export default firebaseApp;

/*export const createUserProfileDocument = async (userAuth, ...additionalData) => {
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
      console.log('error creating user', error.message);
    }

    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const segnInWhitGoogle = () => auth.signInWhithPopup(provider);

export default firebase;*/