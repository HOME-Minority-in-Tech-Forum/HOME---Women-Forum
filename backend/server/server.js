const express = require('express');
var bodyParser = require('body-parser')
const {first, second} = require('./config/config.js');
// const christy = require('./config/christyConfig.js');
require('dotenv').config();

const app = express();
const db = first.firestore();
const database = second.firestore();
//port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

//landing page
app.get("/", (req, res) => {
    res.send("Welcome");
});

//get all info from all companies
app.get("/api/companies", (req, res) => {

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
app.post('/api/companies', (req, res) => {
    const data = req.body;
    res.send(data);
//     db.collection("info").add(data)
//   .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
});


//Get all Youtube Video JSON
app.get("/api/videos", (req, res) => {
    // res.send("hello");
    (async function getMarkers() {
        const events = database.collection('YoutubeVid');
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

app.listen(PORT, () => console.log(`Listening on ${PORT}`));