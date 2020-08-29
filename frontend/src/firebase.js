import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

global.XMLHttpRequest = require('xhr2');

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export const createMemberProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  // Getting a reference to the `user` collection where the member profile is located
  const userRef = firestore.doc(`users/${user.uid}`);

  // Now fetching the document at that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { firstName, lastName, email } = user;
    const createdAt = new Date();

    // if this document doesn't exist this will create it
    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) {
    return null;
  }

  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.log(`Error fetching user ${error.message}`);
  }
};

export default firebase;
