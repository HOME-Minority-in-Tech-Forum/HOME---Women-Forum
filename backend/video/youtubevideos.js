const express = require('express')
const firebase = require('../server/config/firebase.js');
const port = 3000;
const app = express();
const db = firebase.firestore();

app.use(express.json());

//Get Youtube Video JSON
app.get("/api/videos", (req, res) => {
    (async function getMarkers() {
        const events = db.collection('YoutubeVid');
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})