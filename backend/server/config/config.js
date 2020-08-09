const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");


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

  const christyConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };
  // Initialize Firebase
  var first = firebase.initializeApp(firebaseConfig, 'first_instance');
  var second = firebase.initializeApp(christyConfig, 'second_instance')

  module.exports = {first, second};