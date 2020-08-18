const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");
require("firebase/storage");
require('dotenv').config()
const keys = require('./keys.js');

var firebaseConfig = {
    apiKey: keys.API_KEY,
    authDomain: keys.AUTH_DOMAIN,
    databaseURL: keys.DATABASE_URL,
    projectId: keys.PROJECT_ID,
    storageBucket: keys.STORAGE_BUCKET,
    messagingSenderId: keys.MESSAGING_SENDER_ID,
    appId: keys.APP_ID
};


firebase.initializeApp(firebaseConfig);
module.exports = firebase;

