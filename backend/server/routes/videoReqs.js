const express = require('express');
const firebase = require('../config/config.js');
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
})

module.exports = router;