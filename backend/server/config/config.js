const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");
require("firebase/storage");
global.XMLHttpRequest = require("xhr2");

require('dotenv').config();

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  module.exports = firebase;