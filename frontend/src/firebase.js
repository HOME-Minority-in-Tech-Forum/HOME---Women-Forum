import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
//test pr/33 branch
require('dotenv').config('../.env');

// global.XMLHttpRequest = require('xhr2');

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createMemberProfileDocument = async (user, ...additionalData) => {
  if (!user) {
    return;
  }

  // Getting a reference to the `user` collection where the member profile is located
  const userRef = firestore.doc(`user/${user.uid}`);

  // Now fetching the document at that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, uid, first, last } = user;
    const createdAt = new Date();

    // if this document doesn't exist this will create it
    try {
      await userRef.set({
        uid,
        email,
        first: first,
        last: last,
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

export const isLoggedIn = () => {
  new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        return resolve(true);
      } else {
        return resolve(false);
      }
    });
  });
};

export const useIsLoggedIn = () => {
  const [val, setVal] = useState(false);
  auth.onAuthStateChanged(user => {
    if (user) {
      setVal(true);
    }
  });
  return val;
};

export default firebase;
