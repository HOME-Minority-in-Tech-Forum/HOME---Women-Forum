const express = require('express');
const {firebase} = require('../config/config.js');
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

//add new data to database
router.post('/videosreq', (req, res) => {
    res.send("I can postttttt");
    // let data = {
    //     uid: uid,
    //     content: req.body
    // }
    // db.collection("VideoReq").add(data)
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
});



module.exports = router;