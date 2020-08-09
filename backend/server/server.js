const express = require('express');
require('dotenv').config();
const firebase = require('./config/config.js');

const app = express();
const db = firebase.firestore();
//port
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());

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
})


//post a single document to collection info
app.post('/api/companies', (req, res) => {
    const data = req.body;
    db.collection("info").add(data)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));