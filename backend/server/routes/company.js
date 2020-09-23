const express = require('express');
const {firebase} = require('../config/config.js');
const router = express.Router()
require('dotenv').config();

const db = firebase.firestore();

//get all info from all companies
router.get("/", (req, res) => {

    (async function getMarkers() {
        const events = db.collection('info');
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


//post a single document to collection info
//this route is only available for personel of a company
router.post('/', (req, res) => {
    const data = req.body;
    // res.send(data);
    db.collection("info").add(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

//update company infomation
router.put('/', (req, res) => {

    //need post id or name from req.body
    const dbRef = db.collection("info").doc(req.body.name)


    db.collection("info").update(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});


module.exports = router;