import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import axios from "axios";
// import { merge } from "../../backend/server/routes/auth";

require("dotenv").config("../.env");

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

export const collectIdsAndData = (doc) => ({ id: doc.id, ...doc.data() });

export const createMemberProfileDocument = async (
  user,
  firstName,
  lastName,
  ...additionalData
) => {
  if (!user) {
    return;
  }

  // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  // .then(function(idToken) {
  //   const client = axios.create({
  //     baseURL: 'http://localhost:4000',
  //     json: true
  //   })

  //   client({
  //     method: 'post',
  //     url: '/',
  //     headers: {
  //       'AuthToken': idToken
  //     }
  //   }).then((res) => {
  //     // this.response = res.data.message
  //     console.log('success');
  //   }).catch((error) => {
  //     // this.response = error
  //   })
  // Send token to your backend via HTTP
  //   axios.post('http://localhost:4000/', {
  //     headers: {
  //       'AuthToken': `${idToken}`
  //     }
  //   })
  //   .then(response => {
  //     console.log('success');
  //   })
  //   .catch(function(error) {
  //     // Handle error
  //     console.error(error);
  //   });
  // });
  // Getting a reference to the `user` collection where the member profile is located
  const userRef = firestore.doc(`users/${user.uid}`);

  // Now fetching the document at that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { uid, email, displayName } = user;

    const createdAt = new Date();
    // if this document doesn't exist this will create it
    try {
      await userRef.set({
        email,
        displayName: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        createdAt,
        ...additionalData,
      });

      // this updates the property so it's
      // accessible to from the data store
      await auth.currentUser.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) {
    return null;
  }

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.log(`Error fetching user ${error.message}`);
  }
};

export const isLoggedIn = () => {
  new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
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
  auth.onAuthStateChanged((user) => {
    if (user) {
      setVal(true);
    }
  });
  return val;
};

export default firebase;
