const firebase = require("firebase");
require('dotenv').config();
// Required for side-effects
require("firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
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