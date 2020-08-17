const express = require('express');
const firebase = require('./config/config.js');
require('dotenv').config();


const app = express();
const db = firebase.firestore();
const storage = firebase.storage();//<--need to fix
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
    // res.send(data);
    db.collection("info").add(data)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});


//Get all Youtube Video JSON
app.get("/api/videos", (req, res) => {
    // res.send("hello");
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

//Get all video requests and likes
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

//Get Video from firebase storage 
//TODO: Not working yet
app.get("/api/storage/videos", (req, res) => {
    (async function getMarkers() {
        let listRef = storage.ref("Videos")
        let i = 1
        listRef.listAll().then(function(result) {
            let tempDoc = []
            let length = result.items.length
            result.items.forEach(function(itemRef) {
                itemRef.getDownloadURL()
                    .then(function(url){
                        tempDoc.push(url);
                        // console.log(tempDoc);
                        if(i === length){
                             res.send(tempDoc);   //only gets 1 video url which is why I add to tempDoc
                        }
                        else{
                            i = i+1;
                        }
                    });
            });

        }).catch(function(error) {
            console.log("error encountered");
        });
    })()
})
app.listen(PORT, () => console.log(`Listening on ${PORT}`));