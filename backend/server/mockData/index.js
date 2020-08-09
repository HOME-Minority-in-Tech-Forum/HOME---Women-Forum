const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const data = require('./data.js');
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
  });

const  db = firebase.firestore();
// console.log(data);
data.forEach(doc => {
  db.collection("info").add(doc)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
})

  