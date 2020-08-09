const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

require('dotenv').config()

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGING,
    appId: process.env.APIID,
    measurementId: process.env.MEASUREMENTID
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

module.exports = firebase;