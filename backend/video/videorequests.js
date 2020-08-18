const express = require('express')
const firebase = require('/Users/czheng/HOME---Women-Forum/backend/server/config/config.js');
const db = firebase.firestore();
const port = 3000;
const app = express();

app.use(express.json());

//Get Youtube Video JSON
app.get("/api/videosreq", (req, res) => {
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

//Make a Video Request
//var count = 1;
app.post("/api/videosreq", (req, res) => {
    let message = req.body;
    db.collection('VideoReq')
        .doc()
        .set(message)
        .then(() => {
            res.send(message);
        })
    //count = count+1;
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})