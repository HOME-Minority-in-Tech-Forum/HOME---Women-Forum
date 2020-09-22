const express = require('express');
const {firebase, admin} = require('../config/config.js');
const router = express.Router()
require('dotenv').config();

const db = firebase.firestore();


//Get all video requests and likes
router.get("/", (req, res) => {
    (async function getMarkers() {
        const events = db.collection('VideoReq');
        events
            .get()
            .then((querySnapshot) => {
                const tempDoc = []
                querySnapshot.forEach((doc) => {
                    tempDoc.push({ id: doc.id, ...doc.data() })
                })
                res.send(tempDoc);
            })
    })()
});

//accept and verify idToken, then post request to database
router.post('/req', (req, res) => {
    const idToken = req.body.token

    //idToken comes from the client app
    admin.auth().verifyIdToken(idToken)
    .then(function(decodedToken) {
      let uid = decodedToken.uid;
      // ...
      console.log(uid)
      res.send('success')
    }).catch(function(error) {
      // Handle error
      console.error(error)
    });
    
})

module.exports = router;